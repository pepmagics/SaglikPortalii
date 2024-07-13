const path = require("path");
const { User, Message } = require("./config");
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { exec } = require('child_process');
const socketIo = require('socket.io');
const http = require('http');
const exercises = require('./exercises');
const foods = require('./nutrition');
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Helping to use css files
app.use(express.static("public"));

// Configure session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Passport.js Local Strategy
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Middleware to check if user is authenticated
app.use((req, res, next) => {
    res.locals.user = req.isAuthenticated() ? req.user : null;
    next();
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    // Mesajları yükle
    socket.on('loadMessages', async ({ userId, recipientId }) => {
        const messages = await Message.find({
            $or: [
                { sender: userId, recipient: recipientId },
                { sender: recipientId, recipient: userId }
            ]
        }).populate('sender');
        socket.emit('messages', messages);
    });

    // Yeni mesaj gönderildiğinde
    socket.on('sendMessage', async ({ senderId, recipientId, content }) => {
        const message = new Message({
            sender: senderId,
            recipient: recipientId,
            content: content,
            date: new Date()
        });
        await message.save();
        socket.broadcast.emit('newMessage', message); // Yeni mesajı diğer istemcilere gönder
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Eğitmen kullanıcı listesi
app.get('/users', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }

    if (!req.user.isTrainer) {
        return res.status(403).send('Erişim reddedildi');
    }

    const users = await User.find({ isTrainer: false });
    res.render('users', { users });
});

// Kullanıcı Eğitmen listesi
app.get('/trainers', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    const users = await User.find({ isTrainer: true });
    res.render('trainers', { users });
});

// Belirli bir kullanıcı ile sohbet
app.get('/chat/:userId', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    const user_ = await User.findById(req.params.userId);
    const messages = await Message.find({
        $or: [
            { sender: req.user._id, recipient: req.params.userId },
            { sender: req.params.userId, recipient: req.user._id }
        ]
    }).populate('sender');

    res.render('chat', { user_, messages, currentUser: req.user });
});

// Routes
app.get("/", (req, res) => {
    res.render("indeks", { bmi: "" });
});

app.get("/indeks", (req, res) => {
    res.render("indeks", { bmi: "" });
});

app.get("/anasayfa", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.render("anasayfa", { user: req.user });
});

app.get('/saglik_Testleri', (req, res) => {
    res.render('saglik_Testleri', { imagePath: './src/apple.jpg' });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/profile/editProfile", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.render("editProfile", { user: req.user });
});

app.post("/profile/editProfile", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }

    const { name, surname, username, email, telno, birthDate } = req.body;
    try {
        await User.findByIdAndUpdate(req.user._id, {
            name,
            surname,
            username,
            email,
            telno,
            birthDate
        });

        res.redirect("/profile");
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).send("An error occurred while updating the profile.");
    }
});

app.get("/profile", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.render("profile", { user: req.user });
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

app.post("/indeks", async (req, res) => {
    var w = parseFloat(req.body.w);
    var h = parseFloat(req.body.h);
    let result = (w / (h * h)) * 10000;
    const bmi = await result.toFixed(2);
    console.log(bmi);
    res.render("indeks", { bmi: bmi });
});

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.first_name,
        surname: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        telno: req.body.phone,
        birthDate: req.body.birthdate,
        password: req.body.password
    };

    const existingUser = await User.findOne({ username: data.username });

    if (existingUser) {
        res.render("signup", {
            message: "Kullanıcı zaten kayıtlı. Lütfen farklı bir kullanıcı adı seçin.",
            checkingMessage: true
        });
    } else {
        const passwordMatch = req.body.password === req.body.password2;
        if (!passwordMatch) {
            res.render("signup", {
                message: "Şifreler eşleşmiyor",
                checkingMessage: true
            });
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;
            const userdata = await User.insertMany(data);
            console.log(userdata);
            res.render("signup", {
                message: "Kullanıcı başarıyla kaydedildi",
                checkingMessage: false
            });
        }
    }
});

// Login User
app.post("/login", passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/exercises', (req, res) => {
    res.render('exercises', { exercises });
});

app.get('/exercise-finder', (req, res) => {
    const { kategori, tur } = req.query;
    let filteredExercises = exercises;

    if (kategori) {
        filteredExercises = filteredExercises.filter(exercise => exercise.kategori === kategori);
    }

    if (tur) {
        filteredExercises = filteredExercises.filter(exercise => exercise.tur === tur);
    }

    // Shuffle the filtered exercises
    filteredExercises = filteredExercises.sort(() => Math.random() - 0.5).slice(0, 3);

    res.render('exercise-finder', { exercises: filteredExercises });
});

app.get('/nutrition', (req, res) => {
  res.render('nutrition', { foods });
});

app.get('/filter-foods', (req, res) => {
  const category = req.query.category;
  const filteredFoods = foods.filter(food => food.kategori === category);
  res.json({ foods: filteredFoods });
});

app.get('/nutrition-finder', (req, res) => {
  res.render('nutrition-finder');
});

app.get('/nutrition-body', (req, res) => {
  res.render('nutrition-body');
});

app.get("/test-details/:testId", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }

    const userId = req.user._id;
    const testId = req.params.testId;

    try {
        const user = await User.findById(userId);
        const testResult = user.testResults.id(testId);

        if (!testResult) {
            return res.status(404).send('Test result not found');
        }

        res.render("test-details", { testResult });
    } catch (error) {
        console.error('Error fetching test result:', error);
        res.status(500).send('An error occurred');
    }
});

app.get('/test-results', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    // Assuming user data is available in req.user
    const user = req.user;

    res.render('test-results', {
        user: user
    });
});

app.post("/kalp-krizi-test", async (req, res) => {
    try {
        const userId = req.user._id;
        const {
            age, gender, diabetes, familyHistory, smoking, obesity,
            alcoholConsumption, exerciseHoursPerWeek, diet, previousHeartProblems,
            medicationUse, stressLevel, sedentaryHoursPerDay, bmi,
            physicalActivityDaysPerWeek, sleepHoursPerDay, saveResults
        } = req.body;

        const inputs = [
            age, gender, diabetes, familyHistory, smoking, obesity,
            alcoholConsumption, exerciseHoursPerWeek, diet, previousHeartProblems,
            medicationUse, stressLevel, sedentaryHoursPerDay, bmi,
            physicalActivityDaysPerWeek, sleepHoursPerDay
        ];

        const rangeInputHeart = inputs.map(input => input === undefined ? "0" : input).join(" ");
        console.log('User input:', rangeInputHeart);

        const output = await runPythonScriptHeart(rangeInputHeart);
        console.log('Output:', output);

        const cleanOutput = parseInt(output.replace("{", "").replace("}", "").trim());

        // Save the results if the user opted in
        if (saveResults === 'on') {
            await User.findByIdAndUpdate(userId, {
                $push: {
                    testResults: {
                        testName: 'Kalp Krizi Testi',
                        results: {
                            age, gender, diabetes, familyHistory, smoking, obesity,
                            alcoholConsumption, exerciseHoursPerWeek, diet, previousHeartProblems,
                            medicationUse, stressLevel, sedentaryHoursPerDay, bmi,
                            physicalActivityDaysPerWeek, sleepHoursPerDay,
                            result: cleanOutput
                        }
                    }
                }
            });
        }
        res.json({ output: cleanOutput });
    } catch (error) {
        console.error('Error running Python script:', error);
        res.status(500).send('An error occurred');
    }
});


const runPythonScriptHeart = (rangeInputHeart) => {
    return new Promise((resolve, reject) => {
        const pythonProcessHeart = exec(`python3 ./src/heart-attack.py ${rangeInputHeart}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error}`);
                reject(error);
            } else {
                console.log(`Python script executed successfully. Output: ${stdout}`);
                resolve(stdout);
            }
        });
    });
};

app.get('/kalp-krizi-test', async (req, res) => {
    res.render('kalp-krizi-test', { output: '' });
});

app.post("/akciger-kanseri-testi", async (req, res) => {
    try {
        const userId = req.user._id;
        const {
            age, gender, airPollution, alcoholUse, dustAllergy,
            occupationalHazards, geneticRisk, chronicLungDisease, obesity,
            smokingLevel, passiveSmoking, chestPain, bloodyCough, fatigue,
            weightLoss, shortnessOfBreath, wheezing, difficultySwallowing,
            clubbing, frequentColds, dryCough, snoring, saveResults
        } = req.body;

        const inputs = [
            age, gender, airPollution, alcoholUse, dustAllergy,
            occupationalHazards, geneticRisk, chronicLungDisease, obesity,
            smokingLevel, passiveSmoking, chestPain, bloodyCough, fatigue,
            weightLoss, shortnessOfBreath, wheezing, difficultySwallowing,
            clubbing, frequentColds, dryCough, snoring
        ];

        const rangeInput = inputs.map(input => input === undefined ? "0" : input).join(" ");
        console.log('User input:', rangeInput);

        const output = await runPythonScript(rangeInput);
        console.log('Output:', output);

        const cleanOutput = parseInt(output.replace("[", "").replace("]", "").trim());

        // Save the results if the user opted in
        if (saveResults === 'on') {
            await User.findByIdAndUpdate(userId, {
                $push: {
                    testResults: {
                        testName: 'Akciğer Kanseri Testi',
                        results: {
                            age, gender, airPollution, alcoholUse, dustAllergy,
                            occupationalHazards, geneticRisk, chronicLungDisease, obesity,
                            smokingLevel, passiveSmoking, chestPain, bloodyCough, fatigue,
                            weightLoss, shortnessOfBreath, wheezing, difficultySwallowing,
                            clubbing, frequentColds, dryCough, snoring,
                            result: cleanOutput
                        }
                    }
                }
            });
        }

        res.json({ output: cleanOutput });
    } catch (error) {
        console.error('Error running Python script:', error);
        res.status(500).send('An error occurred');
    }
});


// Python scriptini çalıştıran fonksiyon
const runPythonScript = (rangeInput) => {
    return new Promise((resolve, reject) => {
        const pythonProcess = exec(`python3 ./src/index.py ${rangeInput}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error}`);
                reject(error);
            } else {
                console.log(`Python script executed successfully. Output: ${stdout}`);
                resolve(stdout);
            }
        });
    });
};

app.get('/akciger-kanseri-testi', async (req, res) => {
    res.render('akciger-kanseri-testi', { output: '' });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Serverın çalıştığı port: ${port}`);
});

const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { exec } = require('child_process');

const app = express();
// Convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

// Use EJS as the view engine
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
        const user = await collection.findOne({ username: username });
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
        const user = await collection.findById(id);
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

// Routes
app.get("/", (req, res) => {
    res.render("home");
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

app.get("/profile", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.render("profile", { user: req.user });
});

app.post("/logout", (req, res) => {
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

    const existingUser = await collection.findOne({ username: data.username });

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
            const userdata = await collection.insertMany(data);
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
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));


app.post("/kalp-krizi-test", async (req, res) => {
    try {
        const {
            age,
            gender,
            diabetes,
            familyHistory,
            smoking,
            obesity,
            alcoholConsumption,
            exerciseHoursPerWeek,
            diet,
            previousHeartProblems,
            medicationUse,
            stressLevel,
            sedentaryHoursPerDay,
            bmi,
            physicalActivityDaysPerWeek,
            sleepHoursPerDay
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
        res.render('kalp-krizi-test', { output: cleanOutput });
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
}
);

app.post("/akciger-kanseri-testi", async (req, res) => {
    try {
        const {
            age,
            gender,
            airPollution,
            alcoholUse,
            dustAllergy,
            occupationalHazards,
            geneticRisk,
            chronicLungDisease,
            obesity,
            smokingLevel,
            passiveSmoking,
            chestPain,
            bloodyCough,
            fatigue,
            weightLoss,
            shortnessOfBreath,
            wheezing,
            difficultySwallowing,
            clubbing,
            frequentColds,
            dryCough,
            snoring
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
        res.render('akciger-kanseri-testi', { output: cleanOutput });
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

app.listen(port, () => {
    console.log(`Serverın çalıştığı port: ${port}`);
});

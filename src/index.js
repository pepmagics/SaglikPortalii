const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

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
    successRedirect: '/anasayfa',
    failureRedirect: '/login',
    failureFlash: true
}));

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

// POST isteği için bir endpoint tanımla
app.post("/akciger-kanseri-testi", async (req, res) => {
    try {
        const rangeInput1 = req.body.rangeInput1;
        console.log(rangeInput1);
        const rangeInput2 = req.body.rangeInput2;
        const rangeInput3 = req.body.rangeInput3;
        const rangeInput4 = req.body.rangeInput4;
        const rangeInput5 = req.body.rangeInput5;
        const rangeInput6 = req.body.rangeInput6;
        const rangeInput7 = req.body.rangeInput7;
        const rangeInput8 = req.body.rangeInput8;
        const rangeInput9 = req.body.rangeInput9;
        const rangeInput10 = req.body.rangeInput10;
        const rangeInput11 = req.body.rangeInput11;
        const rangeInput12 = req.body.rangeInput12;
        const rangeInput13 = req.body.rangeInput13;
        const rangeInput14 = req.body.rangeInput14;
        const rangeInput15 = req.body.rangeInput15;
        const rangeInput16 = req.body.rangeInput16;
        const rangeInput17 = req.body.rangeInput17;
        const rangeInput18 = req.body.rangeInput18;
        const rangeInput19 = req.body.rangeInput19;
        const rangeInput20 = req.body.rangeInput20;
        const rangeInput21 = req.body.rangeInput21;
        const rangeInput22 = req.body.rangeInput22;
        const rangeInput23 = req.body.rangeInput23;

        const rangeInput = `${rangeInput1} ${rangeInput2} ${rangeInput3} ${rangeInput4} ${rangeInput5} ${rangeInput6} ${rangeInput7} ${rangeInput8} ${rangeInput9} ${rangeInput10} ${rangeInput11} ${rangeInput12} ${rangeInput13} ${rangeInput14} ${rangeInput15} ${rangeInput16} ${rangeInput17} ${rangeInput18} ${rangeInput19} ${rangeInput20} ${rangeInput21} ${rangeInput22} ${rangeInput23}`;
        console.log('User input:', rangeInput);

        const output = await runPythonScript(rangeInput);
        console.log('Output:', output);

        res.render('akciger-kanseri-testi', { output: output });
    } catch (error) {
        console.error('Error running Python script:', error);
        res.status(500).send('An error occurred');
    }
});

app.get('/akciger-kanseri-testi', async (req, res) => {
    res.render('akciger-kanseri-testi', { output: '' });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Serverın çalıştığı port: ${port}`);
});

const express = require("express");
const path = require("path");
const User = require("./config");
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
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/exercises', (req, res) => {
    const exercises = [
        {
            name: 'Squat',
            description: 'Ayakta dururken dizlerinizi bükün ve çömelin.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/squat.gif',
            kategori: 'omuz'
          },
          {
            name: 'Rope Push Down',
            description: '',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/rope%20pushdown.gif',
            kategori: 'omuz'
          },
          {
            name: 'Dumbbell Lunge',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif',
            kategori: 'omuz'
          },
          {
            name: 'Overhead press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/overhead%20press.gif',
            kategori: 'omuz'
          },
          {
            name: 'Lateral Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/lateral%20raise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Incline Lateral/Trap Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/boraise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Lying Dumbbell Rear Lateral Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLyingRearLateralRaise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Dumbbell Seated Rear Lateral Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBSeatedRearLateralRaise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Standing Dumbbell Upright Row',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBUPROW.gif',
            kategori: 'omuz'
          },
          {
            name: 'Standing Barbell Curl and Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/barcurlandpress1.gif',
            kategori: 'omuz'
          },
          {
            name: 'Dumbbell curl with shoulder press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBcurlandpress.gif',
            kategori: 'omuz'
          },
          {
            name: 'Seated Dumbbell Shoulder Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBShoulderPress.gif',
            kategori: 'omuz'
          },
          {
            name: 'Alternating Dumbbell Front Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBFrontRaise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Barbell Front Raise',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBFrontRaise.gif',
            kategori: 'omuz'
          },
          {
            name: 'Hamer curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/hamer%20curl.gif',
            kategori: 'kol'
          },
          {
            name: 'Rope push down',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif',
            kategori: 'kol'
          },
          {
            name: 'Skull Crusher',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/Skull%20Crusher.gif',
            kategori: 'kol'
          },
          {
            name: 'Cable curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/cable%20curl.gif',
            kategori: 'kol'
          },
          {
            name: 'Dumbbell Wrist Curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBReverseWristCurl.gif',
            kategori: 'kol'
          },
          {
            name: 'Supine Close Grip Bench Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/triceps2.gif',
            kategori: 'kol'
          },
          {
            name: 'Dumbbell Curl (two arms)',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/db_biceps_curl.gif',
            kategori: 'kol'
          },
          {
            name: 'Concentration Curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBConcentrationCurl.gif',
            kategori: 'kol'
          },
          {
            name: 'Barbell curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBCurl.gif',
            kategori: 'kol'
          },
          {
            name: 'Dumbell/Bicep curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBCurl.gif',
            kategori: 'kol'
          },
          {
            name: 'Isometric Wall Squat with dumbbell Curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/isometricwallsquatwithcurl.gif',
            kategori: 'kol'
          },
          {
            name: 'Dynamic Lunge and Curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/dynamiclungecurl1.gif',
            kategori: 'kol'
          },
          {
            name: 'Dumbbell curl with shoulder press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBcurlandpress.gif',
            kategori: 'kol'
          },
          {
            name: 'Supine Dumbbell bicep curl',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/Supine%20DB%20bicep%20curl.gif',
            kategori: 'kol'
          },
          {
            name: 'Diamond Pushups',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/11DiamondPushup.gif',
            kategori: 'kol'
          },
          {
            name: 'Lying Dumbbell Tricep Extension',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBLyingTriExt.gif',
            kategori: 'kol'
          },
          {
            name: 'Close Grip Bench Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBCloseGripBenchPress.gif',
            kategori: 'kol'
          },
          {
            name: 'Bent Over Cable Extension',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/CBBentoverTriExt.gif',
            kategori: 'kol'
          },
          {
            name: 'Seated Barbell Extension',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BBTriExt.gif',
            kategori: 'kol'
          },
          {
            name: 'Seated Dumbbell Tricep Overhead Extension',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBTriExt.gif',
            kategori: 'kol'
          },
          {
            name: 'Bench cable fly',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnessschemas.nl/images/v2/cable%20fly.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Dumbbell press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/dumbbell%20press.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Barbel bench press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/v2/bench%20press.gif',
            kategori: 'gögüs'
          },
          {
            name: 'DECLINE MACHINE CHEST FLY',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DeclineFly.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Pull Over (stability ball)',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/PullOverOnBall.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Standard Pushup',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/08StandardPushup.gif',
            kategori: 'gögüs'
          },
          {
            name: 'DUMBBELL PRESS ON BALL (STABILITY BALL)',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBpress.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Decline Dumbell Chest Flye',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/decline%20DB%20flye.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Decline Dumbbell Bench Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DeclineBenchPress.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Decline Bench Press (barbell)',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/BarbellDeclineBenchPress.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Decline Machine Chest Press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DeclineChestPress.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Dumbell pullover',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DBPullover.gif',
            kategori: 'gögüs'
          },
          {
            name: 'MACHINE INCLINE CHEST PRESS',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/machinei.gif',
            kategori: 'gögüs'
          },
          {
            name: 'BARBELL INCLINE BENCH PRESS',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/Barbell%20Incline%20Chest%20Press.gif',
            kategori: 'gögüs'
          },
          {
            name: 'INCLINE DUMBBELL CHEST FLY',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/InclineBenchPress.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Incline dumbell press',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DB%20incline%20chest%20press.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Wide Pushups',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/09WidePushup.gif',
            kategori: 'gögüs'
          },
          {
            name: 'Decline Machine Chest Fly',
            description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
            imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/DeclineFly.gif',
            kategori: 'gögüs'
          },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      {
        name: 'DUMBBELL LUNGE',
        description: 'Bir ayağınızı öne atarak çömelin ve tekrar kalkın.',
        imageUrl: 'https://www.fitnesschemas.nl/images/voorbeeldoefeningen/oefeningen2/DBLunge.gif'
      },
      
      

    ];
  
    res.render('exercises', { exercises });
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

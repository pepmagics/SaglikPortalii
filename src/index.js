const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middlewares/authMiddleware")

const app = express();
//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//use EJS as the view engine
app.set('view engine', 'ejs');

//helping to use css files
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/anasayfa", async (req, res) => {
    const tokenCheck = req.headers.cookie.split('=')[1];
    if (!tokenCheck) {
        return res.status(401).json({
            succeeded: false,
            error: 'No authorization header provided',
        });
    }
    req.user = await collection.findById((jwt.verify(tokenCheck, "secret"))._id);
    const user = req.user;
    res.render("anasayfa", { user: user});
});

app.get('/saglik_Testleri', (req, res) => {
    res.render('saglik_Testleri', { imagePath:'./src/apple.jpg' });
  });


app.get("/", (req, res) =>{
    const messages = req.flash(); // Declare a variable to store the flash messages
    res.render("login", { messages });


});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {   
    res.render("login");

});

app.get("/profile/editProfile", async (req, res) => {

    const tokenCheck = req.headers.cookie.split('=')[1];
    if (!tokenCheck) {
        return res.status(401).json({
            succeeded: false,
            error: 'No authorization header provided',
        });
    }
    req.user = await collection.findById((jwt.verify(tokenCheck, "secret"))._id);
    const user = req.user;   
    res.render("editProfile", { user: user });

});

app.get("/profile", async (req, res) => { 

    const tokenCheck = req.headers.cookie.split('=')[1];
    if (!tokenCheck) {
        return res.status(401).json({
            succeeded: false,
            error: 'No authorization header provided',
        });
    }
    req.user = await collection.findById((jwt.verify(tokenCheck, "secret"))._id);
    const user = req.user;
    res.render("profile", { user: user });

});

app.post("/logout", (req, res) => {
    res.cookie('token', "", {httpOnly: true}); // set the token in the cookie
    res.redirect("/");
});


//Register User
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.first_name,
        surname: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        telno: req.body.phone,
        birthDate: req.body.birthdate,
        password: req.body.password
    }

    //check if the user already exists in the database
    const existingUser = await collection.findOne({username: data.username});

    if(existingUser) {
        res.render("signup", {
            message: "Kullanıcı zaten kayıtlı. Lütfen farklı bir kullanıcı adı seçin.",
            checkingMessage: true
        });
    }
    else{
        
        const passwordMatch = req.body.password === req.body.password2;
        if(!passwordMatch){
            res.render("signup", {
                message: "Şifreler eşleşmiyor",
                checkingMessage: true
            });
        }
        else{
        //hash the password using bcrypt
        const saltRounds = 10; //Number of salt round for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword; //Replace the hash password with original password
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.render("signup", {
            message: "Kullanıcı başarıyla kaydedildi",
            checkingMessage: false
        });
    }
    }
})

//Login user
app.post("/login", async (req, res) => {
    try{
        const check = await collection.findOne({username: req.body.username});
        if (!check) {
            res.render("login", {
                message: "Kullanıcı adı bulunamadı"
            });
        }
        else{
            //compare the hash password from database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){

            const token = jwt.sign({ _id: check._id}, "secret");
            res.cookie('token', token, {httpOnly: true}); // set the token in the cookie
            console.log(req.headers.cookie.split('=')[1]); // get the token from the cookie
           
            res.redirect("/anasayfa");
        }
        else{
            res.render("login", {
                message: "Yanlış şifre"
            });
        }
        }
        
    }catch{
        res.send("wrong details");
    }
});
   

const port = 3000;

app.listen(port, () => {

    console.log(`Serverın çalıştığı port: ${port}`);
});

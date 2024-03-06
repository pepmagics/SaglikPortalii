const express = require("express");
const path = require("path");
//const bcrypt = require("bcrypt");
const collection = require("./config");
const session = require('express-session');

const flash = require('connect-flash');
const bcrypt = require('bcryptjs');


//111
//222
const app = express();
//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//use EJS as the view engine
app.set('view engine', 'ejs');
//static file

app.use(express.static("public"));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.get("/", (req, res) =>{
    const messages = req.flash(); // Declare a variable to store the flash messages
    res.render("login", { messages });
});

app.get("/signup", (req, res) => {
    const messages = req.flash(); // Declare a variable to store the flash messages
    res.render("signup", { messages });
});

app.get("/deneme", (req, res) => {
    res.render("deneme");
});

app.get("/home", (req, res) => {    
    res.render("home");
});

//Register User
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        password: req.body.password
    }

    //check if the user already exists in the database
    const existingUser = await collection.findOne({name: data.name});

    if(existingUser) {
        res.render("signup", {
            message: "Kullanıcı zaten kayıtlı. Lütfen farklı bir kullanıcı adı seçin.",
            check: true
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
            check: false
        });
    }
})

//Login user
app.post("/login", async (req, res) => {
    try{
        const check = await collection.findOne({name: req.body.username});
        if (!check) {
            res.render("login", {
                message: "Kullanıcı adı bulunamadı"
            });
        }
        else{
            //compare the hash password from database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            res.render("home", { username: req.body.username });
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
})
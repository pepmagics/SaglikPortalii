const express = require("express");
const path = require("path");
const collection = require("./config");
const session = require('express-session');
const bcrypt = require('bcryptjs');


const app = express();
//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//use EJS as the view engine
app.set('view engine', 'ejs');
//static file

//helping to use css files
app.use(express.static("public"));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));


app.get("/", (req, res) =>{
    res.render("home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/deneme", (req, res) => {
    res.render("deneme");
});

app.get("/login", (req, res) => {   
    res.render("login");

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
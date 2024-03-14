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
    res.render("anasayfa", { user: user });

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

app.get("/deneme", async (req, res) => {

    const tokenCheck = req.headers.cookie.split('=')[1];
    if (!tokenCheck) {
        return res.status(401).json({
            succeeded: false,
            error: 'No authorization header provided',
        });
    }
     req.user = await collection.findById((jwt.verify(tokenCheck, "secret"))._id);
    const user = req.user;
    // console.log(user);
    // console.log(tokenCheck);
    // console.log((jwt.verify(tokenCheck, "secret")));
    
    res.render("deneme", { user: user });
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
})
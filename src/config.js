const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://huzeyfeatc9:05377164710fb@cluster0.yqkxkcc.mongodb.net/SaglikPortali");

connect.then(() => {
    console.log("Database connected succesfully");
})
.catch(() => {
    console.log("Database cannot be connected");
})

// Create a schema

const LoginSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

const collection = new mongoose.model("users", LoginSchema); //model

module.exports = collection;
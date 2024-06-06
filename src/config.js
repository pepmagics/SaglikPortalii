const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://huzeyfeatc9:05377164710fb@cluster0.yqkxkcc.mongodb.net/SaglikPortali");

connect.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log("Database cannot be connected:", error);
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telno: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    testResults: [
        {
            testName: String,
            results: mongoose.Schema.Types.Mixed,
            date: { type: Date, default: Date.now }
        }
    ]
});

const User = mongoose.model("users", UserSchema); // model

module.exports = User;

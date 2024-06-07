const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://huzeyfeatc9:05377164710fb@cluster0.yqkxkcc.mongodb.net/SaglikPortali")
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Database connection error:", error);
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
    isTrainer: {
        type: Boolean,
        default: false
    },
    testResults: [
        {
            testName: String,
            results: mongoose.Schema.Types.Mixed,
            date: { type: Date, default: Date.now }
        }
    ]
});

const User = mongoose.model("users", UserSchema);

const MessageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('messages', MessageSchema);

module.exports = { User, Message };

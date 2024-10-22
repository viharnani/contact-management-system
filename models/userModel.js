const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add a user name"],
    },
    email: {
        type: String,
        required: [true, "please add the user email address"],
        unique: [true, "email address already taken"],
    },
    password: {
        type: String,
        required: [true, "please add password"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
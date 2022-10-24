const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true},
    email: { type:String, unique: true},
    password: { type:String}
});

module.exports = mongoose.model("user", userSchema);
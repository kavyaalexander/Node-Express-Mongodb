const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/libray');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: String,
    uname: String,
    mobno: Number,
    email: String,
    password: String,
    gender: String
});


var Signupdata = mongoose.model('signupdata', SignupSchema);
module.exports = Signupdata;
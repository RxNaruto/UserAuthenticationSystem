const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/UserAuthentication");

const userSchema= new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    mobile: Number,
})

const User = mongoose.model("user",userSchema);

module.exports={
    User
}
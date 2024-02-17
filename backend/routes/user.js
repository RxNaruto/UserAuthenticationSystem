const express = require("express");
const { User } = require("../database/db");
const router = express.Router();
const {signupSchema} = require("../Types/user")

router.get("/",(req,res)=>{
    res.json({
        msg: "Router is working fine"
    })
})

router.post("/signup",async (req,res)=>{
    const signupValidation=signupSchema.safeParse(req.body);
    if(!signupValidation.success){
        return res.status(404).json({
            msg: "Incorrect Inputs"
        })
    }
    const newUser= await User.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        mobile: req.body.mobile

    })

    if(newUser){
        res.json({
            msg: "User created successful"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }
})

router.get("/signin",async (req,res)=>{
    const uname= req.headers.username;
    const pass = req.headers.password;

    const user = await User.findOne({
        username: uname,
        password: pass,
    })
    if(user){
        res.json({
            msg: "user exist"
        })
    }
    else{
        res.status(404).json({
            msg: "User do not exist"
        })
    }
})

module.exports=router;
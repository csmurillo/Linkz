const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const AuthUser = require('../models/auth-user');

router.post("/signin",(req,res)=>{
    let user;
    AuthUser.findOne({email:req.body.email})
    .then((authenticatedUser)=>{
        if(authenticatedUser){
            user=authenticatedUser;
            return bcrypt.compare(req.body.password,authenticatedUser.password);
        }
        else{
            return res.status(401).json({message:"email not found"});
        }
    })
    .then(bcryptBool=>{
        if(bcryptBool){
            const token = jsonwebtoken.sign(
                {email:user.email, userId:user._id},
                "secret-password",
                {expiresIn: "1h"}
            );
            res.status(200).json({
                token,
                message:"success token created"
            });
        }
        else{
            return res.status(401).json({message:"user password provided is wrong"});
        }
    })
    .catch(err=>{
        return res.status(401).json({message:"error:"+err});
    });
});

router.post("/signup",(req,res)=>{
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        // Store hash in your password DB.
        const user = new AuthUser({
            email:req.body.email,
            password: hash
        });
        user.save()
        .then(result=>{
            res.json({result});
        })
        .catch(err=>{
            res.json({err});
        });
    });
    
});

module.exports = router;

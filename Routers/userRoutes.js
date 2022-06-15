const express = require("express");
//const Route = express.Router();



const userRoute = express.Router();
userRoute
.route("/")
.get(getUser)
.post(postUser)



function getUser(req,res){
    res.send("USERS: 1-ALI 2- AHMAD 3- NOOR 4- AYAN 5- AHMER");
    }

    function postUser(req,res)
    {
        const user= req.body.user;
        res.send(user);
    }


    module.exports= userRoute;
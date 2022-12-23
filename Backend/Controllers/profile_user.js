import { json } from "express";
import userModel from "../models/user-model.js";


const profileUser = async (req, res, next) => {
    var userId = req.id.id;
    let user;

    try {
        user = await userModel.findById(`${userId}`, "-password");
    } catch (e) {
        return console.log("an error occured" + e);
    }
    if (!user) {
        // res.status(404).json({ message: "user not found" })
        // res.send({ message: "user not found" });
        console.log("user not found");
    }
    else {
        console.log("i am going to work")
        // console.log(user)
        //return res.send(200).json({ message: 'user found', user })
        res.sendStatus(200).json({ message: 'user found', user });
        return console.log()

    }
}

export default profileUser;
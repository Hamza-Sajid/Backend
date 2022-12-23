import { json } from "express";
import userModel from "../models/user-model.js";
import bcrypt from 'bcrypt';

const signup = async (req, res, next) => {

    //now write some code to check if email already exist than before going to register part
    //make sure if it exisist than show "you are already part of this sysstem";

    var { password, name, email } = req.body;

    console.log(password, name, email);
    let alreadyMember = false;

    try {
        alreadyMember = await userModel.findOne({ email: req.body.email })
    }

    catch (e) {
        console.log("error occured! " + e);
    }


    if (alreadyMember) {
        res.status(200).json({ message: "user already exisist!" });

    }

    else {

        //now we will be hashing our password before storing anything in this



        console.log(password);
        password = password.toString();
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            await user.save()
        }


        catch (e) {
            console.log("Error occured:" + e)
        }

        res.status(200).json({ message: "user added!" });
    }


}


export default signup;










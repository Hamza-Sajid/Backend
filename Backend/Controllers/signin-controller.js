import userModel from "../models/user-model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { json } from "express";

const login = async (req, res, next) => {

    try {
        let findUser = await userModel.findOne({ email: req.body.email })
        if (findUser) {
            let matchPwd = await bcrypt.compare(req.body.password, findUser.password)
            if (matchPwd) {

                const payload = {
                    id: findUser._id
                }
                const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '48h' })

                res.status(200).json({ token, message: "logined succesfully" })
            }
            else {
                res.send("invalid credentials")
            }
        }

        else {
            res.send("invalid credentials");
        }
    }


    catch (e) {
        console.log("eror occured" + e)
    }
}

export default login;
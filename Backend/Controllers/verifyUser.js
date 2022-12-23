import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import userModel from "../models/user-model.js";
const verifyUser = async (req, res, next) => {
    const token = req.headers[`authorization`];
    // console.log("this is the token" + token);
    if (!token) {
        return res.send({ message: "token not found" });
    }
    //to store the id globaly
    var id;

    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
        if (err) {


            err = {
                name: 'TokenExpiredError',
                message: 'jwt expired',
                expiredAt: 1408621000
            }
            console.log(err)
        }
        else {

            id = data;
            console.log("welcome", data)
            // res.status(200).json({ message: 'welcome', data })
        }

    });

    console.log(id)

    // *******************
    let user;
    try {
        console.log("let's make final tryt")
        console.log(id)
        // `${id.id}`
        user = await userModel.findById(`${id.id}`, "-password");
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
        console.log(user)
        // console.log(user)
        //return res.send(200).json({ message: 'user found', user })
        return res.status(200).json({ message: 'user found', user });


    }









    // req.id = id;

    // next();
};



export default verifyUser;

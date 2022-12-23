import { LocalStorage } from "node-localstorage";
var localStorage = new LocalStorage('./scratch');

import store from "store2"

import { json } from "express";
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

const updateToken = async (req, res, next) => {
    //get token from localstorage
    const updatedTokek = localStorage.getItem("token");

    console.log("show me somethin gfrom local stoarage")
    console.log(store.get('id'))
    console.log(store.get(id))
    store.add('name', "asdsadsa");
    localStorage.setItem("name", "adsadasdsadsa")
    // console.log(store(key));

    //get id from localstorage
    var id = localStorage.getItem(id);
    console.log(id);

    console.log(updatedTokek);


    if (updatedTokek) {
        token.verify(token, process.env.JWT_KEY, (err, data) => {
            if (err) res.status(403).json("token is not valid")
            else {
                const payload = {
                    id: id
                }
                const newToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '15m' })
                res.status(200).json({ token, message: "logined succesfully" })
                // next();
            }

        })
    }
    else {
        res.status(404).json({ message: "token not found" });

    }
}



export default updateToken;
const dbms = require("mongoose");

const User = dbms.Schema({
    email: {
        type:'String',
        unique:true
    },
    password:{
        type:'String',
        unique:true,
    },
    country: String
})


const model = dbms.model("User",User);

module.exports= model;
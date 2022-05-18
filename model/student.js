// const db = require("mongoose");


// const schema = db.Schema({
// 	title: String,
// 	content: String,
// })


// const model = new db.model("User",schema);
// module.exports = model;







//Collection

const dbms = require("mongoose");


//Then creating an schema
const schema = dbms.Schema({
    title:String,
    publishYear:Number,
    price:Number,
})

//Now create an model

const model = dbms.model("User",schema);

module.exports = model;

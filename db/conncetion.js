const db = require("mongoose");


db.connect("mongodb://localhost:27017/upwork").then(()=>
{
    console.log("DB WORKING");
}).catch((e)=>
{
    console.log("ERROR: "+e)
})
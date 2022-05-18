// const db= require("mongoose");


// db.connect("mongodb://localhost:27017/upwork")
// .then( ()=>
// {
//     console.log("CONNCETION ESTABLISHED");
// })
// .catch(()=>
// {
//     console.log("CONNECTION INTRUPTED!!")
// })






//Connceting with MongoDb

const db = require("mongoose");

db.connect("mongodb://localhost:27017/upwork").then( ()=>
{
    console.log("DBMS Running");
}).catch((e)=>
{
    console.log("DBMS NOT Working : "+e)
})

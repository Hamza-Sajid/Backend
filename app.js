const express = require("express");
const app = express();
const userRoute = require("./Routers/userRoutes");

function checkAge(req,res,next)
{
  const age = req.body.age;
  if(age<=18)
  {
    res.send("YOU'RE NOT ALLOWED");
  }
  else
  {
    next();
  }
}

app.use(checkAge);

app.use("/",(req,res)=>
{
  res.send("WELCOME");
})

app.use("/user",userRoute);




app.listen(3000,()=>
{
  console.log("SERVER RUNNING");
})
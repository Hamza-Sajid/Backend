//______________IMPORT__________________
const { response } = require("express");
const express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
const path = require("path");
const { stringify } = require("querystring");
app.use(express.static("."));
require("./db/conncetion");
const User = require("./model/schema");
//_____________________________________

///*******(((((((((API - LISTING))))))))) */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});


//PASSWORD - RESET API
//********************/
app.patch("/reset", async (req, res) => {
  //const {cook_email,cook_password} = req.body;
  const filter = { email: req.body.cookie, password: req.body.old_pass };
  const update = { password: req.body.password };
  try {
    let doc = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json("PASSWORD UPDATE");
  } catch (e) {
    res.send("ERROR :" + e);
  }
});
//********************/



//** LOGIN API **/
//********************/
app.post("/login", async (req, res) => {
  try {
    
    const user = await User.find({ email: req.body.email }).where({
      password: req.body.password,
    });
    if (user.length == 0) {
      res.json("NO USER FOUND");
    } else {
      res.json("user found");
    }
  } catch {
    res.send("ERRORRRRR");
  }
});
//********************/



//REGESITER API --- 
//********************/
app.post("/register", async (req, res) => {
  try {
    const user1 = new User({
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
    });

    const save = await user1.save();
    res.json("USER SAVED");
  } catch (e) {
    //   console.log(JSON.stringify(e))
    //   res.send(e);
    if (JSON.stringify(e.code === 1100)) {
      return res.json({ status: "error", error: "USER ALERADY EXISTS" });
      console.log("USER ALREADY EXISTS");
    }
    throw e;
    res.send(e);
    //res.send(JSON.stringify(e.code));
  }
  res.status({ status: "ok" });
});





// >> API END <<
//APP LISTENING @:
//____________________
app.listen(3000, () => {
  try {
    console.log("SERVER RUNNING");
  } catch (e) {
    console.log("Server error" + e);
  }
});
//____________________

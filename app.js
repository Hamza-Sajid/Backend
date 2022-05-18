// // const { Int32 } = require("bson");
// // const { default: mongoose } = require("mongoose");
// // const db = require("mongoose");
// // const { boolean } = require("webidl-conversions");

// // db.connect("mongodb://localhost:27017/upwork")
// // .then(()=>console.log("WORKING FINE"))
// // .catch((err)=>console.log(err));

// // // 1st create an schemea

// // const nameSchema = new mongoose.Schema({
// //     name: {
// //         type: String,
// //         required : true
// //     },
// //     amount: Number,
// //     active: Boolean
// // })

// // const Name = new mongoose.model("Name",nameSchema);

// // const music = new Name({
// //     name: 'guitar',
// //     amount: 12,
// //     active: true
// // })
// // music.save();

// //Building REST API with Node.JS

// //1st Create an API
// //Then perform the CRUD'S operations

// require("./db/conn");
// const Student = require("./model/student");
// const express = require("express");
// const { ppid } = require("process");
// const app = express();
// const port = process.env.port || 3000;

// app.use(express.json());

// app.get("/std", async (req, res) => {
//   const result = await Student.find();
//   res.send(result);
// });

// app.post("/posts", async (req, res) => {
//     console.log("INSIDE POST FUNCTION")
// 	const post = new Student({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
// 	const reserver = await post.save()
// 	res.json("DATA ADDED");
//     console.log(reserver)
// })

// app.post('/book',async (req, res) => {

//     console.log(req)
//     const user=  new Student (req.body.name, req.body.id)
//         // name: req.body.name,     // id: req.body.id,
//         await user.save();
//     res.send(user);

// });

// app.post("/admission", async (req, res) => {
//   try {
//     const user =await new Student(req.body);
//     const save =  user.save();
//   } catch (e) {
//     console.log("Error occured" + e);
//   }
// });

// app.post("/students", (req, res) => {
//   const user = new Student(req.body);
//   user.save()
//     .then(() => {
//       console.log("ADDED");
//     })
//     .catch((e) => {
//       console.log("ERROR");
//       res.status(400).send(e);
//     });
// });

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.get("/findme", async(req, res) => {
//     const data = await Student.find();
//     res.send(data);
//   });

// app.listen(3000, () => {
//   console.log("working on port: ");
// });

//create an application

const express = require("express");
const { findByIdAndDelete, findByIdAndUpdate } = require("./model/student");
const app = express();
require("./db/conn");
const Book = require("./model/student");

//This will receive all data as a json from postman or from web-app
app.use(express.json());

//1-Post API
app.post("/sell", async (req, res) => {
  const book1 = new Book({
    title: req.body.title,
    publishYear: req.body.publishYear,
    price: req.body.price,
  });
  const save = await book1.save();
  res.send("SAVED");
});

//2-Delete API

app.delete("/FindBook/:id", async (req, res) => {
  try {
    //    const id = req.params.id;
    const done = await Book.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    } else {
      res.delete(done);
      res.write("DELTED");
    }
  } catch (e) {
    res.send("ERROr");
  }
});

//3-GET API

app.get("/FindBook", async (req, res) => {
  try {
    const data = await Book.find();
    // to extract specific data
    // const data = await Book.find({title:"Node"});
    res.send(data);
  } catch {
    res.send("Error Occured");
  }
});



//4-Update or Patch API

app.patch("/findBook/:id", async (req,res)=>
{
   
try
{
    const _id=req.params.id;
    const update = await Book.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    res.send(update);
    
}
   

    catch{
        res.status(404).send();
    }
})






//Main HomePage
app.get("/", (req, res) => {
  res.send("Welcome to the application");
});

app.listen(3000, () => {
  console.log("SERVER WORKING");
});

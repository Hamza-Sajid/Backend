import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './Config/db.js'
import router from './Routes/user-routes.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));
app.use(cors({ origin: true, credentials: true }));


app.use("/api", router)




connectDB();
const port = 3000;

app.listen(port, (req, res) => {
    console.log('server is running on the port no#: ' + port);
})
import express, { urlencoded } from "express";
import cors from "cors";
import cookeiParser from "cookie-parser";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import bodyParser from "body-parser";
import userRoute from "./routes/user_routes.js"

import path from "path";


dotenv.config({});

const __dirname = path.resolve();
const app=express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cookeiParser());
app.use(urlencoded({extended:true}));

app.use(express.static('public'));

const corsOption={
    origin:'http://localhost:5173',
    
    credentials:true,
}
app.use(cors(corsOption));
const PORT=8800;



app.get("/",(req,res)=>{
   return res.status(200).json({
    message:"I'm coming from backend",
    success:true,
   })
})


//Route API:-

app.use("/user",userRoute); 
// app.use("/demand",demandRoute);
// app.use("/search",searchRoute);
// app.use("/contract",contractRoute);
// app.use("/notification",notificationRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log(`server listen at port ${PORT}`);
})

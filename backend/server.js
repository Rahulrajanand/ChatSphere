import  path  from "path";
import express from "express"; 
import dotenv from "dotenv";   
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";        //file imports
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js"; //file imports
import {app, server} from "./socket/socket.js"

import job from "./cron.js";

// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();
job.start();

app.use(express.json());  //allows to extract fields such fullName and other like in auth.controller.js
                          // or to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());  //calling cookieParser just like a middleware


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//static middleware
app.use(express.static(path.join(__dirname,"/frontend/dist"))); //is used to connect frontend application from our server 

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"));
})
 

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
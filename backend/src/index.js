import express from "express";
import authroutes from "./routes/auth.routes.js"
const app=express();
app.get("/", (req, res) => {
    res.send("Welcome to the Real-Time Chat App API");
});
app.use("/api/auth",authroutes);
app.listen(5001,()=>{
  console.log("Server is running on port 5001");
});
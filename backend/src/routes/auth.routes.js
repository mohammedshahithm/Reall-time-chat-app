import express from "express";
const router=express.Router();
router.post("/signup",(req,res)=>{
  res.send("signup route");
});
router.post("/login",(req,res)=>{
  res.send("login rotue");
});
router.post("/logout",(req,res)=>{
  res.send("logout signup");
});
export default router;
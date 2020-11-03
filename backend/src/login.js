const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();
const { uri } = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./jwt");

router.post("/", async function (request, response) {
    const client = new MongoClient(uri,{useUnifiedTopology:true});
    console.log("Login url is hit");
    console.log(request.body);
    const { email, password } = request.body;
    if (!email || !password) {
      return response.send({status:400, message:"Invalid form data"});
    }
    try{
      await client.connect();
      const connection = await client.db("accounts").collection("user_data");
      const user = await connection.findOne({email});
      console.log(user)
      if(!user){
        return response.send({status:404, message:"Account does not exit"});
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
        return response.send({status:401, message:"Invalid credentials"});
      }
      await client.close();
      const token = jwt.sign({ _id: user._id.toString(), email:user.email}, ""+process.env.JWT_SECRET)
      return response.send({status:202,message:"Login successful",token});
    }catch(e){
      console.log(e);
      return response.send({status:500, message:"Internal server err"});
    }
  });
  module.exports=router;
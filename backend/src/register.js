const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();
const { uri } = require("./db");
const validator = require("email-validator");
const bcrypt = require('bcrypt')

router.post("/", async function (request, response) {
    console.log("Register url is hit");
    const client = new MongoClient(uri,{useUnifiedTopology:true});
    const { name, email, password } = request.body;
    const checkEmail = validator.validate(email);
    if (!name || !email || !password) {
      return response.send({ status: 400, message: "Form data not provided" });
    }
    if(!checkEmail){
        return response.send({status:403, message:"Please check your email"});
    }
    if(password.indexOf(' ') >= 0){
        return response.send({status:405,message:"Password contains space"});
      }
      if(password < 6){
        return response.send({status:411, message:"Password is short"});
      }
    
    try {
      await client.connect();
      const connection = await client.db("accounts").collection("user_data");
      const user = await connection.findOne({ email });
      if (user) {
        return response.send({ status: 401, message: "Email is already taken" });
      }
      const passwordHash = await bcrypt.hash(password, 8)
      const newUser = { name, email, password:passwordHash };
      await connection.insertOne(newUser);
      await client.close();
      return response.send({ status: 201, message: "User created" });
    } catch (e) {
      return response.send({status:500, message:"Internal server error"})
      // console.log(e);
    }
  });
  // app.get("/users", function (request, response) {
  //   response.send(database);
  // });
  module.exports=router;
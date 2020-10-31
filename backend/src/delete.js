const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();
const { uri } = require("./db");

router.delete("/user", async function (request, response) {
    const client = MongoClient(uri,{useUnifiedTopology:true});
    const { email } = request.body;
    try{
      await client.connect();
      const connection = await client.db("accounts").collection("user_data");
      const user = await connection.findOne({email});
      if(!user){
        return response.send({status:404, message:"Account does not exit"})
      }
      await connection.deleteOne({email})
      await client.close();
      return response.send("Delete successful");
    }catch(e){
      console.log(e)
      return response.send({status:500, message:"Internal server err"});
    }
  });
  module.exports=router;
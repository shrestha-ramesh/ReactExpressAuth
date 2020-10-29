const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();
const { uri } = require("./db");

router.post("/", async function (request, response) {
    console.log("Register url is hit");
    const client = new MongoClient(uri,{useUnifiedTopology:true});
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.send({ status: 400, message: "Form data not provided" });
    }
    try {
      await client.connect();
      const connection = await client.db("accounts").collection("user_data");
      const user = await connection.findOne({ email });
      if (user) {
        return response.send({ status: 401, message: "Email is already taken" });
      }
      const newUser = { name, email, password };
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
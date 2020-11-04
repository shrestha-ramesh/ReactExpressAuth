const express = require('express');
const jwt = require("jsonwebtoken");
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
const {uri} = require('./db');
const { jwt_secret } = require('./jwt');
router.get("/", async function (request, response) {
    const client = new MongoClient(uri,{useUnifiedTopology:true});
    const token = request.header('Authorization').replace('Bearer ','');
    if(!token){
        return response.send("Failure");
    }
    const decoded = jwt.verify(token, jwt_secret);
 
    try{
        await client.connect();
        const connection = await client.db("accounts").collection("user_data");
        console.log("log 4")
        const email = decoded.email;
        const user = await connection.findOne({email});
        await client.close()
        if(user){
            return response.status(200).send('SUCCESS');
        }
    }catch(e){
        console.log('log 6')
        await client.close()
        return response.send('FAILURE');
    }

});
module.exports= router;
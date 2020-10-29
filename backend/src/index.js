const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(express.json());
app.use(cors());
const registerRouter = require('./register');

app.use('/register',registerRouter);
app.get('/*',(request, response)=>{
    return response.send("404 Page Note Found");
  })
app.listen(PORT, function () {
    console.log("Backend is running");
  });
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(express.json());
app.use(cors());
const registerRouter = require('./register');
const loginRouter = require('./login');
const deleteRouter = require('./delete');
const updateRouter = require('./update');

app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/register',registerRouter);
app.use('/login', loginRouter);
app.get('/*',(request, response)=>{
    return response.send("404 Page Note Found");
  })
app.listen(PORT, function () {
    console.log("Backend is running");
  });
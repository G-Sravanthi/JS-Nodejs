const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('',(req,res) =>{
  console.log('in req',req);
});

app.get('*', (req, res) => {

});
module.exports = app;

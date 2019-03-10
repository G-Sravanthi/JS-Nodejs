const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const router = express.Router();
const mongoDb = require('./routes/mongoDb');
const app = express();
const mongoose = require('mongoose');

// Mongo Db connection
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://savesociety:V97SNxjyNjeWOYLO@storage-rh7pa.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('connected');
  })
  .catch(reason => {
    console.log('Eror reason :', reason);
  });

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
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

app.use('/storeData', mongoDb);
let indexPath = path.join(__dirname, '../angularDist/index.html');
console.log('indexpath',indexPath);
app.use('',express.static(__dirname + '../angularDist/index.html'));
// app.use('',(req,res) =>{
//   let indexPath = path.join(__dirname, '../angularDist/index.html');
//   console.log({indexPath});
//    res.sendFile(indexPath);
// });

app.get('*', (req, res) => {

});
module.exports = app;

const express = require('express')
const mongoose = require('mongoose');
const app = express()
//disable case sensitive case
mongoose.set('strictQuery',false);
var routes=require('./route/routes')

//use for angular middleware 
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.listen(9992,function check(err)
{
    if(err)
    console.log("Server error")
    else
    console.log(" Server started")
});

mongoose.connect('mongodb://127.0.0.1:27017/Employee')
  .then(() => 
  {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error saving exam to MongoDB:', error);
  });
  app.use(express.json());
  app.use(routes);
 


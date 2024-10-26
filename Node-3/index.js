const express = require('express')
const path=require('path')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Node JS ')
})

app.get('/homes',function(req,res){
  res.sendFile("Home.html",{root:"public"});
})

app.get('/std',function(req,res){
  res.sendFile(path.join(__dirname, 'student',"student.html"));
})


app.listen(3000)




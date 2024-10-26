//npm install readline-sync
const readlineSync = require('readline-sync');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Node Js Run Successfully....')
})
app.get('/welcome',function(req,res)
{
res.send("Welcome to my First MEAN Website ")
})

var num1=50;
var num2=60;
var add=num1+num2;
console.log("Addition is ",add);

disp=function(a,b)
{
   console.log("Addition Function is ",a+b)
}
disp(50,60)

//marks=60;
var marks= readlineSync.question('Enter Your Marks ');
if(marks>=40)
{
  console.log("Result is Pass")
}
else
{
  console.log("Result is Fail")
}

const name = readlineSync.question('What is your name?');
console.log("Name is ",name);

app.listen(3000)
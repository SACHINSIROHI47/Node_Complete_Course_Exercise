const express = require('express')
let ejs = require('ejs');
const app = express()
app.set('view engine','ejs');

//----------------------------------
app.get('/', (req, res) => { 
  res.render('home',{name:"Akash"})
})
//----------------------------
var student=[
  {name:'James Smith'},
  {name:'Karan Kumar'}
  ];

app.get('/studentinfo',function (req,res) {
  res.render('posts',{student:student});
})
//-----------------------------------------------------------

app.get('/data', (req, res) => { 
  
  let data = { 
      name: 'Akashdeep', 
      hobbies: ['playing football', 'playing chess', 'cycling'] 
  } 

  res.render('player', { data: data }); 
}); 


app.listen(3000,()=>{
  console.log("Server run successfully..");
})







const express = require('express')
const pug = require('pug');
const app = express()
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.render('webpage', { title: 'Hey', message: 'Hello there!' })
  })

console.log(pug.renderFile('template.pug', {
    name: 'James Smith'
  }));

app.listen(8080);
const express = require('express');
const path = require('path');  // Import the path module

const app = express();

app.use(express.static('employee')); // Serve files from the 'public' directory
app.use(express.static(path.join(__dirname, 'employee')));  // Serve files from the 'public' directory

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'employee', 'emp.html'));  // No need for 'public/' prefix
  });

  app.listen(3000, function () {
    console.log('Server listening on port 3000!');
  });

  
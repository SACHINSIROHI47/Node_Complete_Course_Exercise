const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World from Node.js server running successfully!');
});

// app.use(express.static(path.join(__dirname, './src/app')));
app.use(express.static(path.join(__dirname, './angularUI/dist/angular-ui/browser')));

app.get('/hello', (req, res) => {
    // Send the index.html file from the Angular app's build directory
    res.sendFile(path.join(__dirname, './angularUI/dist/angular-ui/browser/index.html'));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

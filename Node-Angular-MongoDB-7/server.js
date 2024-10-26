const express = require('express')
const app = express()
const path=require('path')
var mongoose = require('mongoose');
const { log } = require('console');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MEANStack')
    .then(() => {
        console.log('Connected to MongoDB NO-SQL');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

const loginSchema = new mongoose.Schema({
    Email: String,
    Password:String  
});

const students = mongoose.model('students', loginSchema);

app.get("/read", async function (req, res) {
    try {
        //const data = await students.findOne({Email:'James@gmail.com'});
        const data = await students.findOne();
        console.log(data);        
        res.json(data); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get("/loginsimple", async function (req, res) {
    try {
        // Fetch the data from the database
        const data = await students.findOne();
        
        if (data) {
            // Destructure Email and Password from the data object
            const { Email, Password } = data;
            
            console.log(`Email: ${Email}, Password: ${Password}`);
            
            // Send the Email and Password as a JSON response

             if(Email=='Pm' && Password=='12345')
             {
                console.log("Login Successfully");
             }
             else
             {
                console.log("Login Failed");
             }
            res.json({ Email, Password });
        } else {
            res.status(404).send('No data found');
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname,'./AngularUI/dist/angular-ui/browser/index.html'));
      
    });    

app.listen(8080);




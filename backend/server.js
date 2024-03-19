
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend origin
}));
const url = 'mongodb+srv://asuj:Asuj321@asujcluster.uglyh6t.mongodb.net/nesoj';
mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: true }));

const registrationSchema = new mongoose.Schema({

    email: {
        type: String,

    },
    password: {
        type: String
    }

});

const Registration = mongoose.model('Registration', registrationSchema);



app.post('/register', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await new Registration({
            email,
            password
        })
        await user.save();
        res.status(201).send('User registered successfully');

        res.send('data saved succesfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }



});

app.listen(4000, () => {
    console.log('Server listening on port 3000');
});



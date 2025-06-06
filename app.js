const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//Start update
const contactRouter = require('./app/routes/contact.route'); 

app.use('/api/contacts', contactRouter)

//end update

app.get('/', (req, res) => {
    res.json({ Message : "Welcome to Contact Book Application"})
});

module.exports = app;
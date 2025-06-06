const express = require('express');
const cors = require('cors');
const ApiError = require("./app/api-error")

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

//handle 404 response
app.use((req, res, next) => {
    //thuc thi khi khong co route nao duoc dinh nghia 
    return next(new ApiError(404, "Resource not found"))
})


app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    })
})
module.exports = app;
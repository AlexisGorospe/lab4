const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;
var url = require('url');

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})

// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
})

// http://localhost:3000/user
app.get('/user', (req, res) => {
    var firstName = req.query.firstname || "Pritesh";
    var lastName = req.query.lastname || "Patel";


    res.json({firstName, lastName});

});

// http://localhost:3000/user/firstname/lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const {firstname, lastname} = req.params;
    res.json({firstname, lastname});
})

// http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('About Us'); 
})

// http://localhost:3000/
app.post('/', (req, res) => {         
    res.send('POST - Hello World');
})

// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})
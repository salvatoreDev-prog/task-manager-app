require('dotenv').config();

// import Express
const express = require('express');

//create an instance of express
const app = express();

//Port Number
const PORT = process.env.PORT || 3000;

// Create a GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Start the server
app.listen(PORT, () => {
    console.log('Server is runngin on port ' + PORT)
})
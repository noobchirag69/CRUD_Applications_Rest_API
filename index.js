// Requiring the Environment Variables
require('dotenv').config();

// Importing Express and Mongoose
const express = require('express');
const mongoose = require('mongoose');

// Importing the Code for Routes
const route = require('./routes/route');

// Initiating Express
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/heroes', route);

// Connecting to the MongoDB Database and running the Server on successful connection
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(process.env.PORT || 5000, () => {
        console.log("Successfully connected to the Database and the Server is running on Port 3000");
    }))
    .catch(err => console.log(err));

// CREATE A FILE NAMED ".env" AND STORE YOUR MONGODB URI INSIDE IT.
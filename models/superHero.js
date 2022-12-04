// Importing Mongoose
const mongoose = require('mongoose');

// Importing Mongoose Schema
const Schema = mongoose.Schema;

// Creating New Schema For Database Entry
const heroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    codename: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Storing The Schema Inside A Variable
const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
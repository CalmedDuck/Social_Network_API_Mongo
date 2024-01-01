const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Import routes

const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes); // Use the routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB')
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Log mongoose queries
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

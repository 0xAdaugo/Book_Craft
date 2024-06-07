const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // Import the database connection (this will be replaced by mongoose.connect)
const authRoutes = require('./routes/auth'); // Import authentication routes
const authenticateToken = require('./middleware/authMiddleware'); // Import JWT authentication middleware
const app = require('./app'); // Import the app

//Redis and caching middleware
const redisClient = require('./config/redisConfig');
const checkCache = require('./middleware/cacheMiddleware');
const User = require('./models/User'); // Import User model from user.js

// Load environment variables from .env file
dotenv.config();

// Get MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication routes
app.use('/auth', authRoutes);

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

// Define root route
app.get('/', (req, res) => {
  res.send('Hello, Book Craft!');
});

//Example route with caching
app.get('/user/:id', checkCache, async (req, res) => {
  try {
    const user =await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Save the result ro Redis with an expiration time
    redisClient.setEx(req.params.id, 300, JSON.stringify(user)); // Cache for 1 hour
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: 'Server error'});
  }
});

// Set up server to listen
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});

module.exports = { app, server }; //Export app and server for testing
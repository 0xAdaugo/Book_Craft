const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import authentication routes
const bookCovers = require('./routes/bookCovers'); // Import bookCovers route
const bookRoutes = require('./routes/bookRoutes');
const chatGPTRoutes = require('./routes/chatGPTRoutes');
//const keywordToolRoutes = require('./routes/keywordToolRoutes');
const userPreferencesRoutes = require('./routes/userPreferencesRoutes');
const authenticateToken = require('./middleware/authMiddleware'); // Import JWT authentication middleware

// Load environment variables from .env file
dotenv.config();

// Get MongoDB URI from environment variables
//const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB using mongoose
//mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => console.log('MongoDB connected'))
  //.catch(err => console.log('MongoDB connection error:', err));

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication routes
app.use('/auth', authRoutes);

// Use bookCovers route
app.use('/api/book-covers', bookCovers);

// Use book routes
app.use('/books', bookRoutes);

// Use chatGPT routes
app.use('/api/chatgpt', chatGPTRoutes);

// Use Keyword Tool routes
//app.use('/api/keywords', keywordToolRoutes);

// Use user preference routes
app.use('/api/user', userPreferencesRoutes);

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

// Define root route
app.get('/', (req, res) => {
  res.send('Hello, Book Craft!');
});

module.exports = app;

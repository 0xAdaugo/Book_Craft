const express = require('express');
const connectDB = require('./config/database'); // Import the database connection
const authRoutes = require('./routes/auth'); // Import authentication routes
const bookCovers = require('./routes/bookCovers'); // Import bookCovers route
const bookRoutes = require ('./routes/bookRoutes');
const chatGPTRoutes = require('./routes/chatGPTRoutes');
//const keywordToolRoutes = require('./routes/keywordToolRoutes');
const userPreferencesRoutes = require('./routes/userPreferencesRoutes');
const authenticateToken = require('./middleware/authMiddleware'); // Import JWT authentication middleware

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication routes
app.use('/auth', authRoutes);

// Use bookCovers route
app.use('/api/book-covers', bookCovers);

//Use book routes
app.use('/books', bookRoutes);

//Use chatGPT routes
app.use('/api/chatgpt', chatGPTRoutes);

// Use Keyword Tool routes
//app.use('/api/keywords', keywordToolRoutes);

//use user peference routes
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

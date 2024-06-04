const express = require('express');
const connectDB = require('./config/database'); // Import the database connection
const authRoutes = require('./routes/auth'); // Import authentication routes
const authenticateToken = require('./middleware/authMiddleware'); // Import JWT authentication middleware
const app = require('./app'); //Import the app
const cors = require('cors'); // Import CORS
const cookieParser = require("cookie-parser");

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication routes
app.use('/', authRoutes);

// Use Cross Origin Resource Sharing
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow frontend to connect to backend
    credentials: true,
  })
);

app.use(cookieParser());

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

// Define root route
app.get('/', (req, res) => {
  res.send('Hello, Book Craft!');
});


// Set up server to listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

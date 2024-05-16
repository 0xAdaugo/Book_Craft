// server.js
const express = require('express');
const authRoutes = require('./routes/auth'); // Import authentication routes

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication routes
app.use('/auth', authRoutes);

// Define root route
app.get('/', (req, res) => {
  res.send('Hello, Book Craft!');
});

// Set up server to listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

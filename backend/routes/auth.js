// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Temporary storage for user data (replace with database later)
let users = [];

// Route for user registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try{
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = { id: Date.now().toString(), username, email, password: hashedPassword };

    // Add user to the array
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  try {
    // Compare hashed passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({message: 'Invalid email or password '});
    }
    
    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

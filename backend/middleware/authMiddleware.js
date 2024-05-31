// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token required' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = authenticateToken;

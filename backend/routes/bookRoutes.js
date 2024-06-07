// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');

// Get all books with pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const books = await Book.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const count = await Book.countDocuments();

  res.json({
    books,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  });
});

// Create a new book
router.post('/', createBook);

// Get a specific book by ID
router.get('/:id', getBookById);

// Update a book by ID
router.put('/:id', updateBook);

// Delete a book by ID
router.delete('/:id', deleteBook);

module.exports = router;

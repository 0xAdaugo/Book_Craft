const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  description: {
    type: String
  },
  publicationYear: {
    type: Number
  },
  pages: {
    type: Number
  },
  format: {
    type: String
  },
  price: {
    type: Number
  },
  keywords: {
    type: [String]
  },
  rating: {
    type: Number
  },
  reviews: {
    type: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      rating: {
        type: Number
      },
      comment: {
        type: String
      }
    }]
  },
  coverImage: {
    type: String
  },
  relatedBooks: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Book'
  },
  salesRank: {
    type: Number
  },
  publicationDate: {
    type: Date
  },
  availability: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Book', BookSchema);

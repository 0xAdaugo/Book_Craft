const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { resetPassword } = require('../controllers/authController');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  //Stores reference to books associated with the user
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  preferences: {
    type: Map,
    of: String
  },
  resetPassword: String,
  resetPasswordExpires: Date,
});

// Create an index on the email field
UserSchema.index({ email: 1}); // 1 for ascending order

UserSchema.methods.comparePassword = async function (password) {
  return bycrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
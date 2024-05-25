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
  resetPassword: String,
  resetPasswordExpires: Date,
});

UserSchema.methods.comparePassword = async function (password) {
  return bycrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('../config/database');

before(async () => {
    await connectDB();
});

after(async () => {
    await mongoose.connection.close();
});

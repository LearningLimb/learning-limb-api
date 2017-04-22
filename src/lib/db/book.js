const mongoose = require('mongoose');
const BookSchema = require('./schemas/book');

module.exports = mongoose.model('Book', BookSchema);
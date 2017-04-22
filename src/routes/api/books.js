'use strict';
const express = require('express');
const router = express.Router();
const Book = require('../../lib/db/book');

router.get('/', (req, res) => {
    Book.find({})
    .then(books => {
        res.json({
            books: books
        });
    })
    .catch(err => {
        res.status(502);
        res.json({
            error: err
        });
    });
});

module.exports = router;
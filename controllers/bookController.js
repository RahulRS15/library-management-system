// bookController.js - Book controller
const db = require('../config/db');

// Get all books
exports.getAllBooks = (req, res) => {
    const sql = 'SELECT * FROM Books';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Add a new book
exports.addBook = (req, res) => {
    const { title, author, quantity } = req.body;
    const sql = 'INSERT INTO Books (title, author, quantity) VALUES (?, ?, ?)';
    db.query(sql, [title, author, quantity], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Book added');
    });
};

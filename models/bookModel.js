// bookModel.js - Book model
const db = require('../config/db');

exports.getAllBooks = (callback) => {
    const sql = 'SELECT * FROM Books';
    db.query(sql, callback);
};

exports.addBook = (title, author, quantity, callback) => {
    const sql = 'INSERT INTO Books (title, author, quantity) VALUES (?, ?, ?)';
    db.query(sql, [title, author, quantity], callback);
};

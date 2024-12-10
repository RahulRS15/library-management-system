// borrowController.js - Borrow controller
const db = require('../config/db');

// Submit a borrow request
exports.submitBorrowRequest = (req, res) => {
    const { user_id, book_id, start_date, end_date } = req.body;
    const sql = 'INSERT INTO BorrowRequests (user_id, book_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [user_id, book_id, start_date, end_date, 'Pending'], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Borrow request submitted');
    });
};

// Approve a borrow request
exports.approveBorrowRequest = (req, res) => {
    const { id } = req.params;
    const sql = 'UPDATE BorrowRequests SET status = ? WHERE id = ?';
    db.query(sql, ['Approved', id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Borrow request approved');
    });
};

// Deny a borrow request
exports.denyBorrowRequest = (req, res) => {
    const { id } = req.params;
    const sql = 'UPDATE BorrowRequests SET status = ? WHERE id = ?';
    db.query(sql, ['Denied', id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Borrow request denied');
    });
};

// Get user borrow history
exports.getUserBorrowHistory = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM BorrowHistory WHERE user_id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

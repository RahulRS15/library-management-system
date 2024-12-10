// borrowModel.js - Borrow model
const db = require('../config/db');

exports.submitBorrowRequest = (user_id, book_id, start_date, end_date, callback) => {
    const sql = 'INSERT INTO BorrowRequests (user_id, book_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [user_id, book_id, start_date, end_date, 'Pending'], callback);
};

exports.updateBorrowRequestStatus = (id, status, callback) => {
    const sql = 'UPDATE BorrowRequests SET status = ? WHERE id = ?';
    db.query(sql, [status, id], callback);
};

exports.getUserBorrowHistory = (user_id, callback) => {
    const sql = 'SELECT * FROM BorrowHistory WHERE user_id = ?';
    db.query(sql, [user_id], callback);
};

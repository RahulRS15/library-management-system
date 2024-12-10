// userModel.js - User model
const db = require('../config/db');

exports.createUser = (email, password, role, callback) => {
    const sql = 'INSERT INTO Users (email, password, role) VALUES (?, ?, ?)';
    db.query(sql, [email, password, role], callback);
};

exports.findUserByEmail = (email, callback) => {
    const sql = 'SELECT * FROM Users WHERE email = ?';
    db.query(sql, [email], callback);
};

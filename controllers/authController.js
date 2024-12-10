// authController.js - Authentication controller
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// User registration
exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO Users (email, password, role) VALUES (?, ?, ?)';
    db.query(sql, [email, hashedPassword, role], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('User created');
    });
};

// User login
exports.login = (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM Users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('User not found');
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    });
};

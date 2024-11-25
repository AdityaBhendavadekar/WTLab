const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample',
});

// Submit complaint
router.post('/add', (req, res) => {
    const { student_name, complaint } = req.body;
    const sql = 'INSERT INTO complaints (student_name, complaint) VALUES (?, ?)';
    db.query(sql, [student_name, complaint], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Complaint submitted successfully!' });
    });
});

// Get all complaints
router.get('/list', (req, res) => {
    const sql = 'SELECT * FROM complaints';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

module.exports = router;
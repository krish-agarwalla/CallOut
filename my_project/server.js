const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'disaster_management'
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

    pool.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).send('Internal server error');
            return;
        }

        if (results.length > 0) {
            // Successfully logged in
            res.send('Login successful');
        } else {
            // Invalid credentials
            res.status(401).send('Invalid email or password');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

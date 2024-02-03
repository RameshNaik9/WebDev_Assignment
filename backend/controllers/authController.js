const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ramesh_user',
  password: 'ramesh_pass',
  database: 'WebDev_Assignment',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL users:', err);
  } else {
    console.log('Connected to MySQL users database');
  }
});

//  Creating new User Signup
const createUser = (req, res) => {
  const { username, password, email } = req.body;
  const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    console.log(query); 
  db.query(query, [username, password, email], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send('User created successfully');
    }
  });
};

// Login Authentication for existing users
const login = (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send('Error logging in');
    } else {
      if (result.length > 0) {
        res.status(200).json({ authenticated: true });
      } else {
        res.status(200).json({ authenticated: false });
      }
    }
  });
};

module.exports = {
  createUser,login
};

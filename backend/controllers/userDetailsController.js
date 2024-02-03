const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ramesh_user',
  password: 'ramesh_pass',
  database: 'WebDev_Assignment',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL user_details:', err);
  } else {
    console.log('Connected to MySQL user_details database');
  }
});

// Creating a new user_details
const createUserDetails = (req, res) => {
  const { first_name, last_name, date_of_birth } = req.body;
  const query = 'INSERT INTO user_details (first_name, last_name, date_of_birth) VALUES (?, ?, ?)';
  db.query(query, [first_name, last_name, date_of_birth], (err, result) => {
    if (err) {
      console.error('Error inserting user_details:', err);
      res.status(500).send('Error inserting user_details');
    } else {
      res.status(201).send('User_details added successfully');
    }
  });
};

// Retrieving all user_details on list 
const getUserDetails = (req, res) => {
  const query = 'SELECT * FROM user_details';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving user_details:', err);
      res.status(500).send('Error retrieving user_details');
    } else {
      res.status(200).json(result);
    }
  });
};

// Delete a user_details by ID
const deleteUserDetails = (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM user_details WHERE id = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Error deleting user_details:', err);
      res.status(500).send('Error deleting user_details');
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('User_details not found');
      } else {
        res.status(200).send('User_details deleted successfully');
      }
    }
  });
};

module.exports = {
  createUserDetails,
  getUserDetails,
  deleteUserDetails,
};

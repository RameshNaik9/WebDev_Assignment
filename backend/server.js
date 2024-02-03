const express = require('express');
const cors = require('cors');
const userDetailsController = require('./controllers/userDetailsController'); 
const authController = require('./controllers/authController');

const app = express();
const port = 3001;

app.use(cors()); 
app.use(express.json());

//routes for user_details (add user,delete user,list users)
app.post('/user_details', userDetailsController.createUserDetails);
app.get('/user_details', userDetailsController.getUserDetails);
app.delete('/user_details/:id', userDetailsController.deleteUserDetails);

// Authentication routes(login+signup)
app.post('/users', authController.createUser);
app.post('/login', authController.login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

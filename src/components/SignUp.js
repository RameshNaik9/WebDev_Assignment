import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
    alert('Please provide all required information.');
    return;
  }


  axios.post('http://localhost:3001/users', {
    username: username,
    password: password,
    email: email
  })
    .then((response) => {
      console.log(response.data);
      alert('User Account Created Sucessfully.');
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });

  setUsername('');
  setPassword('');
  setEmail('');
};


    return (
    <div>
        <header className="app-header"><h1>User Data Entry App</h1> </header>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
                autoComplete="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                autoComplete="current-password"
              />
            </div>
            <button type="submit">Submit</button>
            <div className="login-link">
              <p>Already have an account ? <Link to="/" className="button-link">Login</Link></p>
            </div>
          </form>
        </div>
    </div>

  );
}

export default Signup;

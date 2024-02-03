import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (username.trim() === '' || password.trim() === '') {
    alert('Please provide both username and password.');
    return;
  }

  // Authenticating the user // Not used any password hashing here 
  axios.post('http://localhost:3001/login', {
    username: username,
    password: password
  })
  .then((response) => {
    if (response.data.authenticated) {
      console.log('User authenticated!');
      window.location.replace('/');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  })
  .finally(() => {
    setUsername('');
    setPassword('');
  });
};


  return (
    <div>

        <header className="app-header"><h1>User Data Entry App</h1> </header>

        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="signup-link">
              <p>Don't have an Account ? <Link to="/signup" className="button-link">Sign up</Link></p>
            </div>
          </form>
        </div>
    </div>


  );
}

export default Login;

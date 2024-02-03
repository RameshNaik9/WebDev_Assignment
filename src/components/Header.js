import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  
  return (
    <header className="app-header">
      <h1>User Data Entry App</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

    </header>
  );
}

export default Header;

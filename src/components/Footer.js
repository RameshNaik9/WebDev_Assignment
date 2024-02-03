import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="copyright">
        &copy; {currentYear} Ramesh Naik Lahori
      </div>
    </footer>
  );
}

export default Footer;

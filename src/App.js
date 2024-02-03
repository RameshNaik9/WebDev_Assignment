import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import UserDataEntry from './components/UserDataEntry.js';
import SavedUserDetails from './components/SavedUserDetails.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Signup from './components/SignUp.js'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div>
                <Login />
                <Footer />
            </div>
          } 
          />

          <Route path="/signup" element={
            <div>
                  <Signup />
                  <Footer />
            </div>
          } 
          /> 

          <Route
            path="/home"
            element={
              <div>
                <Header />
                <UserDataEntry />
                <SavedUserDetails />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

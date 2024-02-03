import React, { useState } from 'react';
import axios from 'axios';
import './UserDataEntry.css';

function UserDataEntry() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
  };

  const handleSave = () => {
      if (firstName.trim() === '' || lastName.trim() === '' || dateOfBirth.trim() === '') {
        alert('Please provide all required information.');
        return;
      }
    axios.post('http://localhost:3001/user_details', {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth
    })
      .then((response) => {
        console.log(response.data);
        handleReset();
      })
      .catch((error) => {
        console.error('Error saving user details:', error);
      });
  };

  return (
    <div className="user-data-entry-container">
      <h1>Enter User Details</h1>
      <label className="user-data-entry-label">
        First Name:
        <input className="user-data-entry-input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label className="user-data-entry-label">
        Last Name:
        <input className="user-data-entry-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label className="user-data-entry-label">
        Date of Birth:
        <input className="user-data-entry-input" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      </label>
      <div className="user-data-entry-buttons">
        <button className="user-data-entry-button" onClick={handleReset}>Reset</button>
        <button className="user-data-entry-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default UserDataEntry;

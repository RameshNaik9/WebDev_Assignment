import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SavedUserDetails.css';

function SavedUserDetails() {
  const [userDetailsData, setUserDetailsData] = useState([]);
  const [isListVisible, setListVisible] = useState(false);

  const handleList = () => {
    axios.get('http://localhost:3001/user_details')
      .then((response) => {
        setUserDetailsData(response.data);
        setListVisible(true);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3001/user_details/${userId}`)
      .then((response) => {
        console.log(response.data);
        handleList();
      })
      .catch((error) => {
        console.error('Error deleting user details:', error);
      });
  };
    useEffect(() => {
    if (userDetailsData.length > 0) {
      handleList();
    }
  }, [userDetailsData]);

  return (
    <div className="saved-user-details-container">

      <div className="header-container">
        <h2>Saved User Details</h2>
        <button className="saved-user-details-button" onClick={handleList}>List</button>
      </div>
            
      {userDetailsData.length > 0 && (
        <table className={`saved-user-details-table ${isListVisible ? 'visible' : ''}`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userDetailsData.map((userDetails) => (
              <tr key={userDetails.id}>
                <td>{userDetails.first_name} {userDetails.last_name}</td>
                <td>{new Date(userDetails.date_of_birth).toLocaleDateString()}</td>
                <td>
                  <button
                    className="saved-user-details-delete-button"
                    onClick={() => handleDelete(userDetails.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SavedUserDetails;


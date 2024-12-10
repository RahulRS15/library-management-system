// BorrowHistory.js - Component to display user's borrow history
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BorrowHistory = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${userId}/history`)
      .then(response => {
        setHistory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the borrow history!', error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Borrow History</h2>
      <ul>
        {history.map(record => (
          <li key={record.id}>
            Book ID: {record.book_id}, Borrowed On: {record.borrowed_on}, Returned On: {record.returned_on}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowHistory;

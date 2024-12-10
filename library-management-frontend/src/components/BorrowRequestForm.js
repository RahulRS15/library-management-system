// BorrowRequestForm.js - Component to submit borrow requests
import React, { useState } from 'react';
import axios from 'axios';

const BorrowRequestForm = () => {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/borrow-requests', {
      user_id: userId,
      book_id: bookId,
      start_date: startDate,
      end_date: endDate
    })
    .then(response => {
      alert('Borrow request submitted successfully!');
    })
    .catch(error => {
      console.error('There was an error submitting the borrow request!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Borrow a Book</h2>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </label>
      <label>
        Book ID:
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BorrowRequestForm;

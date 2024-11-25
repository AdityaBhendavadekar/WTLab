import React, { useState } from 'react';
import axios from 'axios';

const ComplaintPage = () => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = async () => {
    const username = document.cookie
      .split('; ')
      .find((row) => row.startsWith('username='))
      .split('=')[1];

    await axios.post('http://localhost:5000/api/complaints/add', {
      student_name: username,
      complaint,
    });

    alert('Complaint submitted!');
  };

  return (
    <div>
      <h2>Submit Complaint</h2>
      <textarea onChange={(e) => setComplaint(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ComplaintPage;

import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin') setAuthenticated(true);
    else alert('Invalid password');
  };

  const fetchComplaints = async () => {
    const { data } = await axios.get('http://localhost:5000/api/complaints/list');
    setComplaints(data);
  };

  return (
    <div>
      {!authenticated ? (
        <div>
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Complaints</h2>
          <button onClick={fetchComplaints}>Fetch Complaints</button>
          <ul>
            {complaints.map((c) => (
              <li key={c.id}>
                {c.student_name}: {c.complaint}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

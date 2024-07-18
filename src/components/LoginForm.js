// src/components/LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css'; // CSS for the form styling

const LoginForm = ({ theme, toggleTheme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating login success (replace with actual logic)
    // For demo purpose, username and password are hardcoded
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Invalid username or password');
    }
  };

  return (
    <div className={`login-form ${theme}`}>
      <h2>Login</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <br />
        </form>
      ) : (
        <div className="success-message">
          <p>Login successful! Welcome, {username}!</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
};

export default LoginForm;

  
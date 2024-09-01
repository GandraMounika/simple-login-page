import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://simple-login-page-2.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(username, data.token);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="row justify-content-center fade-in">
      <div className="col-md-6 back">
        <h2 className="text-center my-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label >Username:</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-animated mt-3">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

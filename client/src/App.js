import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (username, token) => {
    setUsername(username);
    setToken(token);
  };

  const handleRegister = (username) => {
    setUsername(username);
    setIsRegistering(false);
  };

  return (
    <div className="container-bg">
      {!token ? (
        isRegistering ? (
          <RegistrationForm onRegister={handleRegister} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )
      ) : (
        <Welcome username={username} />
      )}
      {!token && (
        <div className="text-center mt-3">
          {isRegistering ? (
            <button className="btn btn-link" onClick={() => setIsRegistering(false)}>
              Already have an account? Login
            </button>
          ) : (
            <button className="btn btn-link" onClick={() => setIsRegistering(true)}>
              Don't have an account? Register
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

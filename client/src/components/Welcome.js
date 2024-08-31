import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Welcome = ({ username }) => {
  return (
    <div className="container fade-in-animation text-center my-4">
      <div className="welcome-message">
        <h2 className="display-4">Welcome, {username}!</h2>
        <p className="lead">We're glad to have you back.</p>
      </div>
    </div>
  );
};

export default Welcome;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="success-message">
        <h2>Success!</h2>
        <p>Your form has been submitted successfully.</p>
      </div>
      <div>
        <strong>First Name:</strong> {state.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {state.lastName}
      </div>
      <div>
        <strong>Username:</strong> {state.username}
      </div>
      <div>
        <strong>Email:</strong> {state.email}
      </div>
      <div>
        <strong>Phone:</strong> {state.phone}
      </div>
      <div>
        <strong>Country:</strong> {state.country}
      </div>
      <div>
        <strong>City:</strong> {state.city}
      </div>
      <div>
        <strong>PAN:</strong> {state.pan}
      </div>
      <div>
        <strong>Aadhar:</strong> {state.aadhar}
      </div>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default Success;

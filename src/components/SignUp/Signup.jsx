import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/users', {
        email,
        fname,
        lname,
        password,
      });
      console.log(response)

      // Assuming the backend sends a token on successful login
      // const token = response.data.token;
      // Save the token to local storage or state for future requests

      // Redirect to another page or handle successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <div className='signup-box'>
      <form onSubmit={handleSubmit} className="signup-container">
      <h2>Sign Up</h2>
  <div className='signup-con'>
  <div >
    <label className="signup-label">First Name:</label>
    <input
      type="name"
      value={fname}
      onChange={(e) => setfname(e.target.value)}
      className="signup-input"
    />
  </div>
  <div>
    <label className="signup-label">Last Name:</label>
    <input
      type="name"
      value={lname}
      onChange={(e) => setlname(e.target.value)}
      className="signup-input"
    />
  </div>
  <div>
    <label className="signup-label">Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setPassword(e.target.value)}
      className="signup-input"
    />
  </div>
  <div>
    <label className="signup-label">Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="signup-input"
    />
  </div>
  <div>
    <label className="signup-label">Confirm Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="signup-input"
    />
  </div>
  <button type="submit" className="signup-button">Sign Up</button>
  </div>
</form>

    </div>
  );
};

export default Signup;

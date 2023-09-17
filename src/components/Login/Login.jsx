import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/auth', {
        email,
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
    <div className='login-box'>
      <form onSubmit={handleSubmit} className="login-container">
      <h2>Sign in</h2>
  <div>
    <label className="login-label">Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="login-input"
    />
  </div>
  <div>
    <label className="login-label">Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="login-input"
    />
  </div>
  <button type="submit" className="login-button">Sign In</button>
</form>

    </div>
  );
};

export default Login;

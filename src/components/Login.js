import React, { useState } from 'react';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username, 'Password:', password);
  };

  

  return (
    
    <div className="container">
      <div className="header">
        Welcome back to <span className="highlight">App</span>
      </div>
      <div className="subheader">Log in to your account</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="text"
            id="email"
            className="input"
            value={username}
            onChange={handleUsernameChange}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={handlePasswordChange} required
          />
        </div>
        <div>
          <a className="forgot-password" href="./Signup">Forgot your password?</a>
        </div>
        
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <div className="footerL">
        Don’t have an account yet? <a className="signup-link" href="./Signup">Sign up here</a>
      </div>
    </div>
  );
}

export default Login;

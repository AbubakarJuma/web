import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

function Signup() {
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  
    const user = {
      UserName,
      email,
      password
    };
  
    try {
      const response = await axios.post('/api/signup', user);
      console.log(response.data);
      // Reset form fields
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match");
  //     return;
  //   }
    // Handle signup logic here (e.g., API call)
    console.log('Full Name:', UserName, 'Email:', email, 'Password:', password);
    // Reset form fields
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div className="header">
        Create an Account
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName" className="label">User Name</label>
          <input
            type="text"
            id="userName"
            className="input"
            value={UserName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="input"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <div className="footerS">
        Already have an account? <a className="login-link" href="./Login">Log in here</a>
      </div>
    </div>
  );
}

export default Signup;

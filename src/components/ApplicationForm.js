


import React, { useState } from 'react';
import axios from 'axios';
import './Application.css';
import { useNavigate } from 'react-router-dom';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    userName: '',
    phoneNumber: '',
    dob: '',
    email: '',
    course: '',
    fileUpload: null,
   
  });
  
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, fileUpload: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/applications', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      navigate ('/StudentDashboard');
    }
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   for (const key in formData) {
  //     data.append(key, formData[key]);
  //   }
  //   axios.post('http://localhost:8080/applications', data)
  //     .then(response => {
  //       console.log(response.data);
  //       navigate('/ApplicationData');
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // };

  // const handleButtonClick = () => {
  //   navigate('/'); // Redirect to home page
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="Application">Apply For College</h2>
        <form onSubmit={handleSubmit}>
          <h2>Application Form</h2>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Choose Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="course1">PC Maintanance</option>
              <option value="course2">Lumbering</option>
              <option value="course3">Tailoring</option>
              <option value="course4">Mircosoft Word</option>
              <option value="course5">Mircosoft Excell</option>
              <option value="course6">Mircosoft Publisher</option>
              <option value="course7">Mircosoft PowerPoint</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fileUpload">Upload Form Four Result</label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div> */}

          <div className="form-group">
            <button type="submit">Submit</button>
            {/* <button type="submit" onClick={handleButtonClick}>Submit</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;


import './StudentDashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/applications', FormData);
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Course</th>
            <th>File Upload</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.firstName}</td>
              <td>{application.lastName}</td>
              <td>{application.userName}</td>
              <td>{application.phoneNumber}</td>
              <td>{new Date(application.dob).toLocaleDateString()}</td>
              <td>{application.email}</td>
              <td>{application.course}</td>
              <td>{application.fileUpload}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import ApplicationForm from './components/ApplicationForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Gallery from './components/Gallery';
// import ApplicationData from './components/ApplicationData';
import StudentDashboard from './components/StudentDashboard';





function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/application-form">Application Form</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        
     

           <div className='element'>
            
          <Routes>
           
            <Route path='/'element= {<Home />} />
          
            <Route path='/Login' element= {<Login />} />
            <Route path='/Application-Form' element= {<ApplicationForm />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Gallery' element={<Gallery />} />
            {/* <Route path='/Application-Data' element={<ApplicationData />} /> */}
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
           
           
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
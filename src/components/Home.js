import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src="/images/student4.jpeg" alt="College" />
        <h1>Welcome to Our College</h1>
        <p>Excellence in Education</p>
        <p>Glorious Academy provides education that combines excellence in teaching, a highly personal approach, and a technology enriched learning environment with many opportunities for cultural and sporting activities. Our community of happy, confident students and supportive, well qualified staff provides an enriching environment in which young people thrive and succeed. Our motto is 'Education is the Key of Liberation' and we hope that you will see that beaming in all that we do here at Glorious Academy.</p>
      </section>
      <section className="content">
        <div className="content-item">
          <img src="/images/student3.jpeg" alt="Campus" />
          <h2>Campus Life</h2>
          <p>Description of campus life.</p>
          <p>Muheza muslim Secondary School is a co-education private Day & Boarding school located in Muheza District, Tanga Region. The school is situated on conducive environment for studies. Muheza muslim Secondary School is full registered under the Ministry of Education and Vocational Training of Tanzania, (Reg. No. S.1080)</p>
          <a className="visit the Gallery" href="./Gallery">visit the Gallery</a>
        </div>
        <div className="content-item">
          <img src="/images/student3.jpeg" alt="Programs" />
          <h2>Academic Programs</h2>
          <p>Description of academic programs.</p>
          <p>We offer deferent couses
            <ul>
              <li>PC Maintanance</li>
              <li>Cooking</li>
              <li>Lumbering</li>
              <li>Tailoring</li>
              <li>Mircosoft couses 
                <li>Mircosoft Word</li>
                <li>Mircosoft Publisher</li>
                <li>Mircosoft Excell</li>
                <li>Mircosoft PowerPoint</li>
              </li>
            </ul>
           
          </p>
        </div>
      </section>
      <div className="row footer" id="footer">
        <div className="footer1" style={{color: 'white', textAlign: 'justify'}}>
          <h3>Project Development</h3>
          <p>The prison management system is a computerized system developed by second year student (Abubakar) as the one of her parts to accomplish his studies at State University of Zanzibar.</p>
        </div>

       
        <div className="footer1" style={{color: 'white'}}>
          <h3>Address</h3>
          <p><i className="fa-home"></i> Machui, Zanzibar - Tanzania</p>
          <p><i className="fa-home"></i> P.O.BOX 114</p>
          <p><i className="fa-email"></i> abubakarjuma2468@gmail.com</p>
          <p><i className="fa-phone"></i> +255673801062</p>
        </div>
      </div>
      <div className="row copyright">
        <div className="footer4" style={{color: 'white'}}>
          <p style={{textAlign: 'center'}}>&copy; 2024 XYZ Community College, Zanzibar</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

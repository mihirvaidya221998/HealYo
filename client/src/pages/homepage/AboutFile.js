import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

import developer1 from './images_team/developer1.jpg';
import developer2 from './images_team/developer2.jpg';
import developer3 from './images_team/developer3.jpg';
import developer4 from './images_team/developer4.jpg';
import developer5 from './images_team/developer5.jpg';

const AboutFile = () => {
  return (
    <div className='about-container'>
      {/* Header section */}
      <header
        className='header'
        // style={{ padding: "20px 0", marginBottom: "30px" }}
      >
        <nav className='navbar'>
          <div className='container'>
            <Link to='/' className='nav-brand'>
              HEALYO
            </Link>
            <ul className='nav-links'>
              <li>
                <Link to='/homeheader' className='nav-link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='' className='nav-link'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='header-content'>
          <div className='background-text'>
            <h2>
              <b>About Us</b>
            </h2>
            <p className='header-text'>Your health is our top priority</p>
          </div>
        </div>
      </header>
      <div className='about-content'>
        <p>
          Since 2023, HEALYO has been committed to helping individuals and
          organizations explore protection through our comprehensive insurance
          network of 30+ companies. We believe in making quality healthcare
          accessible and affordable for everyone, which is why we offer fast and
          efficient claims processing and an integrated payment gateway for
          seamless payments.
        </p>
        <p>
          Our dedicated customer support team is here to help you with any
          questions or concerns you may have, and our convenient online platform
          makes it easy to manage your insurance policy. HEALYO is the trusted
          choice for individuals and organizations looking for reliable
          insurance solutions.
        </p>
        <p>
          If you're interested in learning more about HEALYO or partnering with
          us, please don't hesitate to contact us. We're always looking for new
          opportunities to collaborate and innovate in the healthcare space.
        </p>
      </div>
      <div className='team-section'>
        <h2>Meet Our Team</h2>
        <div className='team-members'>
          <div className='member'>
            <img src={developer1} alt='Developer 1' />
            <h3>Jayat Rateria</h3>
            <p>Frontend Developer</p>
          </div>
          <div className='member'>
            <img src={developer5} alt='Developer 5' />
            <h3>Trishna Patil</h3>
            <p>Project Manager</p>
          </div>
          <div className='member'>
            <img src={developer2} alt='Developer 2' />
            <h3>Mihir Vaidya</h3>
            <p>Backend Developer</p>
          </div>
          <div className='member'>
            <img src={developer3} alt='Developer 3' />
            <h3>Manoj Davuluri</h3>
            <p>Backend Developer</p>
          </div>
          <div className='member'>
            <img src={developer4} alt='Developer 4' />
            <h3>Jaydeep Patel</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='container'>
          <p className='footer-text'>© 2023 HEALYO, All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutFile;

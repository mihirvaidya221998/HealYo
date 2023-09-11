import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const HeaderFile = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <Link to='/' className='nav-brand'>
            HEALYO
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='' className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/homeabout' className='nav-link'>
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
      <header className='header'>
        <div className='header-content'>
          <div className='background-text'>
            <h2>
              <b>HEALYO: Patient and Health Insurance Management System</b>
            </h2>
            <p className='header-text'>Your health is our top priority</p>
          </div>
        </div>
      </header>
      <footer className='footer'>
        <div className='container'>
          <p className='footer-text'>© 2023 HEALYO, All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFile;

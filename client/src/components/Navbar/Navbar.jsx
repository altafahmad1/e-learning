import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark'>
      <Link to='/' className='navbar-brand navbar-brand-centered'>
        <span className='logo-e'>E</span>-Learning
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active px-2'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item active px-2'>
            <Link className='nav-link' to='/'>
              About
            </Link>
          </li>
          <li className='nav-item active px-2'>
            <Link className='nav-link' to='/'>
              Help
            </Link>
          </li>
        </ul>

        <Link className='btn btn-outline-light' role='button' to='/login'>
          Log In
        </Link>
        <Link className='btn btn-light' role='button' to='/signup'>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

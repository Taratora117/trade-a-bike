import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { FaMotorcycle } from 'react-icons/fa';

import './Page.css';
import AppContext from '../../context/AppContext';


const Page = ({children}) => {
  const { userData } = useContext(AppContext);

  return (
    <div>
      <header className='text-bg-dark p-3'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <NavLink to="/home" className="d-flex align-items-center justify-content-center p-2 mb-2 mb-lg-0 text-warning">
              <FaMotorcycle size="3rem" />
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/search" className="nav-link px-2 text-light">New Search</NavLink></li>
              <li><NavLink to="/categories" className="nav-link px-2 text-light">Categories</NavLink></li>
              <li><NavLink to="/about" className="nav-link px-2 text-light">About</NavLink></li>
            </ul>

            {
              userData?
                <Dropdown>
                  <Dropdown.Toggle variant='dark'>Profile <span><CgProfile className='text-warning' size='24px' /></span></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/saved">Saved</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/upload">Upload</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                :
                <div>
                  <NavLink to="/saved" className="btn me-2 text-light">Saved</NavLink>
                  <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
                  <NavLink to="/register" className="btn btn-warning">Register</NavLink>
                </div>
            }

          </div>
        </div>
      </header>

      <div>
        {children}
      </div>

      <footer className="container-fluid text-bg-dark p-5">
        <div className="row">
          <div className="col pb-2">
            <NavLink to="/home" className="d-flex align-items-center p-2 mb-2 mb-lg-0 text-warning">
              <FaMotorcycle size="3rem" />
            </NavLink>
            <p className="text-muted">&copy; 2022</p>
          </div>

          <div className="col pb-2"></div>

          <div className="col pb-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col pb-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col pb-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
        </div>

      </footer>

    </div>
  );
};

export default Page;

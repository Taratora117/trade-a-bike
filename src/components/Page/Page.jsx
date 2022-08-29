import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { FaMotorcycle } from 'react-icons/fa';

import './Page.css';


const Page = ({children}) => {

  return (
    <div>
      <header className='text-bg-dark p-3'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <NavLink to="/home" className="d-flex align-items-center justify-content-center p-2 mb-2 mb-lg-0 rounded-circle text-warning">
              <FaMotorcycle size="3rem" />
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/search" className="nav-link px-2 text-secondary">New Search</NavLink></li>
              <li><NavLink to="/categories" className="nav-link px-2 text-secondary">Categories</NavLink></li>
              <li><NavLink to="/about" className="nav-link px-2 text-secondary">About</NavLink></li>
            </ul>

            <Dropdown>
              <Dropdown.Toggle variant='dark'>Profile <span><CgProfile className='text-warning' size='24px' /></span></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/login">login</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/sign-up">sign-up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
        </div>
      </header>

      <div>
        {children}
      </div>

      <footer></footer>

    </div>
  );
};

export default Page;

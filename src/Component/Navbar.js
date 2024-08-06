import React from 'react';
import { Link } from 'react-scroll';
import { Typography } from '@mui/material';
import '../Styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div id="navbar">
      {/* Desktop Navigation */}
      <div className="web-nav d-none d-md-block">
        <nav className="d-flex justify-content-between align-items-center">
          <Link to="home" spy={true} smooth={true} duration={100}>
            <Typography className='web-logo' sx={{ backgroundImage:"linear-gradient(120deg, #3498db, #8e44ad)", color:"transparent", backgroundClip:"text", fontSize: "27px", textDecoration: 'none' }}>
              MyPortfolio
            </Typography>
          </Link>
          <ul className="nav-menu d-flex list-unstyled mb-0">
            <li className='nav_item'>
              <Link className='nav_link' to="home" spy={true} smooth={true} duration={100}>Home</Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to="about" spy={true} smooth={true} duration={100}>About</Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to="education" spy={true} smooth={true} duration={100}>Education</Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to="resume" spy={true} smooth={true} duration={100}>Resume</Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to="whatido" spy={true} smooth={true} duration={100}>What I Do</Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to="contact" spy={true} smooth={true} duration={100}>Contact</Link>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <a href='https://www.instagram.com/praveen_9866/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href='https://www.linkedin.com/in/praveen-kumar-paradesi-99a53022a/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://github.com/praveenkumar-ui-developer' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className='mobile-nav d-md-none'>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link to="home" spy={true} smooth={true} duration={100}>
              <Typography className='web-logo' sx={{ color: "transparent",backgroundImage:"linear-gradient(120deg, #3498db, #8e44ad)",backgroundClip:"text",fontSize: "27px",marginTop:"10px" }}>
                MyPortfolio
              </Typography>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MyPortfolio</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="home" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="education" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="resume" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="whatido" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">What I Do</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" spy={true} smooth={true} duration={100} data-bs-dismiss="offcanvas">Contact</Link>
              </li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <a href='https://www.instagram.com/praveen_9866/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href='https://www.linkedin.com/in/praveen-kumar-paradesi-99a53022a/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href='https://github.com/praveenkumar-ui-developer' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

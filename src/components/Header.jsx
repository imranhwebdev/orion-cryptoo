import React, { useState, useEffect } from "react";
import Logo from "../assets/img/site-logo.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const Header = (...props) => {
  const [openSide] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    // STICKY NAVBAR
    const [stickyClass, setStickyClass] = useState('');
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass(' sticky-navbar') : setStickyClass('');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('load', stickNavbar);
        };
    }, [])

  return (
    <div>
      <header className={"header-area" + stickyClass}>
        <nav id="navbar_top" className="navbar navbar-expand-xl navbar-dark">
          <Container className="align-items-center">
            <div className="header-left">
              <Link to='/' className="navbar-brand site-logo" href="/">
                <img src={Logo} alt="site-logo" />
              </Link>
            </div>

            <Button className="navbar-toggler bg-transparent" onClick={handleShow}>
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className={`collapse navbar-collapse align-items-center justify-content-center ${
                openSide ? "show" : ""
              }`}  id="navbarText" >
              <ul className="navbar-nav main-menu pt-4 pt-lg-0 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="#investment_objectives">Investment</Link>
                </li>
                <li className="nav-item">
                  <Link to="#portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="#invest">How to invest</Link>
                </li>
                <li className="nav-item">
                  <Link to="#roadmap">Roadmap</Link>
                </li>
                <li className="nav-item">
                  <Link to="#token">Token</Link>
                </li>
              </ul>
            </div>

            <div className="header-right">
              <a href="/#" className="boxed-btn">
                Contact us
              </a>
            </div>
          </Container>
        </nav>
      </header>      

      <div className="heading_clear"></div>
      
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a className="navbar-brand site-logo" href="/">
              <img src={Logo} alt="site-logo" />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul class="offcanvas-menu">
            <li className="nav-item">
                  <Link to="#investment_objectives">Investment</Link>
                </li>
                <li className="nav-item">
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="#invest">How to invest</Link>
                </li>
                <li className="nav-item">
                  <Link to="#roadmap">Roadmap</Link>
                </li>
                <li className="nav-item">
                  <Link to="#token">Token</Link>
                </li>
            </ul>
            <a href="/#" className="boxed-btn mt-3">
            Contact us
            </a>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={"backtop" + stickNavbar}></div>
    </div>
  );
};

export default Header;

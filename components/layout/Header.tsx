/* eslint-disable @next/next/no-html-link-for-pages */

'use client'
import Image from 'next/image';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import pageStyles from "@/styles/page.module.css"

const Header = () => {
  return (
    <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width}`}>
      <Navbar bg="white" expand="lg" className="p-3 navStyleMobile" style={{backgroundColor: "#fff !important"}}>
      {/* <Container className='mx-0 w-100' > */}
        <Navbar.Brand href="/">
          <Image src="/BreatheLogo25Black.png" alt="Breathe Logo" width={317} height={33} className='img-fluid ' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className='nav-item' href="/">Home</Nav.Link>
            <Nav.Link className='nav-item' href="/about-breath">About</Nav.Link>
            <Nav.Link className='nav-item' href="/services">Our Services</Nav.Link>
            <Nav.Link className='nav-item' href="/blog">Blog</Nav.Link>
            <Nav.Link className='nav-item' href="/contact">Contact Us</Nav.Link>
            <Nav.Link className='nav-item' href="#">T & C</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    </div>
  );
};

export default Header;

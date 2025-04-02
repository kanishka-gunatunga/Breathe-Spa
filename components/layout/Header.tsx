
'use client'
import Image from 'next/image';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import pageStyles from "@/styles/page.module.css"

const Header = () => {
  return (
    <>
      <div className='w-100' style={{ backgroundColor: "#F3EEE7 !important" }}>
        <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width}`} style={{ backgroundColor: "#F3EEE7 !important" }}>
          <Navbar expand="lg" className="p-3 navStyleMobile" style={{ backgroundColor: "#F3EEE7 !important" }} >
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
                <Nav.Link className='nav-item' href="/terms">T & C</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;

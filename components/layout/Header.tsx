/* eslint-disable @next/next/no-html-link-for-pages */

'use client'
import Image from 'next/image';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/BreatheLogo25Black.png" alt="Breathe Logo" width={317} height={33} />
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
      </Container>
    </Navbar>
  );
};

export default Header;

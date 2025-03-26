/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import React from 'react';
import "./header-footer.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-md-flex d-lg-flex justify-content-between" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            <Image src="/BreatheLogo25Black.png" alt="Breathe Logo" width={317} height={33} />
          </a>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-breath">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">T & C</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Header
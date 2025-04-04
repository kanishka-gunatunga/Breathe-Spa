
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import pageStyles from "@/styles/page.module.css"
import { SiteData } from '@/sanity/types';
import { getSiteData } from '@/sanity/libs/api';
import { urlFor } from '@/sanity/libs/sanity';

const Header = () => {
  const [site, setSite] = useState<SiteData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const siteData = await getSiteData();
        setSite(siteData)
        // console.log("siteData : ", siteData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!site) return <p>Loading...</p>;
  return (
    <>
      <div className='w-100 navColor' style={{ backgroundColor: "#F3EEE7 !important" }}>
        <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`} style={{ backgroundColor: "#F3EEE7 !important" }}>
          <Navbar expand="lg" className="p-3 navStyleMobile" style={{ backgroundColor: "#F3EEE7 !important" }} >
            <Navbar.Brand href="/">
              {site[0]?.logo && (
                <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='img-fluid ' />
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link className='nav-item' href="/">Home</Nav.Link>
                <Nav.Link className='nav-item' href="/services">Our Services</Nav.Link>
                <Nav.Link className='nav-item' href="/about-breath">About Breathe </Nav.Link>
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

import Image from 'next/image';
import React, { } from 'react';
import "./header-footer.css";
import Form from 'next/form'
import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import Link from 'next/link';
import { urlFor } from '@/sanity/libs/sanity';
import { ServiceCategory, SiteData } from '@/sanity/types';

interface FooterProps {
  site: SiteData[];
  service: ServiceCategory[];
}
const Footer = ({ site, service }: FooterProps) => {

        
  return (

    <>

      <div className="footer position-relative mt-5" style={{ backgroundColor: "#F2EDE6" }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 151" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M376.779 30.0272C219.86 36.3225 0 89.2316 0 89.2316V-83H1440V89.2316C1440 89.2316 1382.81 108.974 1302.06 126.14C1246.98 137.852 1180.93 148.364 1114.6 150.59C848.186 159.529 643.086 19.3437 376.779 30.0272Z" fill="white" />
        </svg>
        <div className={` ${styles.contactContainer} section`}>
          <div className='col-12 position-relative footer-content px-0'>
            <div className='row footer-row'>
              <div className='col-12 col-md-8 col-lg-8 d-flex justify-content-start mb-5 mb-md-0 mb-lg-0'>
                <Link className="navbar-brand" href="/">
                  {site[0]?.logo && (
                    <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='logo_footer' />
                  )}
                </Link>
              </div>


              <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-end gap-3'>
                <Form action="/search" className='d-flex search-form'>
                  <input name="query" className='form-control' placeholder='Join a Newsletter' />
                  <Button text="Subscribe" href="" />
                </Form>
              </div>
            </div>

            <div className='d-block d-md-flex d-lg-flex footer-row'>
              <div className="col-12 col-md-2 col-lg-2 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>Quick Links</h5>
                  <Link href="/" className='footer-link-tag'><p className='footer-quick-links'>Home</p></Link>
                  <Link href="/about-breath" className='footer-link-tag'><p className='footer-quick-links'>About Breathe </p></Link>
                  <Link href="/services" className='footer-link-tag'><p className='footer-quick-links'>Our Services </p></Link>
                  <Link href="/blog" className='footer-link-tag'><p className='footer-quick-links'>Blog</p></Link>
                </div>

              </div>


              <div className="col-12 col-md-2 col-lg-2 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>SERVICES</h5>
                  {service?.map((item, index) => (
                    <Link key={index} href={`/services/${item.slug.current}`} className='footer-link-tag'>
                      <p className='footer-quick-links'>{item?.title}</p>
                    </Link>
                  ))}
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-4 footer-row-2">

                <div className='quick-links-container'>
                  <h5 className='footer-h5'>CONTACT US</h5>
                  <p className='footer-quick-links'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#5B451E" />
                    </svg>

                    {site[0]?.address}</p>
                  <p className='footer-quick-links'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#5B451E" />
                    </svg>

                    {site[0]?.emailArray[0]?.email}</p>

                  <p className='footer-quick-links'>


                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#5B451E" />
                    </svg>

                    {site[0]?.phoneNumberArray[0]?.number}</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 footer-row-2">
                <div className='quick-links-container'>
                  <h5 className='footer-h5'>JOIN US</h5>
                  <div className="d-flex gap-3">
                    {site?.[0]?.socialMedia.map((item, index) => {
                      const iconUrl = item.icon ? urlFor(item.icon).url() : "/interior.png";

                      return item.link ? (
                        <Link href={item.link} key={index}>
                          <Image
                            src={iconUrl}
                            alt="Breathe Logo"
                            width={30}
                            height={30}
                            className=""
                            objectFit='contain'
                            style={{ width: '30px !important', height: '30px !important', objectFit: 'contain' }}
                          />
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className='footer-row d-block d-md-flex d-lg-flex justify-content-between'>
              <p className='bottom-p'>Copyright @ Breathe. All rights reserved.</p>
              <Link style={{
                color:'unset',
                textDecoration:'none'
              }} className='bottom-p' href={'/terms'}>Terms & Conditions</Link>
              {/* <a className='text-decoration-none' href="/terms">
                <p className='bottom-p'>Terms & Conditions</p>
              </a> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
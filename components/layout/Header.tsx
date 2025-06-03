//
// "use client";
// import Image from 'next/image';
// import pageStyles from "@/styles/page.module.css";
// import { urlFor } from '@/sanity/libs/sanity';
// import { SiteData } from '@/sanity/types';
// import { usePathname } from 'next/navigation';
// import { Nav, Navbar } from 'react-bootstrap';
//
// interface HeaderProps {
//   site: SiteData[];
// }
//
// const Header = ({ site }: HeaderProps) => {
//   const pathname = usePathname();
//
//   if (!site || !site[0]) {
//     console.error("Invalid site data:", site);
//     return null;
//   }
//
//   // const isActive = (path: string) => pathname?.startsWith(path) ? 'active-link' : '';
//
//   const isActive = (path: string) => {
//     if (path === '/') {
//       return pathname === '/' ? 'active-link' : '';
//     }
//     return pathname?.startsWith(path) ? 'active-link' : '';
//   };
//
//
//   return (
//     <>
//       <div className='w-100 navColor' style={{ backgroundColor: "#F3EEE7 !important" }}>
//         <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`} style={{ backgroundColor: "#F3EEE7 !important" }}>
//           <Navbar expand="xl" className="p-3 py-lg-4 navStyleMobile" style={{ backgroundColor: "#F3EEE7 !important" }}>
//             <Navbar.Brand href="/">
//               {site[0]?.logo && (
//                 <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='img-fluid ' />
//               )}
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//               <Nav>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/')}`} href="/">Home</Nav.Link>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/services')}`} href="/services">Our Services</Nav.Link>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/about-breath')}`} href="/about-breath">About Breathe</Nav.Link>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/blog')}`} href="/blog">Blog</Nav.Link>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/contact')}`} href="/contact">Contact Us</Nav.Link>
//                 <Nav.Link className={`nav-item px-lg-3 ${isActive('/terms')}`} href="/terms">T & C</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default Header;

"use client";
import Image from 'next/image';
import pageStyles from "@/styles/page.module.css";
import { urlFor } from '@/sanity/libs/sanity';
import { SiteData } from '@/sanity/types';
import { usePathname } from 'next/navigation';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface HeaderProps {
  site: SiteData[];
}

const Header = ({ site }: HeaderProps) => {
  const pathname = usePathname();

  if (!site || !site[0]) {
    console.error("Invalid site data:", site);
    return null;
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' ? 'active-link' : '';
    }
    return pathname?.startsWith(path) ? 'active-link' : '';
  };

  return (
      <>
        <div className='w-100 navColor' style={{ backgroundColor: "#F3EEE7 !important" }}>
          <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`} style={{ backgroundColor: "#F3EEE7 !important" }}>
            <Navbar expand="xl" className="p-3 py-lg-4 navStyleMobile" style={{ backgroundColor: "#F3EEE7 !important" }}>
              <Navbar.Brand href="/">
                {site[0]?.logo && (
                    <Image src={urlFor(site[0]?.logo).url() || "/interior.png"} alt="Breathe Logo" width={317} height={33} className='img-fluid' />
                )}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav.Link className={`nav-item px-lg-3 ${isActive('/')}`} href="/">Home</Nav.Link>
                  <NavDropdown
                      title="Our Services"
                      id="services-dropdown"
                      className={`nav-item px-lg-3 ${isActive('/services')}`}
                  >
                    <NavDropdown.Item href="/services#body" className="nav-item">Body</NavDropdown.Item>
                    <NavDropdown.Item href="/services#nail-treatment" className="nav-item">Nail Treatment</NavDropdown.Item>
                    <NavDropdown.Item href="/services#facial" className="nav-item">Facial</NavDropdown.Item>
                    <NavDropdown.Item href="/services#add-ons" className="nav-item">Add-ons</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className={`nav-item px-lg-3 ${isActive('/about-breath')}`} href="/about-breath">About Breathe</Nav.Link>
                  <Nav.Link className={`nav-item px-lg-3 ${isActive('/blog')}`} href="/blog">Blog</Nav.Link>
                  <Nav.Link className={`nav-item px-lg-3 ${isActive('/contact')}`} href="/contact">Contact Us</Nav.Link>
                  <Nav.Link className={`nav-item px-lg-3 ${isActive('/terms')}`} href="/terms">T & C</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </>
  );
};

export default Header;
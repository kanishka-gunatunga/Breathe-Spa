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
import {urlFor} from '@/sanity/libs/sanity';
import {SiteData} from '@/sanity/types';
import {usePathname} from 'next/navigation';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

interface HeaderProps {
    site: SiteData | null;
}

const Header = ({site}: HeaderProps) => {
    const pathname = usePathname();

    // if (!site || !site[0]) {
    //   console.error("Invalid site data:", site);
    //   return null;
    // }

    // const isActive = (path: string) => {
    //   if (path === '/') {
    //     return pathname === '/' ? 'active-link' : '';
    //   }
    //   return pathname?.startsWith(path) ? 'active-link' : '';
    // };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/' ? 'active-link' : '';
        }

        if (path === '/services') {
            return pathname?.startsWith('/services') ? 'active-link' : '';
        }
        return pathname?.startsWith(path) ? 'active-link' : '';
    };

    const isDropdownItemActive = (href: string) => {
        // This will check if the current URL matches the specific dropdown item's href
        return pathname === href ? 'active-link' : '';
    };

    return (
        <>
            <div className='w-100 navColor' style={{backgroundColor: "#F3EEE7 !important"}}>
                <div className={`${pageStyles.contactContainer} ${pageStyles.mobile_width} navColor`}
                     style={{backgroundColor: "#F3EEE7 !important"}}>
                    <Navbar expand="xl" className="p-3 py-lg-4 navStyleMobile"
                            style={{backgroundColor: "#F3EEE7 !important"}}>
                        <Navbar.Brand href="/">
                            {site?.logo && (
                                <Image src={urlFor(site.logo).url() || "/interior.png"} alt="Breathe Logo" width={317}
                                       height={33} className='img-fluid'/>
                            )}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/')}`} href="/">Home</Nav.Link>
                                {/*<NavDropdown*/}
                                {/*    title="Our Services"*/}
                                {/*    id="services-dropdown"*/}
                                {/*    className={`nav-item px-lg-3 ${isActive('/services')}`}*/}
                                {/*>*/}
                                {/*  <NavDropdown.Item href="/services#body" className="dropdown-item">Body</NavDropdown.Item>*/}
                                {/*  <NavDropdown.Item href="/services#nail-treatment" className="dropdown-item">Nail Treatment</NavDropdown.Item>*/}
                                {/*  <NavDropdown.Item href="/services#facial" className="dropdown-item">Facial</NavDropdown.Item>*/}
                                {/*  <NavDropdown.Item href="/services#add-ons" className="dropdown-item">Add-Ons</NavDropdown.Item>*/}
                                {/*</NavDropdown>*/}


                                <div
                                    className={`nav-item px-lg-3 d-flex align-items-start align-items-xl-center dropdown`}>
                                    <Nav.Link className={`p-0 our-services-nav-mobile ${isActive('/services')}`}
                                              href="/services">Our Services</Nav.Link>
                                    <NavDropdown
                                        title=""
                                        id="services-dropdown"
                                        className="p-0"
                                    >
                                        <NavDropdown.Item href="/services#body"
                                                          className={`dropdown-item ${isActive('/services#body')}`}>Body</NavDropdown.Item>
                                        <NavDropdown.Item href="/services#nail-treatment"
                                                          className={`dropdown-item ${isActive('/services#nail-treatment')}`}>Nail
                                            Treatment</NavDropdown.Item>
                                        <NavDropdown.Item href="/services#facial"
                                                          className={`dropdown-item ${isDropdownItemActive('/services#facial')}`}>Facial</NavDropdown.Item>
                                        <NavDropdown.Item href="/services#add-ons"
                                                          className={`dropdown-item ${isDropdownItemActive('/services#add-ons')}`}>Add-Ons</NavDropdown.Item>
                                    </NavDropdown>
                                </div>


                                {/*{site.navigation && site.navigation.map((navItem) => {*/}
                                {/*  // Skip 'Our Services' if it's already handled dynamically above*/}
                                {/*  if (navItem.title === 'Our Services' || navItem.link === '/services') {*/}
                                {/*    return null;*/}
                                {/*  }*/}
                                {/*  if (navItem.dropdownItems && navItem.dropdownItems.length > 0) {*/}
                                {/*    return (*/}
                                {/*        <NavDropdown*/}
                                {/*            key={navItem.link || navItem.title} // Use link or title as a key*/}
                                {/*            title={navItem.title}*/}
                                {/*            id={`dropdown-${navItem.title.toLowerCase().replace(/\s+/g, '-')}`}*/}
                                {/*            className={`nav-item px-lg-3 ${isActive(navItem.link)}`}*/}
                                {/*        >*/}
                                {/*          {navItem.dropdownItems.map((item) => (*/}
                                {/*              <NavDropdown.Item key={item.link} href={item.link} className="dropdown-item">*/}
                                {/*                {item.title}*/}
                                {/*              </NavDropdown.Item>*/}
                                {/*          ))}*/}
                                {/*        </NavDropdown>*/}
                                {/*    );*/}
                                {/*  } else {*/}
                                {/*    return (*/}
                                {/*        <Nav.Link*/}
                                {/*            key={navItem.link}*/}
                                {/*            className={`nav-item px-lg-3 ${isActive(navItem.link)}`}*/}
                                {/*            href={navItem.link}*/}
                                {/*        >*/}
                                {/*          {navItem.title}*/}
                                {/*        </Nav.Link>*/}
                                {/*    );*/}
                                {/*  }*/}
                                {/*})}*/}


                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/about-breath')}`}
                                          href="/about-breath">About Breathe</Nav.Link>
                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/blog')}`}
                                          href="/blog">Blog</Nav.Link>
                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/contact')}`} href="/contact">Contact
                                    Us</Nav.Link>
                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/careers')}`}
                                          href="/careers">Careers</Nav.Link>
                                <Nav.Link className={`nav-item px-lg-3 ${isActive('/terms')}`} href="/terms">T &
                                    C</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default Header;
"use client";
import { urlFor } from '@/sanity/libs/sanity';
import { ServiceCategory } from '@/sanity/types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import style from '@/styles/services.module.css'
import DarkButton from './DarkButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pageStyle from '@/styles/page.module.css'


interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

interface ServiceCategoryCardProps {
    category: ServiceCategory;
    categoryId: number
}
gsap.registerPlugin(ScrollTrigger);

// const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category, categoryId }) => {

//     useEffect(() => {
//         category.services.forEach((service, index) => {
//             const imageId = `service-image-${category.slug.current}-${index}`;

//             ScrollTrigger.create({
//                 trigger: `#${`section-${categoryId}`}`,
//                 start: 'top 20px',
//                 end: 'bottom +=430',
//                 pin: `#${imageId}`,
//             });
//         });
//     }, [category]);

//     return (
//         <div className={` ${pageStyle.contactContainer} section`}  id={`section-${categoryId}`}>
//             <div className="d-none d-lg-flex flex-column-reverse flex-lg-row">
//                 <div className="col-12 col-lg-6 pe-lg-2 mt-0 mt-lg-0">
//                     <h3 className={`fade-in-up ${style.se_txt_40}`}>{category.title}</h3>
//                     <p className={`${style.se_txt_15} mb-3 mb-lg-4`}>{category.description}</p>
//                     <div className={`${style.servicesList} row p-0 row-cols-1 row-cols-md-2`}>
//                         {category.services.map((service, index) => (
//                             <div key={index} className={`${style.serviceItem} d-flex flex-column mt-4`}>
//                                 <div>
//                                     <h4 className={`${style.se_txt_18}`}>{service.serviceName}</h4>
//                                     <h5 className={`${style.se_txt_12}`}>{service.serviceDescription?.title}</h5>
//                                     <ul className={`${style.se_txt_14} pb-3`}>
//                                         {service.pricing.map((pricing, idx) => (
//                                             <li key={idx} className={`${style.se_txt_14}`}>
//                                                 {pricing.duration} | Rs.{pricing.price}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <DarkButton text="View More" link={`/services/${category.slug.current}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-12 col-lg-6 ps-lg-2 d-flex justify-content-lg-end align-items-start">
//                     {category.mainImage && (
//                         <div id={`service-image-${category.slug.current}-${categoryId}`} className="stickyImageContainer" data-aos="fade-up">
//                             <div className='position-relative'>
//                                 <Image
//                                     src={urlFor(category.mainImage).url()}
//                                     alt={category.title}
//                                     className={`${style.serviceImage} img-fluid`}
//                                     height={600}
//                                     width={500}
//                                 />
//                                 <div className={`${style.darkRectangleServiceMain}`}></div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className="d-flex d-lg-none flex-column-reverse flex-lg-row">
//                 <div className="col-12 col-lg-6 pe-lg-2 mt-3 mt-lg-0">
//                     <h3 className={`fade-in-up ${style.se_txt_40}`}>{category.title}</h3>
//                     <p className={`${style.se_txt_15} mb-3 mb-lg-4`}>{category.description}</p>
//                     <div className={`${style.servicesList} mb-0 row p-0 row-cols-1 row-cols-md-2`}>
//                         {category.services.map((service, index) => (
//                             <div key={index} className={`${style.serviceItem} d-flex flex-column`}>
//                                 <div>
//                                     <h4 className={`${style.se_txt_18}`}>{service.serviceName}</h4>
//                                     <h5 className={`${style.se_txt_12}`}>{service.serviceDescription?.title}</h5>
//                                     <ul  className={`${style.se_txt_14} pb-3`}>
//                                         {service.pricing.map((pricing, idx) => (
//                                             <li key={idx}  className={`${style.se_txt_14}`}>
//                                                 {pricing.duration} | Rs.{pricing.price}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <DarkButton text="View More" link={`/services/${category.slug.current}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-12 col-lg-6 ps-lg-2 d-flex justify-content-lg-end align-items-start">
//                     {category.mainImage && (
//                         <div id={`service-image-${category.slug.current}-${categoryId}`} className="stickyImageContainer" data-aos="fade-up">
//                             <div className='position-relative'>
//                                 <Image
//                                     src={urlFor(category.mainImage).url()}
//                                     alt={category.title}
//                                     className={`${style.serviceImage} img-fluid`}
//                                     height={600}
//                                     width={500}
//                                 />
//                                 <div className={`${style.darkRectangleServiceMain}`}></div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category, categoryId }) => {
    useEffect(() => {
        if (category.services) {
            category.services.forEach((service, index) => {
                const imageId = `service-image-${category.slug.current}-${index}`;

                ScrollTrigger.create({
                    trigger: `#${`${category.slug.current}`}`,
                    start: 'top 20px',
                    end: 'bottom +=430',
                    pin: `#${imageId}`,
                });
            });
            setTimeout(() => {
                const hash = window.location.hash;
                if (hash) {
                  const el = document.querySelector(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }, 600);
        }
    }, [category]);

    const services = category.services || [];

    return (
        <div className={`${pageStyle.contactContainer} section`} id={`${category.slug.current}`}>
            <div className="d-none d-lg-flex flex-column-reverse flex-lg-row">
                <div className="col-12 col-lg-6 pe-lg-2 mt-0 mt-lg-0">
                    <h3 className={`fade-in-up ${style.se_txt_40}`}>{category.title}</h3>
                    <p className={`${style.se_txt_15} mb-3 mb-lg-4`}>{category.description}</p>
                    <div className={`${style.servicesList} row p-0 row-cols-1 row-cols-md-2`}>
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div key={index} className={`${style.serviceItem} d-flex flex-column mt-4`}>
                                    <div>
                                        <h4 className={`${style.se_txt_18}`}>{service.serviceName}</h4>
                                        <h5 className={`${style.se_txt_12}`}>{service.serviceDescription?.title}</h5>
                                        <ul className={`${style.se_txt_14} pb-3`}>
                                            {service.pricing.map((pricing, idx) => (
                                                <li key={idx} className={`${style.se_txt_14}`}>
                                                    {pricing.duration} | Rs.{pricing.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <DarkButton text="View More" link={`/services/${category.slug.current}`} />
                                </div>
                            ))
                        ) : (
                            <p>No services available for this category.</p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-lg-6 ps-lg-2 d-flex justify-content-lg-end align-items-start">
                    {category.mainImage && (
                        <div id={`service-image-${category.slug.current}-${categoryId}`} className="stickyImageContainer" data-aos="fade-up">
                            <div className="position-relative">
                                <Image
                                    src={urlFor(category.mainImage).url()}
                                    alt={category.title}
                                    className={`${style.serviceImage} img-fluid`}
                                    height={600}
                                    width={500}
                                />
                                <div className={`${style.darkRectangleServiceMain}`}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="d-flex d-lg-none flex-column-reverse flex-lg-row" id={`${category.slug.current}`}>
                <div className="col-12 col-lg-6 pe-lg-2 mt-3 mt-lg-0">
                    <h3 className={`fade-in-up ${style.se_txt_40}`}>{category.title}</h3>
                    <p className={`${style.se_txt_15} mb-3 mb-lg-4`}>{category.description}</p>
                    <div className={`${style.servicesList} mb-0 row p-0 row-cols-1 row-cols-md-2`}>
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div key={index} className={`${style.serviceItem} d-flex flex-column`}>
                                    <div>
                                        <h4 className={`${style.se_txt_18}`}>{service.serviceName}</h4>
                                        <h5 className={`${style.se_txt_12}`}>{service.serviceDescription?.title}</h5>
                                        <ul className={`${style.se_txt_14} pb-3`}>
                                            {service.pricing.map((pricing, idx) => (
                                                <li key={idx} className={`${style.se_txt_14}`}>
                                                    {pricing.duration} | Rs.{pricing.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <DarkButton text="View More" link={`/services/${category.slug.current}`} />
                                </div>
                            ))
                        ) : (
                            <p>No services available for this category.</p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-lg-6 ps-lg-2 d-flex justify-content-lg-end align-items-start">
                    {category.mainImage && (
                        <div id={`service-image-${category.slug.current}-${categoryId}`} className="stickyImageContainer" data-aos="fade-up">
                            <div className="position-relative">
                                <Image
                                    src={urlFor(category.mainImage).url()}
                                    alt={category.title}
                                    className={`${style.serviceImage} img-fluid`}
                                    height={600}
                                    width={500}
                                />
                                <div className={`${style.darkRectangleServiceMain}`}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategoryCard;

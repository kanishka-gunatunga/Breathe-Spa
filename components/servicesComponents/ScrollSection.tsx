import { urlFor } from '@/sanity/libs/sanity';
import { ServiceCategory } from '@/sanity/types';
import Image from 'next/image';
import React from 'react';
import style from '@/styles/services.module.css'
import DarkButton from './DarkButton';


interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

interface ServiceCategoryCardProps {
    category: ServiceCategory;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category }) => {


    return (
        <div className="container section">
            <div className="d-flex flex-column-reverse flex-lg-row">
                <div className="col-12 col-lg-6 pe-lg-2 mt-3 mt-lg-0" data-aos="fade-up">
                    <h3 className={`fade-in-up ${style.serviceTitle}`}>{category.title}</h3>
                    <p className={`${style.paragraph} mb-3 mb-lg-4`}>{category.description}</p>
                    <div className={`${style.servicesList} row p-0 row-cols-1 row-cols-md-2`}>
                        {category.services.map((service, index) => (
                            <div key={index} className={`${style.serviceItem} d-flex flex-column`}>
                                <div>
                                    <h4>{service.serviceName}</h4>
                                    <h5>{service.serviceDescription?.title}</h5>
                                    <ul>
                                        {service.pricing.map((pricing, idx) => (
                                            <li key={idx}>
                                                {pricing.duration} | Rs.{pricing.price}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <DarkButton text="View More" link={`/services/${category.slug.current}`} />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="col-12 col-lg-6 ps-lg-2 d-flex justify-content-lg-end align-items-start">
                    {category.mainImage && (
                        <div className="position-relative" data-aos="fade-up">
                            <Image
                                src={urlFor(category.mainImage).url()}
                                alt={category.title}
                                className={`${style.serviceImage} img-fluid`}
                                height={600}
                                width={500}
                            />
                            <div className={`${style.darkRectangleServiceMain}`}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategoryCard;

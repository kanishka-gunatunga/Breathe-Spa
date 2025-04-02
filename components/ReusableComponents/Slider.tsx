'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutStyles from "@/styles/about.module.css";
import styles from "@/styles/services.module.css";

interface CardItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    buttonText?: string;
    buttonLink?: string;
}

const CardSlider: React.FC = () => {
    const cards: CardItem[] = [
        {
            id: 1,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 2,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 3,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 4,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 5,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 6,
            title: 'David Miller',
            description: 'Senior Beautician',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        }
    ];

    return (
        <div className="container my-5">


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                // autoplay={false}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-4"
                
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id} style={{paddingTop:'48px',backgroundColor: "transparent !important"}}>
                        <div className={`card h-100 ${AboutStyles.teamMemberCard}`} style={{ borderRadius: "30px !important"}}>
                            <div className='shadow-sm' style={{ position: 'relative', height: '440px',borderRadius: "30px !important",backgroundColor: "transparent !important", }}>
                                <div className={`position-absolute  ${AboutStyles.positionAbDiv}}`} style={{ height: '350px', borderRadius: "30px !important"}}>
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.title}
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: "30px !important", backgroundColor: "transparent !important" }}
                                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`${AboutStyles.TeamImg} `}
                                    />
                                </div>

                            </div>
                            <div className={`card-body d-flex flex-column ${AboutStyles.cardBody}`}>
                                <h5 className={`card-title ${styles.se_txt_35_awsome}`}>{card.title}</h5>
                                <p className={`card-text flex-grow-1 ${styles.se_txt_20_work_sans}`}>{card.description}</p>
                                {/* {card.buttonText && (
                                    <a href={card.buttonLink} className="btn btn-primary mt-auto align-self-start">
                                        {card.buttonText}
                                    </a>
                                )} */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;
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

interface CardItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    buttonText?: string;
    buttonLink?: string;
}

const CardSlider: React.FC = () => {
    // Sample card data with local image paths
    const cards: CardItem[] = [
        {
            id: 1,
            title: 'Team Member 1',
            description: 'Description of team member 1 and their role.',
            imageUrl: '/teamImg.png', // Path from public folder
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 2,
            title: 'Team Member 2',
            description: 'Description of team member 2 and their role.',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 3,
            title: 'Team Member 3',
            description: 'Description of team member 3 and their role.',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 4,
            title: 'Team Member 4',
            description: 'Description of team member 4 and their role.',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 5,
            title: 'Team Member 5',
            description: 'Description of team member 5 and their role.',
            imageUrl: '/teamImg.png',
            buttonText: 'View Profile',
            buttonLink: '#'
        },
        {
            id: 6,
            title: 'Team Member 6',
            description: 'Description of team member 6 and their role.',
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
                navigation
                pagination={{ clickable: true }}
                autoplay={false}
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
                    <SwiperSlide key={card.id} style={{paddingTop:'48px'}}>
                        <div className={`card h-100 shadow-sm ${AboutStyles.teamMemberCard}`}>
                            <div style={{ position: 'relative', height: '440px' }}>
                                <div className={`position-absolute ${AboutStyles.positionAbDiv}}`} style={{ height: '350px' }}>
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`${AboutStyles.TeamImg}`}
                                    />
                                </div>

                            </div>
                            <div className={`card-body d-flex flex-column ${AboutStyles.cardBody}`}>
                                <h5 className={`card-title ${AboutStyles.title}`}>{card.title}</h5>
                                <p className={`card-text flex-grow-1${AboutStyles.description}`}>{card.description}</p>
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
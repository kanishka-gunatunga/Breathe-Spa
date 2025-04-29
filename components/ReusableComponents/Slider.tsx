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
import { Member } from '@/sanity/types';
import { urlFor } from '@/sanity/libs/sanity';



interface CardSliderProps {
    team: Member[];
}
const CardSlider: React.FC<CardSliderProps> = ({ team }) => {

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
                {team.map((card, index) => (
                    <SwiperSlide key={index} className='team_slide_wrapper'>
                        <div className={`card h-100 teamMemberCard`}>
                            <div className='shadow-sm team_member_shadow_card_wrapper d-flex justify-content-center'>
                                <div className={`position-absolute team_card_out`}>

                                    {card.mainImage && (
                                        <Image
                                            src={urlFor(card?.mainImage).url() || "/about1.png"}
                                            alt={card.name}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: "30px !important", backgroundColor: "transparent !important" }}
                                            className={`${AboutStyles.TeamImg} `}
                                        />
                                    )}
                                </div>

                            </div>
                            <div className={`card-body d-flex flex-column ${AboutStyles.cardBody}`}>
                                <h5 className={`card-title ${styles.se_txt_35_awsome}`}>{card.name}</h5>
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
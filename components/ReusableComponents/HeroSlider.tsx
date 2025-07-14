'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination,  Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import style from '@/styles/services.module.css'



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import 'bootstrap/dist/css/bootstrap.min.css';

import { urlFor } from '@/sanity/libs/sanity';
import {  HomeData } from '@/sanity/types';


interface HeroSliderProps {
  home: HomeData[];

}

const HeroSlider: React.FC<HeroSliderProps> = ({ home }) =>{
  return (
    <div className={`d-flex ${style.imageContainer} position-relative`}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
        >
          {home.heroArray.map((hero) => (
            <SwiperSlide key={hero._key}>
              {hero.mainImage && (
                <Image src={urlFor(hero.mainImage).url() || "/Vector12.png"} alt='home hero image'
                  width={1920}
                  height={1080}
                  style={{ width: '100vw', height: 'auto', objectFit: 'cover', objectPosition: 'bottom' }} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination position-absolute"></div>
      </div>
  );
};

export default HeroSlider;

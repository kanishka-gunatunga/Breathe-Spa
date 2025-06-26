'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {urlFor} from '@/sanity/libs/sanity';
import {Client} from '@/sanity/types';
import pageStyle from '@/styles/services.module.css'
import styles from "@/styles/page.module.css";


interface TestimonialSliderProps {
    testimonials: Client[];

}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({testimonials}) => {
    return (
        <div className="col-12 col-md-12 col-lg-10 col-xl-10 position-relative mb-5">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.testimonial-next',
                    prevEl: '.testimonial-prev',
                }}
                spaceBetween={30}
                className={styles.testimonialSwiper}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className={`card ${styles.testimonialCard}`}>
                            <div className="card-body p-0 p-lg-2 d-flex justify-content-between">
                                <div className="d-flex d-lg-flex gap-5">
                                    {/*<div className='d-flex justify-content-center justify-content-lg-start'>*/}
                                    {/*    {testimonial.mainImage && (*/}
                                    {/*        <Image*/}
                                    {/*            className={`${styles.testimonialPic} rounded`}*/}
                                    {/*            src={urlFor(testimonial?.mainImage).url() || "/testimonialPic.png"}*/}
                                    {/*            alt="Testimonial"*/}
                                    {/*            width={289}*/}
                                    {/*            height={343}*/}
                                    {/*        />*/}
                                    {/*    )}*/}


                                    {/*</div>*/}
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <p className={`${pageStyle.se_txt_20_work_sans_new} align-items-center mb-5`}>
                                            &quot;{testimonial.description}&quot;
                                        </p>
                                        {/*<div className="align-items-center text-center">*/}
                                        {/*    <h5 className={pageStyle.se_txt_25_awesome_new}>{testimonial.name}</h5>*/}
                                        {/*    <p className={pageStyle.se_txt_16_work_sans}>{testimonial.position}</p>*/}
                                        {/*    <div className="d-flex align-items-center starRate justify-content-center">*/}
                                        {/*        {[...Array(5)].map((_, i) => (*/}
                                        {/*            <svg*/}
                                        {/*                key={i}*/}
                                        {/*                xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*                width="26"*/}
                                        {/*                height="26"*/}
                                        {/*                fill={i < Number(testimonial.rate) ? "#ffc404" : "#d3d3d3"}*/}
                                        {/*                className="bi bi-star-fill mx-1"*/}
                                        {/*                viewBox="0 0 16 16"*/}
                                        {/*            >*/}
                                        {/*                <path*/}
                                        {/*                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>*/}
                                        {/*            </svg>*/}
                                        {/*        ))}*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className={`${styles.arrowDiv} mt-5 d-flex justify-content-center align-items-end w-100`}>

                                            <div className="col-6 align-items-center text-center">
                                                <h5 className={pageStyle.se_txt_25_awesome_new}>{testimonial.name}</h5>
                                                <p className={pageStyle.se_txt_16_work_sans}>{testimonial.position}</p>
                                                <div className="d-flex align-items-center starRate justify-content-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="26"
                                                            height="26"
                                                            fill={i < Number(testimonial.rate) ? "#ffc404" : "#d3d3d3"}
                                                            className="bi bi-star-fill mx-1"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={`${styles.arrowDivNew} d-none d-lg-flex justify-content-end position-absolute`}>
                                                <button className={`testimonial-prev ${styles.customPrev}`}>
                                                    <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                                    </svg>
                                                </button>
                                                <button className={`testimonial-next ${styles.customNext}`}>
                                                    <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                                                        <path fillRule="evenodd"
                                                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className={`card ${styles.testimonialCard}`}>*/}
                        {/*    <div className="card-body p-0 p-lg-2">*/}
                        {/*        <div className="d-block d-md-flex d-lg-flex gap-5">*/}
                        {/*            /!*<div className='d-flex justify-content-center justify-content-lg-start'>*!/*/}
                        {/*            /!*    {testimonial.mainImage && (*!/*/}
                        {/*            /!*        <Image*!/*/}
                        {/*            /!*            className={`${styles.testimonialPic} rounded`}*!/*/}
                        {/*            /!*            src={urlFor(testimonial?.mainImage).url() || "/testimonialPic.png"}*!/*/}
                        {/*            /!*            alt="Testimonial"*!/*/}
                        {/*            /!*            width={289}*!/*/}
                        {/*            /!*            height={343}*!/*/}
                        {/*            /!*        />*!/*/}
                        {/*            /!*    )}*!/*/}


                        {/*            /!*</div>*!/*/}
                        {/*            <div className="d-flex flex-column justify-content-center align-items-center">*/}
                        {/*                <p className={`${pageStyle.se_txt_20_work_sans_new} justify-content-center align-items-center mb-5`}>*/}
                        {/*                    &quot;{testimonial.description}&quot;*/}
                        {/*                </p>*/}
                        {/*                <div className="align-items-center text-center">*/}
                        {/*                    <h5 className={pageStyle.se_txt_25_awesome_new}>{testimonial.name}</h5>*/}
                        {/*                    <p className={pageStyle.se_txt_16_work_sans}>{testimonial.position}</p>*/}
                        {/*                    <div className="d-flex align-items-center starRate justify-content-center">*/}
                        {/*                        {[...Array(5)].map((_, i) => (*/}
                        {/*                            <svg*/}
                        {/*                                key={i}*/}
                        {/*                                xmlns="http://www.w3.org/2000/svg"*/}
                        {/*                                width="26"*/}
                        {/*                                height="26"*/}
                        {/*                                fill={i < Number(testimonial.rate) ? "#ffc404" : "#d3d3d3"}*/}
                        {/*                                className="bi bi-star-fill mx-1"*/}
                        {/*                                viewBox="0 0 16 16"*/}
                        {/*                            >*/}
                        {/*                                <path*/}
                        {/*                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>*/}
                        {/*                            </svg>*/}
                        {/*                        ))}*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className={`${styles.arrowDiv} d-none d-md-flex`}>*/}
                        {/*                    <button className={`testimonial-prev ${styles.customPrev}`}>*/}
                        {/*                        <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">*/}
                        {/*                            <path fillRule="evenodd"*/}
                        {/*                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </button>*/}
                        {/*                    <button className={`testimonial-next ${styles.customNext}`}>*/}
                        {/*                        <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">*/}
                        {/*                            <path fillRule="evenodd"*/}
                        {/*                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>*/}
                        {/*                        </svg>*/}
                        {/*                    </button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;

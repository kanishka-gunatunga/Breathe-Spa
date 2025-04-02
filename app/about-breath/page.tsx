'use client';
import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import pageStyle from '@/styles/services.module.css'

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import CardSlider from "@/components/ReusableComponents/Slider";
import style from '@/styles/services.module.css'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
import Paragraph from "@/components/servicesComponents/Paragraph";
import MainTitle from "@/components/servicesComponents/MainTitle";


const page = () => {
  return (
    <div>
      <div className={styles.aboutPage}>
        <div className={`d-flex ${style.imageContainer}`}>
          <Image src={"/banner-about.png"} alt='services hero image' width={1920} height={1080} style={{ width: "100vw", height: "auto", objectFit: 'cover' }} />
        </div>
        
        {/* section 3  about brehte for desktop and mobile hide*/}
        <div className={` ${styles.contactContainer} section`}>
          <div className={`d-block d-lg-flex justify-content-center gap-5 mt-5 ${styles.headSection} `}>
            <div className={`col-12 col-lg-5 my-5 my-md-0 my-lg-0 position-relative`}>
              <Image className={`${pageStyle.imgHeight} `} src="/about1.png" height={650} width={548} alt="" />
            </div>
            <div className={`col-12 col-lg-5 d-flex flex-column pt-4 pt-lg-0 about ${styles.aboutBreatheContainer}`}>
              <MainTitle title={"About Breathe"} />
              <Paragraph text={"Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor."} />
              <Button text="BOOK A TREATMENT" href="#" />
            </div>
          </div>
        </div>


        {/* about breathe mobile view desktop hide */}
        {/* <div className={`${style.contactContainer} ${styles.OnmobileHideExtra}`}>
          <div className="px-3 d-flex flex-column justify-content-center">
            <div className={`${styles.mobileSection} pt-5`}>
              <Image className={`img-fluid ${styles.locationImg1}`} src="/about1.png" height={650} width={"100"} alt="" style={{ width: '100%' }} />
              <div className={`${styles.aboutBreathDescriptionMobile} pb-5 pt-4`}>
                <MainTitle title={"About Breathe"} />
                <Paragraph text={"Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor."} />
              </div>
            </div>
          </div>
        </div> */}

        <YellowBackSection
          title="Why Choose Us"
          description="Lorem ipsum dolor sit amet consectetur. Ac arcu auctor non imperdiet laoreet morbi tristique metus. Bibendum enim ut non ac aenean malesuada eget lectus. Vitae amet at amet diam. Massa porttitor mi scelerisque praesent auctor pharetra eget ut. Augue elementum consequat lacus sit. Suspendisse ipsum odio eu sagittis semper tincidunt. Sit ultrices egestas arcu odio tristique amet interdum montes. Cras vel sed cursus vulputate viverra mauris. Pellentesque quam ultricies adipiscing quam nunc purus lectus. Vitae amet velit at ut. Adipiscing amet eleifend duis a augue. Maecenas vulputate sed tellus imperdiet dictum imperdiet etiam quis. Blandit consectetur placerat imperdiet in purus amet. Eget posuere ac commodo ultrices tristique dolor turpis interdum semper. Arcu ut ornare placerat dolor scelerisque tincidunt commodo duis egestas. Euismod amet scelerisque nullam purus duis velit. Augue sit aliquet auctor aliquam. Mauris egestas dolor egestas consectetur. Blandit eget egestas mauris sit. Feugiat neque consequat sit lorem mattis enim nibh. Neque odio quis ultrices morbi sit augue ut eget. Bibendum enim proin dui ut in. Ac placerat quisque iaculis rhoncus ut sit. Leo a vulputate purus et."
          image="/about2.png"
          buttonText="EXPLORE OUR SERVICES"
        />

        {/* Testimonials Swiper */}
        <div className={`${styles.baseSection}`}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <MainTitle title={"Testimonials"} />
            <div className="col-12 col-md-12 col-lg-8 position-relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.testimonial-next',
                  prevEl: '.testimonial-prev',
                }}
                // pagination={{
                //   clickable: true,
                // }}
                spaceBetween={30}
                className={styles.testimonialSwiper}
              >
                {[1, 2, 3].map((testimonial) => (
                  <SwiperSlide key={testimonial}>
                    <div className={`card ${styles.testimonialCard}`}>
                      <div className="card-body p-0 p-lg-2">
                        <div className="d-block d-md-flex d-lg-flex gap-5">
                          <div>
                            <Image
                              className={`${styles.testimonialPic} rounded`}
                              src="/testimonialPic.png"
                              alt="Testimonial"
                              width={289}
                              height={343}
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-between pt-5">
                            <p className={`${pageStyle.se_txt_20_work_sans} text-start text-md-start`}>
                              &quot;Lorem ipsum dolor sit amet consectetur. Nisl in dictum viverra in sagittis tincidunt. Ut aenean id mattis quis consectetur at cras accumsan. Maecenas pulvinar tortor ligula aliquam scelerisque pharetra.&quot;
                            </p>
                            <div>
                              <h5 className={pageStyle.se_txt_25_awesome}>David Miller</h5>
                              <p className={pageStyle.se_txt_16_work_sans}>Marketing Envato Pvt Ltd.</p>
                              <div className="d-flex starRate">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="#ffc404"
                                    className="bi bi-star-fill mx-1"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <div className={styles.arrowDiv}>
                              <button className={`testimonial-prev ${styles.customPrev}`}>
                                <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                              </button>
                              <button className={`testimonial-next ${styles.customNext}`}>
                                <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className={`d-flex position-relative  py-5 pb-0 pb-md-5  flex-column justify-content-center align-items-center ${styles.mobileHeightOnMobile}  ${styles.shapedBg}`} style={{ width: "100%", overflow: "hidden" }}>
          <div className={`${styles.contactContainer} section py-0 py-lg-5`}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <MainTitle title={"Team of Breathe"} />
            </div>
            <div className="d-block d-lg-flex d-xl-flex gap-5">
              <CardSlider />
            </div>
          </div>
        </div>
        
      </div>
      <ExclusiveDeals />
    </div>
  )
}

export default page;
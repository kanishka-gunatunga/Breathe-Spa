'use client';
import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';



// const teamMembers = [
//   { id: 1, name: "David Miller", position: "Senior Beautician", image: "/teamImg1.png" },
//   { id: 2, name: "Sarah Johnson", position: "Lead Therapist", image: "/teamImg2.png" },
//   { id: 3, name: "Michael Chen", position: "Spa Director", image: "/teamImg3.png" },
//   { id: 4, name: "Emma Wilson", position: "Massage Specialist", image: "/teamImg4.png" },
//   { id: 5, name: "James Brown", position: "Aesthetician", image: "/teamImg5.png" }, 
// ];
const page = () => {
  return (
    <div>
      <div className={styles.aboutPage}>
        {/* banner image part */}
        <div className={styles.bannerImageDiv}>
          <Image className={`m-0 p-0 ${styles.headingImage}`} src="/banner-about.png"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
            alt="" />
        </div>

        {/* section 3  about brehte for desktop and mobile hide*/}
        <div className={`${styles.baseSection}, ${styles.mobileHide}`}>
          <div className={`d-block d-lg-flex justify-content-center gap-md-5 gap-lg-0 px-3 px-md-0 px-lg-0 ${styles.headSection}`}>
            <div className={`col-12 col-lg-5 my-5 my-md-0 my-lg-0 `}>
              <Image className={`img-fluid ${styles.locationImg1}`} src="/about1.png" height={650} width={548} alt="" />
            </div>
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-between about">
              <h3 className={styles.aboutSectionTitle}>About Breathe</h3>
              <p className={styles.sectionDescription}>
                Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
              </p>
              <Button text="BOOK A TREATMENT" href="#" />
            </div>
          </div>
        </div>

        {/* about breathe mobile view desktop hide */}
        <div className={`${styles.baseSection}, ${styles.DesktopHide}`}>
          <div className="px-3 d-flex flex-column justify-content-center">
            <div className={`${styles.mobileSection}`}>
              <h3 className={styles.aboutSectionTitle}>About Breathe</h3>
              <Image className={`img-fluid ${styles.locationImg1}`} src="/about1.png" height={650} width={"100"} alt="" style={{ width: '100%' }} />
              <div className={styles.aboutBreathDescriptionMobile}>
                <p className={styles.sectionDescription}>
                  Lorem ipsum dolor sit amet consectetur. Sed curabitur non adipiscing varius ut ullamcorper elementum duis. Sodales sem ultrices non diam diam rhoncus. Cursus ac odio purus consequat ac consequat tortor euismod viverra. Dignissim integer molestie dictum aliquet est quam. Augue viverra sed ullamcorper amet faucibus ipsum et. Amet vulputate morbi morbi euismod aliquam egestas sem tellus. Quisque et tincidunt tincidunt cras amet nulla vestibulum. Est quisque sed vel pretium nam pharetra. Nunc viverra pretium ultricies in ultrices. Velit orci a interdum odio vitae eu non lorem. Quisque velit pharetra nascetur id sagittis facilisis nam morbi. Egestas at sed sed fermentum ornare. Aenean pharetra amet vivamus nec. Viverra diam ac nec turpis cursus. Fringilla scelerisque malesuada sapien egestas et. Risus mi natoque sed ac varius semper. Nulla laoreet in tortor ac augue. Sit cursus id commodo enim. Nullam semper id porttitor non vitae tincidunt. Lectus in habitasse aliquam sed pellentesque. Ligula lectus dignissim ac consequat eleifend massa quam dictumst. Mi mi tortor aliquam sed ut dolor pellentesque dolor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mx-0 px-0 ${styles.baseSection}, ${styles.mobileHide}`}>
          <div className="position-relative">
            <Image className={styles.ethosBackgorund} src="/Group1000003149(1).png" height={368} width={620} alt="" />
            <div className={`position-absolute ${styles.locationDiv}`}>
              <div className="row d-flex justify-content-center p-5 px-lg-0 gap-5">
                <div className="col-12 col-md-5 col-lg-5 d-flex flex-column justify-content-between">
                  <div className={styles.location}>
                    <h3 className={styles.locationDivTitle}>Why Choose Us</h3>
                    <p className={styles.locationDivP}>
                      Lorem ipsum dolor sit amet consectetur. Ac arcu auctor non imperdiet laoreet morbi tristique metus. Bibendum enim ut non ac aenean malesuada eget lectus. Vitae amet at amet diam. Massa porttitor mi scelerisque praesent auctor pharetra eget ut. Augue elementum consequat lacus sit. Suspendisse ipsum odio eu sagittis semper tincidunt. Sit ultrices egestas arcu odio tristique amet interdum montes. Cras vel sed cursus vulputate viverra mauris. Pellentesque quam ultricies adipiscing quam nunc purus lectus. Vitae amet velit at ut. Adipiscing amet eleifend duis a augue. Maecenas vulputate sed tellus imperdiet dictum imperdiet etiam quis. Blandit consectetur placerat imperdiet in purus amet. Eget posuere ac commodo ultrices tristique dolor turpis interdum semper. Arcu ut ornare placerat dolor scelerisque tincidunt commodo duis egestas. Euismod amet scelerisque nullam purus duis velit. Augue sit aliquet auctor aliquam. Mauris egestas dolor egestas consectetur. Blandit eget egestas mauris sit. Feugiat neque consequat sit lorem mattis enim nibh. Neque odio quis ultrices morbi sit augue ut eget. Bibendum enim proin dui ut in. Ac placerat quisque iaculis rhoncus ut sit. Leo a vulputate purus et.
                    </p>
                  </div>
                  <Button text="EXPLORE OUR SERVICES" href="#" />
                </div>

                <div className="col-12 col-md-5 col-lg-5 d-md-flex d-lg-flex justify-content-end">
                  <Image className={`img-fluid ${styles.locationImg}`} src="/about2.png" height={731} width={640} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mx-0 px-0 ${styles.baseSection}, ${styles.DesktopHide}`}>
          <div className={` ${styles.location}, ${styles.mobileSection}`}>
            <h3 className={styles.locationDivTitle}>Why Choose Us</h3>
            <p className={styles.locationDivP}>
              Lorem ipsum dolor sit amet consectetur. Ac arcu auctor non imperdiet laoreet morbi tristique metus. Bibendum enim ut non ac aenean malesuada eget lectus. Vitae amet at amet diam. Massa porttitor mi scelerisque praesent auctor pharetra eget ut. Augue elementum consequat lacus sit. Suspendisse ipsum odio eu sagittis semper tincidunt. Sit ultrices egestas arcu odio tristique amet interdum montes. Cras vel sed cursus vulputate viverra mauris. Pellentesque quam ultricies adipiscing quam nunc purus lectus. Vitae amet velit at ut. Adipiscing amet eleifend duis a augue. Maecenas vulputate sed tellus imperdiet dictum imperdiet etiam quis. Blandit consectetur placerat imperdiet in purus amet. Eget posuere ac commodo ultrices tristique dolor turpis interdum semper. Arcu ut ornare placerat dolor scelerisque tincidunt commodo duis egestas. Euismod amet scelerisque nullam purus duis velit. Augue sit aliquet auctor aliquam. Mauris egestas dolor egestas consectetur. Blandit eget egestas mauris sit. Feugiat neque consequat sit lorem mattis enim nibh. Neque odio quis ultrices morbi sit augue ut eget. Bibendum enim proin dui ut in. Ac placerat quisque iaculis rhoncus ut sit. Leo a vulputate purus et.
            </p>
            <Image className={`img-fluid ${styles.locationImg} ${styles.choosUsImg}`} src="/about2.png" height={731} width={640} alt="" />
            <div className="d-flex justify-content-center">
              <Button text="Discover Our Location" href="#" />
            </div>
          </div>
        </div>

        {/* Testimonials Swiper */}
        <div className={styles.baseSection}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h3 className={styles.aboutSectionTitle}>Testimonials</h3>
            <div className="col-12 col-md-12 col-lg-8 position-relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.testimonial-next',
                  prevEl: '.testimonial-prev',
                }}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={30}
                className={styles.testimonialSwiper}
              >
                {[1, 2, 3].map((testimonial) => (
                  <SwiperSlide key={testimonial}>
                    <div className={`card ${styles.testimonialCard}`}>
                      <div className="card-body">
                        <div className="d-block d-md-flex d-lg-flex gap-5">
                          <div>
                            <Image 
                              className={styles.testimonialPic} 
                              src="/testimonialPic.png" 
                              alt="Testimonial" 
                              width={289} 
                              height={343} 
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-between pt-5">
                            <p className={styles.TestimonialCardText}>
                              &quot;Lorem ipsum dolor sit amet consectetur. Nisl in dictum viverra in sagittis tincidunt.&quot;
                            </p>
                            <div>
                              <h5 className={styles.testimonialCardName}>David Miller</h5>
                              <p className={styles.testimonialCardJob}>Marketing Envato Pvt Ltd.</p>
                              <div className="d-flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    fill="yellow" 
                                    className="bi bi-star-fill mx-1" 
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

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

        {/* Team Swiper */}
        <div className={`mx-0 px-0 ${styles.baseSection}`}>
          <div className="position-relative">
            <Image className={styles.ethosBackgorund} src="/Group1000003149(1).png" height={368} width={620} alt="Team background" />
            <div className={`position-absolute col-12 ${styles.breatheTeamDiv}`}>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className={styles.aboutSectionTitle}>Team of Breathe</h3>
              </div>

              <div className="position-relative mt-5">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.team-next',
                    prevEl: '.team-prev',
                  }}
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    576: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 30 }
                  }}
                  className={styles.teamSwiper}
                >
                  {[1, 2, 3, 4].map((member) => (
                    <SwiperSlide key={member}>
                      <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <div className={`card ${styles.teamCard}`}>
                          <div className="d-flex flex-column position-relative" style={{ aspectRatio: '1/1' }}>
                            <div className={styles.whiteBack}></div>
                            <div className={`position-absolute ${styles.teamCardImageDiv}`}>
                              <Image 
                                src="/teamImg.png" 
                                fill
                                alt={`Team member ${member}`}
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="py-4 d-flex flex-column justify-content-center text-center">
                          <h5 className={styles.testimonialCardName}>Team Member {member}</h5>
                          <p className={styles.testimonialCardJob}>Position</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>

                <div className={`d-flex justify-content-center gap-3 mt-4 ${styles.teamNavigation}`}>
                  <button className={`team-prev ${styles.teamPrev}`}>
                    <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                  </button>
                  <button className={`team-next ${styles.teamNext}`}>
                    <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExclusiveDeals />
    </div>
  )
}

export default page;
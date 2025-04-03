"use client";

import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import seStyles from "@/styles/services.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import style from '@/styles/services.module.css'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from "react";
import { getEthosData } from "@/sanity/libs/api";
import { Ethos } from "@/sanity/types";
import { urlFor } from "@/sanity/libs/sanity";

export default function Home() {
  const [ethos, setEthos] = useState<Ethos[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ethosData = await getEthosData();
        setEthos(ethosData);
        console.log(ethosData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!ethos) return <p>Loading...</p>;

  return (

    <>
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
          <SwiperSlide>
            <Image
              src={'/Vector12.png'}
              alt='home hero image'
              width={1920}
              height={1080}
              style={{ width: '100vw', height: 'auto', objectFit: 'cover', objectPosition: 'bottom' }}
            />

          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={'/contact_hero.png'}
              alt='home hero image'
              width={1920}
              height={1080}
              style={{ width: '100vw', height: 'auto', objectFit: 'cover', objectPosition: 'bottom' }}
            />

          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/blog_banner.png'}
              alt='home hero image'
              width={1920}
              height={1080}
              style={{ width: '100vw', height: 'auto', objectFit: 'cover', objectPosition: 'bottom' }}
            />

          </SwiperSlide>

        </Swiper>
        <div className="swiper-pagination position-absolute"></div>
      </div>
      <div className={`${styles.contactContainer} section pb-0 pt-5`}>
        <div className="d-block d-md-block d-lg-flex justify-content-center gap-5">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
            <div>
              <h1 className={seStyles.se_txt_50_coe}>
                Bespoke Wellness for Relaxation, Rejuvenation, & Personalized Care
              </h1>
              <p className={seStyles.se_txt_14_work_sans}>
                At Breathe Day Spa’s calm and elegant space, we help you look, feel, and be your best. We provide luxurious massages, bespoke manicures and pedicures, and HydraFacial treatments. Our therapists are internationally trained and certified, and we are obsessed with hygiene.
              </p>
              <Image className="img-fluid" src="/Rectangle4422.png" height={400} width={655} alt="" />
            </div>

            <div className="mb-md-4 pt-4">
              <Button href="#" text="Book a Treatment" />
            </div>
          </div>


          <div className="col-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`card ${styles.card1}`}>
              <div className="card-body">
                {/* main topic our services */}
                <div className="row mb-4">
                  <h3 className={seStyles.se_txt_25_awesome}>OUR SERVICES</h3>
                </div>


                {/* treatments */}
                <div className="row px-2">
                  <div className={`${seStyles.line_border} mt-5 px-0`}>
                    <h3 className={seStyles.se_txt_18}>TREATMENTS</h3>
                  </div>

                  <div className="row py-3 px-0">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Massages</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          Easing you into relaxation, with multiple tissue techniques, aromatherapy, body scrubs and wraps.
                        </p>
                      </div>
                    </div>




                    <div className="d-flex  py-3">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Nail Treatments</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          Your concierce for clean, hygenic, and glossy nails. Mani’s, Pedi’s and more.
                        </p>
                      </div>
                    </div>



                    <div className="d-flex ">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Facial Treatments</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          The HydraFacial Glow is a signature Breathe Day Spa experience
                        </p>
                      </div>
                    </div>




                    <div className="d-flex py-3">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Gift Vouchers</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          Stylish gift cards to share the benefits of wellness, relaxation, and pampering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Hours */}
                <div className="row px-2">
                  <div className={`${seStyles.line_border} mt-5 px-0`}>
                    <h3 className={seStyles.se_txt_18}>HOURS</h3>
                  </div>

                  <div className="row  py-3 px-0 w-100">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Tuesday to Saturday</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          9.00am - 8.00pm
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="row  pb-3 px-0 w-100">
                    <div className="d-flex ">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Monday</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* contact */}
                <div className="row px-2">
                  <div className={`${seStyles.line_border}  mt-5 px-0`}>
                    <h3 className={seStyles.se_txt_18}>CONTACT</h3>
                  </div>

                  <div className="row  py-3 px-0">
                    <div className="d-flex">
                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Phone</p>
                      </div>

                      <div className={`col-6 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          +94  77 244  4888
                        </p>
                      </div>
                    </div>
                  </div>



                  <div className="row  px-0">
                    <div className="d-flex">
                      <div className={`col-6 border-0 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_18}>Email</p>
                      </div>

                      <div className={`col-6  border-0 ${styles.bottomBorder}`}>
                        <p className={seStyles.se_txt_12_work_sans}>
                          shout@breathe-spa.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={`${styles.privacyPRow} pt-3 px-0`}>
                  <p className={`${seStyles.se_txt_10_work_sans} mb-1`}>
                    For Same Day appointment please call us so we can respond to you quickly. Please read our
                  </p>
                  <p className={`${seStyles.se_txt_10_work_sans}`}>
                    <a href="">booking policy </a>
                    below prior to making an appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DescriptionSection title={ethos[0]?.title || "Our Ethos"} description={ethos[0]?.title || "We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience."} />

      <div className={`section py-3 ${styles.OnDesktopHideExtra} ${styles.contactContainer}`}>
        {ethos[0]?.ethosArray.map((item, index) => (
          <div key={index} className="d-block d-md-block d-lg-flex gap-5 mb-5">
            {index % 2 === 0 ? (
              <>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">

                  {item.mainImage && (
                    <Image
                      className={`img-fluid ${styles.leftBoxShadow}`}
                      src={urlFor(item?.mainImage).url() || "/banner-about.png"}
                      height={368}
                      width={624}
                      alt={item.name}
                    />
                  )}

                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
                  <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                  <p className={seStyles.se_txt_16_work_sans_dark} style={{ textAlign: "justify" }}>
                    {item.description}
                  </p>
                  <Button text={item.button} href={item.link || "/contact"} />
                </div>
              </>
            ) : (
              <>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
                  <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                  <p className={seStyles.se_txt_16_work_sans_dark} style={{ textAlign: "justify" }}>
                    {item.description}
                  </p>
                  <Button text={item.button} href={item.link || "/contact"} />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  {item.mainImage && (
                    <Image
                      className={`img-fluid ${styles.rightBoxShadow}`}
                      src={urlFor(item?.mainImage).url() || "/banner-about.png"}
                      height={368}
                      width={624}
                      alt={item.name}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className={`container section py-3 ${styles.OnmobileHideExtra}`}>
        {ethos[0]?.ethosArray.map((item, index) => (
            <div key={index} className="d-block d-md-block d-lg-flex gap-5 mb-5">
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">

                <div className="row">
                  <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                  <p className={seStyles.se_txt_16_work_sans_dark}>
                    {item.description}
                  </p>
                </div>
                <div>
                  {item.mainImage && (
                    <Image
                      className={`img-fluid ${styles.leftBoxShadow}`}
                      src={urlFor(item?.mainImage).url() || "/banner-about.png"}
                      height={368}
                      width={624}
                      alt={item.name}
                    />
                  )}
                </div>

              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0">
                <Button text={item.button} href={item.link || "/contact"} />
              </div>

            </div>
        ))}
      </div>



      <YellowBackSection
        title="Conveniently Located in Central Colombo"
        description="Breathe is within a 15-minute drive from all prominent Hotels in the heart of Colombo. Our neighborhood is in Cinnamon Gardens –  where the old-world charm of tree-lined streets, parks, and large gardens of beautifully preserved colonial homes – is a repository of heritage and beauty within the rapidly evolving urban dynamics of Colombo. We choose a beautiful old bungalow down a leafy, residential cul-de-sac. It is one of the most tranquil quarters of Colombo and ideally suited for Breathe’s bespoke and private experience style. The Spa blends in to the neighborhood with minimal external signage – partly to preserve the serene, residential ambiance, but also to enhance its ‘hidden refuge in Cinnamon Gardens’ vibe."
        image="/interior.png"
        buttonText="Discover Our Location"
        buttonLink={""} />


      <div className={`position-relative mt-0 mt-lg-4 ${styles.contactContainer} section`}>
        <div className={`${styles.articleDiv}`}>
          <div className="d-md-flex d-lg-flex d-block justify-content-between">
            <div className="col-12 col-md-8 col-lg-8">
              <div>
                <h3 className={`${styles.locationDivTitle} text-center text-md-start`}>Recent Articles</h3>
                <p className={`mt-0 ${styles.locationDivP} text-center text-md-start`}>
                  Here’s what we&apos;ve been up to recently.
                </p>
              </div>
            </div>


            <div className={`col-12 col-md-4 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
              <Button text="View All" href="#" />
            </div>
          </div>


          <div className="d-md-flex d-lg-flex d-block justify-content-between">
            <div className={`card ${styles.articleCard1}`}>
              <div className="card-body p-0 p-md-2 d-flex align-items-end">
                <Image className={`img-fluid `} src="/articleCard1.png" height={368} width={624} alt="" />
                <p className={seStyles.se_26_card_txt}>
                  Scarlet Spy tries a Copper Room treatment
                </p>
              </div>
            </div>


            <div className={`card ${styles.articleCard2}`}>
              <div className="card-body p-0 p-md-2 d-flex align-items-end">
                <Image className={`img-fluid `} src="/articleCard2.png" height={368} width={624} alt="" />
                <p className={seStyles.se_26_card_txt}>
                  Scarlet Spy tries a Copper Room treatment
                </p>
              </div>
            </div>


            <div className={`card ${styles.articleCard3}`}>
              <div className="card-body p-0 p-md-2 d-flex align-items-end">
                <Image className={`img-fluid `} src="/articleCard3.png" height={368} width={624} alt="" />
                <p className={seStyles.se_26_card_txt}>
                  Scarlet Spy tries a Copper Room treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExclusiveDeals />

    </>
  );
}

// import styles from "@/styles/page.module.css";
// import pageStyle from '@/styles/services.module.css'
//
// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
// import style from '@/styles/services.module.css'
// import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
// import Paragraph from "@/components/servicesComponents/Paragraph";
// import MainTitle from "@/components/servicesComponents/MainTitle";
// // import { getAboutMainPageData, getTeamData, getTestimonialData } from "@/sanity/libs/api";
// import {getAboutMainPageData, getMetadata, getTestimonialData} from "@/sanity/libs/api";
// import {urlFor} from "@/sanity/libs/sanity";
// import TestimonialSlider from "@/components/ReusableComponents/SliderTestimonials";
// import Link from "next/link";
// import {Metadata} from "next";
//
//
// const AboutPage = async () => {
//     const about = await getAboutMainPageData();
//     const testimonials = await getTestimonialData();
//     // const team = await getTeamData();
//
//     return (
//         <div>
//             <div className={styles.aboutPage}>
//                 <div className={`d-flex ${style.imageContainer}`}>
//                     {about[0].AboutsHeroImage && (
//                         <Image src={urlFor(about[0]?.AboutsHeroImage).url() || "/banner-about.png"}
//                                alt='services hero image' width={1920} height={1080}
//                                style={{width: "100vw", height: "auto", objectFit: 'cover'}}/>
//                     )}
//
//                 </div>
//
//                 <div className={` ${styles.contactContainer} section`}
//                      style={{paddingTop: '50px !important', paddingBottom: "0px !important"}}>
//                     <div className={`d-block d-lg-flex justify-content-between  ${styles.headSection} `}>
//                         <div className="col-12 col-lg-6 my-5 my-md-0 my-lg-0 pe-lg-5 position-relative ">
//                             <div className="position-relative"
//                                  style={{paddingTop: '20px !important', paddingLeft: "20px !important"}}>
//                                 <div className="d-flex imgShapeContainer">
//                                     <div className="bgShapeImage"></div>
//                                     <div className="imageWrapper" style={{width: "100%", height: "100%"}}>
//                                         {about[0].sectionOneImage && (
//                                             <Image className={`${pageStyle.imgHeight}`}
//                                                    src={urlFor(about[0]?.sectionOneImage).url() || "/about1.png"}
//                                                    height={650} width={548} alt=""/>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div
//                             className={`col-12 col-lg-6 d-flex flex-column pt-4 pt-lg-0  ps-lg-2 about ${styles.aboutBreatheContainer} justify-content-between`}>
//                             <div className="margin_bottom_150">
//                                 <MainTitle title={about[0]?.sectionOneTitle}/>
//                                 <Paragraph text={about[0]?.sectionOneDescription}/>
//                             </div>
//                             <Link href={about[0]?.sectionOneButtonLink || "/contact#contactForm"}>
//                                 <button className={`${pageStyle.darkButton}`} style={{
//                                     fontSize: "17px !important",
//                                     border: "none"
//                                 }}>{about[0]?.sectionOneButton}</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//
//                 {about[0].sectionTwoImage && (
//                     <YellowBackSection
//                         title={about[0]?.secTwoTitle}
//                         description={about[0]?.sectionTwoDescription}
//                         image={urlFor(about[0]?.sectionTwoImage).url() || "/about2.png"}
//                         buttonText={about[0]?.sectionTwoButton}
//                         buttonLink={about[0]?.sectionTwoButtonLink || "/services#serviceSection"}
//                     />
//                 )}
//
//
//                 <div className={`${styles.baseSection}`}
//                      style={{marginTop: "38px !important", marginBottom: "50px !important"}}>
//                     <div className="d-flex flex-column align-items-center justify-content-center">
//                         <div className="mb-5">
//                             <MainTitle title={"Testimonials"}/>
//                         </div>
//                         <TestimonialSlider testimonials={testimonials[0]?.testimonialsArray || []}/>
//                         {/* <div className="col-12 col-md-12 col-lg-8 position-relative mb-5">
//               <Swiper
//                 modules={[Navigation, Pagination]}
//                 navigation={{
//                   nextEl: '.testimonial-next',
//                   prevEl: '.testimonial-prev',
//                 }}
//                 spaceBetween={30}
//                 className={styles.testimonialSwiper}
//               >
//                 {testimonials[0]?.testimonialsArray.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <div className={`card ${styles.testimonialCard}`}>
//                       <div className="card-body p-0 p-lg-2">
//                         <div className="d-block d-md-flex d-lg-flex gap-5">
//                           <div>
//                             {testimonial.mainImage && (
//                               <Image
//                                 className={`${styles.testimonialPic} rounded`}
//                                 src={urlFor(testimonial?.mainImage).url() || "/testimonialPic.png"}
//                                 alt="Testimonial"
//                                 width={289}
//                                 height={343}
//                               />
//                             )}
//
//
//                           </div>
//                           <div className="d-flex flex-column justify-content-between pt-5">
//                             <p className={`${pageStyle.se_txt_20_work_sans} text-start text-md-start`}>
//                               &quot;{testimonial.description}&quot;
//                             </p>
//                             <div>
//                               <h5 className={pageStyle.se_txt_25_awesome}>{testimonial.name}</h5>
//                               <p className={pageStyle.se_txt_16_work_sans}>{testimonial.position}</p>
//                               <div className="d-flex starRate">
//                                 {[...Array(5)].map((_, i) => (
//                                   <svg
//                                     key={i}
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="26"
//                                     height="26"
//                                     fill={i < Number(testimonial.rate) ? "#ffc404" : "#d3d3d3"}
//                                     className="bi bi-star-fill mx-1"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                                   </svg>
//                                 ))}
//                               </div>
//                             </div>
//                             <div className={styles.arrowDiv}>
//                               <button className={`testimonial-prev ${styles.customPrev}`}>
//                                 <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
//                                   <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
//                                 </svg>
//                               </button>
//                               <button className={`testimonial-next ${styles.customNext}`}>
//                                 <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
//                                   <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//                                 </svg>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div> */}
//                     </div>
//                 </div>
//
//                 {/*<div className={`d-flex position-relative  py-5 pb-0 pb-md-5 mb-5  flex-column justify-content-center align-items-center ${styles.mobileHeightOnMobile}  ${styles.shapedBgTeam}`} style={{ width: "100%", overflow: "hidden" }}>*/}
//                 {/*  <div className={`${styles.contactContainer} section py-0 py-lg-5`}>*/}
//                 {/*    <div className="d-flex flex-column align-items-center justify-content-center">*/}
//                 {/*      <MainTitle title={team?.[0]?.title || "Team of Breathe"} />*/}
//                 {/*    </div>*/}
//                 {/*    <div className="d-block justify-content-center d-lg-flex d-xl-flex gap-5">*/}
//                 {/*      <CardSlider team={team?.[0]?.teamArray || []} />*/}
//                 {/*    </div>*/}
//                 {/*  </div>*/}
//                 {/*</div>*/}
//
//             </div>
//             <ExclusiveDeals/>
//         </div>
//     )
// }
//
// export default AboutPage;
//
//
// export async function generateMetadata(): Promise<Metadata> {
//     const mdata = await getMetadata("about");
//
//     return {
//         title: mdata?.title || "Breathe Spa - About",
//         description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
//         keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
//         openGraph: {
//             title: mdata?.ogTitle || mdata?.title || "Breathe Spa - About",
//             description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
//             images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
//             url: mdata?.canonicalUrl || "https://yourdomain.com/about-breath",
//             type: "website",
//         },
//         alternates: {
//             canonical: mdata?.canonicalUrl || "https://yourdomain.com/about-breath",
//         },
//     };
// }


import styles from "@/styles/page.module.css";
import pageStyle from '@/styles/services.module.css'

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import style from '@/styles/services.module.css'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
import Paragraph from "@/components/servicesComponents/Paragraph";
import MainTitle from "@/components/servicesComponents/MainTitle";
// import { getAboutMainPageData, getTeamData, getTestimonialData } from "@/sanity/libs/api";
import {getAboutData, getMetadata} from "@/sanity/libs/api";
import {urlFor} from "@/sanity/libs/sanity";
import TestimonialSlider from "@/components/ReusableComponents/SliderTestimonials";
import Link from "next/link";
import {Metadata} from "next";


const AboutPage = async () => {
    const about = await getAboutData();
    // const testimonials = await getTestimonialData();
    // const team = await getTeamData();

    return (
        <div>
            <div className={styles.aboutPage}>
                <div className={`d-flex ${style.imageContainer}`}>
                    {about.heroImage && (
                        <Image src={urlFor(about.heroImage).url() || "/banner-about.png"}
                               alt='services hero image' width={1920} height={1080}
                               style={{width: "100vw", height: "auto", objectFit: 'cover'}}/>
                    )}

                </div>

                <div className={` ${styles.contactContainer} section`}
                     style={{paddingTop: '50px !important', paddingBottom: "0px !important"}}>
                    <div className={`d-block d-lg-flex justify-content-between  ${styles.headSection} `}>
                        <div className="col-12 col-lg-6 my-5 my-md-0 my-lg-0 pe-lg-5 position-relative ">
                            <div className="position-relative"
                                 style={{paddingTop: '20px !important', paddingLeft: "20px !important"}}>
                                <div className="d-flex imgShapeContainer">
                                    <div className="bgShapeImage"></div>
                                    <div className="imageWrapper" style={{width: "100%", height: "100%"}}>
                                        {about.sectionOne.sectionOneImage && (
                                            <Image className={`${pageStyle.imgHeight}`}
                                                   src={urlFor(about.sectionOne.sectionOneImage).url() || "/about1.png"}
                                                   height={650} width={548} alt=""/>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`col-12 col-lg-6 d-flex flex-column pt-4 pt-lg-0  ps-lg-2 about ${styles.aboutBreatheContainer} justify-content-between`}>
                            <div className="margin_bottom_150">
                                <MainTitle title={about.sectionOne.sectionOneTitle}/>
                                <Paragraph text={about.sectionOne.sectionOneDescription}/>
                            </div>
                            <Link href={about.sectionOne.sectionOneButtonLink || '/contact#contactForm'}>
                                <button className={`${pageStyle.darkButton}`} style={{
                                    fontSize: "17px !important",
                                    border: "none"
                                }}>{about.sectionOne.sectionOneButton}</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {about.sectionTwo.sectionTwoImage && (
                    <YellowBackSection
                        title={about.sectionTwo.secTwoTitle}
                        description={about.sectionTwo.sectionTwoDescription}
                        image={urlFor(about.sectionTwo.sectionTwoImage).url() || "/about2.png"}
                        buttonText={about.sectionTwo.sectionTwoButton}
                        buttonLink={about.sectionTwo.sectionTwoButtonLink || '/services#serviceSection'}
                    />
                )}


                <div className={`${styles.baseSection}`}
                     style={{marginTop: "38px !important", marginBottom: "50px !important"}}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-5">
                            <MainTitle title={about.testimonials.title || "Testimonials"}/>
                        </div>
                        <TestimonialSlider testimonials={about.testimonials.testimonialsArray || []}/>
                    </div>
                </div>
            </div>
            <ExclusiveDeals
                title={about.exclusiveDeals.title}
                description={about.exclusiveDeals.description}
                buttonText={about.exclusiveDeals.buttonTxt}
                buttonLink={about.exclusiveDeals.link}
            />
        </div>
    )
}

export default AboutPage;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("about");

    return {
        title: mdata?.title || "Breathe Spa - About",
        description: mdata?.description || 'Learn about Breathe Spa, our mission, and our commitment to wellness.',
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || 'Breathe Spa - About Us',
            description: mdata?.ogDescription || mdata?.description || 'Discover the story behind Breathe Spa and our dedication to relaxation.',
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/about-breathe",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/about-breathe",
        },
    };
}


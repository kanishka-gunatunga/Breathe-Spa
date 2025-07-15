// import Button from "@/components/ReusableComponents/Button";
// import styles from "@/styles/page.module.css";
// import seStyles from "@/styles/services.module.css";
// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
// import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
// import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
// import {
//     getBlogData,
//     getEthosData,
//     getHomeData,
//     getMetadata,
//     getServiceCategories,
//     getSiteData
// } from "@/sanity/libs/api";
// import { urlFor } from "@/sanity/libs/sanity";
// import Link from "next/link";
// import HeroSlider from "@/components/ReusableComponents/HeroSlider";
// import pageStyle from '@/styles/services.module.css'
// import {Metadata} from "next";
//
//
// export default async function Home() {
//
//     const ethos = await getEthosData();
//     const home = await getHomeData();
//     const site = await getSiteData();
//     const blogs = await getBlogData();
//     const service = await getServiceCategories()
//
//     console.log("home[0]?.heroArray : ", home[0]?.heroArray)
//
//     const serviceOrder = [
//         service.find(item => item.slug.current === 'body'),
//         service.find(item => item.slug.current === 'nail-treatment'),
//         service.find(item => item.slug.current === 'facial'),
//         service.find(item => item.slug.current === 'add-ons'),
//     ].filter(Boolean);
//
//     return (
//
//         <>
//             <HeroSlider home={home || []} />
//             <div className={`${styles.contactContainer} section pb-5 pt-5`}>
//                 <div className="d-block d-md-block d-lg-flex justify-content-center gap-5">
//                     <div
//                         className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
//                         <div className="margin_bottom_150">
//                             <h1 className={`${seStyles.se_txt_50_coe} mb-3 mb-lg-3`}>
//                                 {home[0]?.sectionOneTitle}
//                             </h1>
//                             <p className={`${seStyles.se_txt_14_work_sans} mb-3 `}>
//                                 {home[0]?.sectionOneDescription}
//                             </p>
//                             {home[0]?.sectionOneImage && (
//                                 <Image className="img-fluid mt-3"
//                                        src={urlFor(home[0]?.sectionOneImage).url() || "/Vector12.png"} height={400}
//                                        width={655} alt="" />
//                             )}
//                         </div>
//                         <div className="mb-md-4">
//                             {/* <Button href={home[0]?.sectionOneButtonLink} text={home[0]?.sectionOneButton} /> */}
//                             <Link href={home[0]?.sectionOneButtonLink}>
//                                 <button className={`${pageStyle.darkButton}`} style={{ fontSize: "15px !important", border: "none" }} >{home[0]?.sectionOneButton}</button>
//                             </Link>
//                         </div>
//                     </div>
//
//
//                     <div className="col-12 col-md-12 col-lg-6 col-xl-6">
//                         <div className={`card ${styles.card1}`}>
//                             <div className="card-body py-3">
//                                 {/* main topic our services */}
//                                 <div className="row mb-0 mx-0 mt-2">
//                                     <h3 className={`${seStyles.se_txt_25_awesome_300}`} style={{ marginBottom: "20px" }}>OUR SERVICES</h3>
//                                 </div>
//
//
//                                 {/* treatments */}
//                                 <div className="row px-2 mx-0">
//                                     <div className={`${seStyles.line_border} mt-4 px-0`}>
//                                         <h3 className={`${seStyles.se_txt_18}`}>TREATMENTS</h3>
//                                     </div>
//
//                                     <div className="row py-3 px-0 mx-0">
//                                         {serviceOrder?.map((item, index) => item ? (
//                                             <Link key={index} href={`/services#${item.slug.current}`}
//                                                   className="linkUnderlineNone px-0">
//                                                 <div className="d-flex pt-0">
//
//                                                     <div className={`col-6 ${styles.bottomBorder} `}>
//                                                         <p className={`${seStyles.se_txt_16} scaleTxt mb-0`}>{item.title}</p>
//                                                     </div>
//
//                                                     <div className={`col-6 py-1 ${styles.bottomBorder}`}>
//                                                         <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
//                                                             {item.homeDescription}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         ) : null)}
//                                         <div className="d-flex pt-0 px-0">
//                                             <div className={`col-6 ${styles.bottomBorder}`}>
//                                                 <p className={`${seStyles.se_txt_16} mb-0`}>Gift Vouchers</p>
//                                             </div>
//
//                                             <div className={`col-6 py-1 ${styles.bottomBorder}`}>
//                                                 <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
//                                                     Stylish gift cards to share the benefits of wellness, relaxation,
//                                                     and pampering
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//
//
//                                 {/* Hours */}
//                                 <div className="row px-2 mx-0">
//                                     <div className={`${seStyles.line_border} mt-4 px-0`}>
//                                         <h3 className={seStyles.se_txt_18}>HOURS</h3>
//                                     </div>
//                                     {site[0]?.openDays.map((item, index) => (
//                                         <div key={index} className="row mx-0 px-0 w-100">
//                                             <div className="d-flex w-100 px-0">
//                                                 <div className={`col-6 py-2 ${styles.bottomBorder}`}>
//                                                     <p className={`${seStyles.se_txt_16} mb-0`}>{item.day}</p>
//                                                 </div>
//
//                                                 <div className={`col-6 ${styles.bottomBorder} py-2`}>
//                                                     <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
//                                                         {item.time}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//
//
//                                 {/* contact */}
//                                 <div className="row mx-0 px-2">
//                                     <div className={`${seStyles.line_border}   mt-4 pt-3 px-0`}>
//                                         <h3 className={`${seStyles.se_txt_18}`}>CONTACT</h3>
//                                     </div>
//
//                                     <div className="row mx-0 px-0">
//                                         <div className="d-flex px-0">
//                                             <div className={`col-6 ${styles.bottomBorder} py-2`}>
//                                                 <p className={`${seStyles.se_txt_16} mb-0`}>Phone</p>
//                                             </div>
//
//                                             <div className={`col-6 ${styles.bottomBorder} py-2`}>
//                                                 {site[0]?.phoneNumberArray.map((item, index) => (
//                                                     <p key={index} className={`${seStyles.se_txt_12_work_sans} mb-0`}>
//                                                         {item.number}
//                                                     </p>
//                                                 ))}
//
//                                             </div>
//                                         </div>
//                                     </div>
//
//
//                                     <div className="row  mx-0 px-0">
//                                         <div className="d-flex px-0">
//                                             <div className={`col-6 pt-2 border-0 ${styles.bottomBorder}`}>
//                                                 <p className={`${seStyles.se_txt_16} mb-0`}>Email</p>
//                                             </div>
//
//                                             <div className={`col-6 pt-2 border-0 ${styles.bottomBorder}`}>
//                                                 {site[0]?.emailArray.map((item, index) => (
//                                                     <p key={index} className={`${seStyles.se_txt_12_work_sans} mb-0`}>
//                                                         {item.email}
//                                                     </p>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="row mx-0 px-2">
//                                     <div className={`${styles.privacyPRow} pt-1 px-0`}>
//                                         <p className={`${seStyles.se_txt_10_work_sans} mb-1`}>
//                                             For Same Day appointment please call us so we can respond to you quickly. Please
//                                             read our
//                                         </p>
//                                         <p className={`${seStyles.se_txt_10_work_sans}`}>
//                                             <a href="/terms">booking policy </a>
//                                             below prior to making an appointment.
//                                         </p>
//                                     </div>
//                                 </div>
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <DescriptionSection title={ethos[0]?.title || "Our Ethos"}
//                                 description={ethos[0]?.description || "We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience."} />
//
//             <div className={`section py-3 ${styles.OnDesktopHideExtra} ${styles.contactContainer}`}>
//                 {ethos[0]?.ethosArray.map((item, index) => (
//                     <div key={index} className="d-block d-md-block d-lg-flex my-5">
//                         {index % 2 === 0 ? (
//                             <>
//                                 <div className="col-12 col-md-12 col-lg-6 col-xl-6 pe-lg-4">
//
//                                     <div style={{ paddingLeft: "30px", paddingTop: "26px" }}>
//                                         {item.mainImage && (
//                                             <Image
//                                                 className={`img-fluid ${styles.leftBoxShadow}`}
//                                                 src={urlFor(item?.mainImage).url() || "/banner-about.png"}
//                                                 height={368}
//                                                 width={624}
//                                                 alt={item.name}
//                                             />
//                                         )}
//                                     </div>
//
//                                 </div>
//                                 <div
//                                     className="col-12 col-md-12 col-lg-6 ps-lg-4 col-xl-6 d-flex flex-column justify-content-start">
//                                     <div className="margin_bottom_150">
//                                         <h3 className={seStyles.se_txt_40} style={{ fontFamily: "Coefficient DEMO, sans-serif;" }}>{item.name}</h3>
//                                         <p className={`${seStyles.se_txt_16_work_sans_dark} mb-0`} style={{ textAlign: "justify" }}>
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                     <Link href={item.link || "/contact"}>
//                                         <button className={`${pageStyle.darkButton}`} style={{ fontSize: "15px !important", border: "none" }} >{item.button}</button>
//                                     </Link>
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className="col-12 col-md-12 col-lg-6 pe-lg-4 col-xl-6 my-4 d-flex flex-column justify-content-start">
//                                     <div className="margin_bottom_150">
//                                         <h3 className={seStyles.se_txt_40} style={{ fontFamily: "Coefficient DEMO, sans-serif;" }}>{item.name}</h3>
//                                         <p className={`${seStyles.se_txt_16_work_sans_dark} mb-0`} style={{ textAlign: "justify" }}>
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                     <Link href={item.link || "/contact"}>
//                                         <button className={`${pageStyle.darkButton}`} style={{ fontSize: "15px !important", border: "none" }} >{item.button}</button>
//                                     </Link>
//                                 </div>
//                                 <div className="col-12 col-md-12 ps-lg-4 col-lg-6 col-xl-6 my-4">
//                                     <div style={{ paddingRight: "30px", paddingTop: "26px" }}>
//                                         {item.mainImage && (
//                                             <Image
//                                                 className={`img-fluid ${styles.rightBoxShadow}`}
//                                                 src={urlFor(item?.mainImage).url() || "/banner-about.png"}
//                                                 height={368}
//                                                 width={624}
//                                                 alt={item.name}
//                                             />
//                                         )}
//                                     </div>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//
//             <div className={`container section py-3 ${styles.OnmobileHideExtra}`}>
//                 {ethos[0]?.ethosArray.map((item, index) => (
//                     <div key={index} className="d-block d-md-block d-lg-flex  mb-5">
//                         {index % 2 === 0 ? (
//                             <>
//                                 <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
//                                     <div className="row">
//                                         <h3 className={seStyles.se_txt_40}>{item.name}</h3>
//                                         <p className={seStyles.se_txt_16_work_sans_dark}>
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                     <div className="margin_bottom_150">
//                                         <div style={{ paddingLeft: "30px", paddingTop: "26px" }}>
//                                             {item.mainImage && (
//                                                 <Image
//                                                     className={`img-fluid ${styles.leftBoxShadow}`}
//                                                     src={urlFor(item?.mainImage).url() || "/banner-about.png"}
//                                                     height={368}
//                                                     width={624}
//                                                     alt={item.name}
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0">
//                                     <Button text={item.button} href={item.link || "/contact"} />
//                                 </div></>
//                         ) : (
//                             <>
//                                 <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
//                                     <div className="row">
//                                         <h3 className={seStyles.se_txt_40}>{item.name}</h3>
//                                         <p className={seStyles.se_txt_16_work_sans_dark}>
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                     <div className="margin_bottom_150">
//                                         <div style={{ paddingRight: "30px", paddingTop: "26px" }}>
//                                             {item.mainImage && (
//                                                 <Image
//                                                     className={`img-fluid ${styles.rightBoxShadow} ${styles.mobileRadius}`}
//                                                     src={urlFor(item?.mainImage).url() || "/banner-about.png"}
//                                                     height={368}
//                                                     width={624}
//                                                     alt={item.name}
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0">
//                                     <Button text={item.button} href={item.link || "/contact"} />
//                                 </div></>
//                         )}
//
//
//                     </div>
//                 ))}
//             </div>
//
//             {home[0]?.sectionTwoImage && (
//                 <YellowBackSection
//                     title={home[0]?.secTwoTitle}
//                     description={home[0]?.sectionTwoDescription}
//                     image={urlFor(home[0]?.sectionTwoImage).url() || "/interior.png"}
//                     buttonText={home[0]?.sectionTwoButton}
//                     buttonLink={home[0]?.sectionTwoButtonLink} />
//             )}
//
//
//             <div className={`position-relative mt-0 mt-lg-4 ${styles.contactContainer} ${styles.article_v1} section mt-0`} style={{ marginTop: "0px !important", paddingTop: "58px !important" }}>
//                 <div className={`${styles.articleDiv}`}>
//                     <div className="d-flex flex-column d-block justify-content-between">
//                         <div className="d-flex flex-row justify-content-center justify-content-md-between align-items-center">
//                             <div className="">
//                                 <h3 className={`${styles.locationDivTitle} text-center text-md-start`}>Recent
//                                     Articles</h3>
//
//                             </div>
//                             <div
//                                 className={` d-none d-md-flex justify-content-center  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
//                                 <Button text="View All" href="/blog/#blogArticles" />
//                             </div>
//                         </div>
//
//
//
//                         <p className={`mt-0 ${seStyles.se_txt_16_work_sans_dark} text-center text-md-start`}>
//                             Here’s what we&apos;ve been up to recently.
//                         </p>
//
//                     </div>
//
//
//                     <div className="d-md-flex d-lg-flex d-block justify-content-between gap-5">
//
//                         {blogs.slice(0, 3).map((post) => (
//                             <div key={post._id} className={`card ${styles.articleCard1}`}>
//                                 <div className="card-body p-0 d-flex align-items-end position-relative">
//                                     {post?.feturedImage && (
//                                         <div
//                                             style={{
//                                                 position: "relative",
//                                                 width: "100%",
//                                                 aspectRatio: "8 / 9",
//                                                 overflow: "hidden",
//                                                 borderRadius: "20px"
//                                             }}
//                                         >
//
//                                             <Image
//                                                 className="object-cover"
//                                                 src={urlFor(post?.feturedImage).url()}
//                                                 alt={post.title || ""}
//                                                 fill
//                                             />
//                                             <Image className={`img-fluid object-cover`}
//                                                    src={urlFor(post?.feturedImage).url()} height={368} width={624}
//                                                    alt="" />
//
//                                             <div
//                                                 style={{
//                                                     position: "absolute",
//                                                     top: 0,
//                                                     left: 0,
//                                                     width: "100%",
//                                                     height: "100%",
//                                                     borderRadius: "20px",
//                                                     background: "linear-gradient(180deg, rgba(24, 59, 86, 0.000085) 0%, rgba(21, 37, 50, 0.85) 100%)"
//                                                 }}
//                                             />
//                                         </div>
//                                     )}
//
//                                     <Link
//                                         href={`/blog/${typeof post.slug === "string" ? post.slug : post.slug.current}`}
//                                         className={seStyles.se_26_card_txt}
//                                     >
//                                         {post.title}
//                                     </Link>
//
//                                 </div>
//                             </div>
//                         ))}
//
//                     </div>
//                     <div
//                         className={` d-flex d-md-none justify-content-center mt-5  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
//                         <Button text="View All" href="/blog/#blogArticles" />
//                     </div>
//                 </div>
//             </div>
//
//             <ExclusiveDeals />
//
//         </>
//     );
// }


import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import seStyles from "@/styles/services.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
import {
    getBlogData,
    getHomeDetails,
    getMetadata,
} from "@/sanity/libs/api";
import {urlFor} from "@/sanity/libs/sanity";
import Link from "next/link";
import HeroSlider from "@/components/ReusableComponents/HeroSlider";
import pageStyle from '@/styles/services.module.css'
import {Metadata} from "next";
import {BlogData} from "@/sanity/types";


export interface ServiceCategory {
    _id: string;
    title: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    homeDescription: string;
}

export interface OpenDay {
    _key: string;
    day: string;
    time: string;
}

export interface ContactDetail {
    _key: string;
    number?: string;
    email?: string;
}

export interface EthosItem {
    _key: string;
    name: string;
    description: string;
    mainImage: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
        }
    };
    button: string;
    link: string;
}

export default async function Home() {

    const homeData = await getHomeDetails();
    const blogs = await getBlogData();

    if (!homeData) {
        return <p>Home data not found</p>;
    }

    const service = homeData.services.serviceCategories;

    console.log("------ffd: ",homeData.sectionTwo )


    const serviceOrder = [
        service.find((item: ServiceCategory) => item.slug.current === 'body'),
        service.find((item: ServiceCategory) => item.slug.current === 'nail-treatment'),
        service.find((item: ServiceCategory) => item.slug.current === 'facial'),
        service.find((item: ServiceCategory) => item.slug.current === 'add-ons'),
    ].filter(Boolean);

    return (

        <>
            <HeroSlider home={homeData}/>
            <div className={`${styles.contactContainer} section pb-5 pt-5`}>
                <div className="d-block d-md-block d-lg-flex justify-content-center gap-5">
                    <div
                        className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
                        <div className="margin_bottom_150">
                            <h1 className={`${seStyles.se_txt_50_coe} mb-3 mb-lg-3`}>
                                {homeData.sectionOne.sectionOneTitle}
                            </h1>
                            <p className={`${seStyles.se_txt_14_work_sans} mb-3 `}>
                                {homeData.sectionOne.sectionOneDescription}
                            </p>
                            {homeData.sectionOne.sectionOneImage && (
                                <Image className="img-fluid mt-3"
                                       src={urlFor(homeData.sectionOne.sectionOneImage).url() || "/Vector12.png"}
                                       height={400}
                                       width={655}
                                       alt={homeData.sectionOne.sectionOneImage.alt || 'Introduction section image'}/>
                            )}
                        </div>
                        <div className="mb-md-4">
                            {/* <Button href={home[0]?.sectionOneButtonLink} text={home[0]?.sectionOneButton} /> */}
                            <Link href={homeData.sectionOne.sectionOneButtonLink}>
                                <button className={`${pageStyle.darkButton}`} style={{
                                    fontSize: "15px !important",
                                    border: "none"
                                }}>{homeData.sectionOne.sectionOneButton}</button>
                            </Link>
                        </div>
                    </div>


                    <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className={`card ${styles.card1}`}>
                            <div className="card-body py-3">
                                {/* main topic our services */}
                                <div className="row mb-0 mx-0 mt-2">
                                    <h3 className={`${seStyles.se_txt_25_awesome_300}`}
                                        style={{marginBottom: "20px"}}>OUR SERVICES</h3>
                                </div>


                                {/* treatments */}
                                <div className="row px-2 mx-0">
                                    <div className={`${seStyles.line_border} mt-4 px-0`}>
                                        <h3 className={`${seStyles.se_txt_18}`}>TREATMENTS</h3>
                                    </div>

                                    <div className="row py-3 px-0 mx-0">
                                        {serviceOrder?.map((item, index) => item ? (
                                            <Link key={index} href={`/services#${item.slug.current}`}
                                                  className="linkUnderlineNone px-0">
                                                <div className="d-flex pt-0">

                                                    <div className={`col-6 ${styles.bottomBorder} `}>
                                                        <p className={`${seStyles.se_txt_16} scaleTxt mb-0`}>{item.title}</p>
                                                    </div>

                                                    <div className={`col-6 py-1 ${styles.bottomBorder}`}>
                                                        <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
                                                            {item.homeDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ) : null)}
                                        <div className="d-flex pt-0 px-0">
                                            <div className={`col-6 ${styles.bottomBorder}`}>
                                                <p className={`${seStyles.se_txt_16} mb-0`}>Gift Vouchers</p>
                                            </div>

                                            <div className={`col-6 py-1 ${styles.bottomBorder}`}>
                                                <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
                                                    Stylish gift cards to share the benefits of wellness, relaxation,
                                                    and pampering
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Hours */}
                                <div className="row px-2 mx-0">
                                    <div className={`${seStyles.line_border} mt-4 px-0`}>
                                        <h3 className={seStyles.se_txt_18}>HOURS</h3>
                                    </div>
                                    {homeData.services.openDays.map((item: OpenDay, index: number) => (
                                        <div key={index} className="row mx-0 px-0 w-100">
                                            <div className="d-flex w-100 px-0">
                                                <div className={`col-6 py-2 ${styles.bottomBorder}`}>
                                                    <p className={`${seStyles.se_txt_16} mb-0`}>{item.day}</p>
                                                </div>

                                                <div className={`col-6 ${styles.bottomBorder} py-2`}>
                                                    <p className={`${seStyles.se_txt_12_work_sans} mb-0`}>
                                                        {item.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* contact */}
                                <div className="row mx-0 px-2">
                                    <div className={`${seStyles.line_border}   mt-4 pt-3 px-0`}>
                                        <h3 className={`${seStyles.se_txt_18}`}>CONTACT</h3>
                                    </div>

                                    <div className="row mx-0 px-0">
                                        <div className="d-flex px-0">
                                            <div className={`col-6 ${styles.bottomBorder} py-2`}>
                                                <p className={`${seStyles.se_txt_16} mb-0`}>Phone</p>
                                            </div>

                                            <div className={`col-6 ${styles.bottomBorder} py-2`}>
                                                {homeData.services.phoneNumberArray.map((item: ContactDetail, index: number) => (
                                                    <p key={index} className={`${seStyles.se_txt_12_work_sans} mb-0`}>
                                                        {item.number}
                                                    </p>
                                                ))}

                                            </div>
                                        </div>
                                    </div>


                                    <div className="row  mx-0 px-0">
                                        <div className="d-flex px-0">
                                            <div className={`col-6 pt-2 border-0 ${styles.bottomBorder}`}>
                                                <p className={`${seStyles.se_txt_16} mb-0`}>Email</p>
                                            </div>

                                            <div className={`col-6 pt-2 border-0 ${styles.bottomBorder}`}>
                                                {homeData.services.emailArray.map((item: ContactDetail, index: number) => (
                                                    <p key={index} className={`${seStyles.se_txt_12_work_sans} mb-0`}>
                                                        {item.email}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mx-0 px-2">
                                    <div className={`${styles.privacyPRow} pt-1 px-0`}>
                                        <p className={`${seStyles.se_txt_10_work_sans} mb-1`}>
                                            For Same Day appointment please call us so we can respond to you quickly.
                                            Please
                                            read our
                                        </p>
                                        <p className={`${seStyles.se_txt_10_work_sans}`}>
                                            <a href="/terms">booking policy </a>
                                            below prior to making an appointment.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DescriptionSection title={homeData.ethos.title || "Our Ethos"}
                                description={homeData.ethos.description || "We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience."}/>

            <div className={`section py-3 ${styles.OnDesktopHideExtra} ${styles.contactContainer}`}>
                {homeData.ethos.ethosArray.map((item: EthosItem, index: number) => (
                    <div key={index} className="d-block d-md-block d-lg-flex my-5">
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-6 pe-lg-4">

                                    <div style={{paddingLeft: "30px", paddingTop: "26px"}}>
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
                                <div
                                    className="col-12 col-md-12 col-lg-6 ps-lg-4 col-xl-6 d-flex flex-column justify-content-start">
                                    <div className="margin_bottom_150">
                                        <h3 className={seStyles.se_txt_40}
                                            style={{fontFamily: "Coefficient DEMO, sans-serif;"}}>{item.name}</h3>
                                        <p className={`${seStyles.se_txt_16_work_sans_dark} mb-0`}
                                           style={{textAlign: "justify"}}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <Link href={item.link || "/contact"}>
                                        <button className={`${pageStyle.darkButton}`} style={{
                                            fontSize: "15px !important",
                                            border: "none"
                                        }}>{item.button}</button>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="col-12 col-md-12 col-lg-6 pe-lg-4 col-xl-6 my-4 d-flex flex-column justify-content-start">
                                    <div className="margin_bottom_150">
                                        <h3 className={seStyles.se_txt_40}
                                            style={{fontFamily: "Coefficient DEMO, sans-serif;"}}>{item.name}</h3>
                                        <p className={`${seStyles.se_txt_16_work_sans_dark} mb-0`}
                                           style={{textAlign: "justify"}}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <Link href={item.link || "/contact"}>
                                        <button className={`${pageStyle.darkButton}`} style={{
                                            fontSize: "15px !important",
                                            border: "none"
                                        }}>{item.button}</button>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-12 ps-lg-4 col-lg-6 col-xl-6 my-4">
                                    <div style={{paddingRight: "30px", paddingTop: "26px"}}>
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
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className={`container section py-3 ${styles.OnmobileHideExtra}`}>
                {homeData.ethos.ethosArray.map((item: EthosItem, index: number) => (
                    <div key={index} className="d-block d-md-block d-lg-flex  mb-5">
                        {index % 2 === 0 ? (
                            <>
                                <div
                                    className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
                                    <div className="row">
                                        <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                                        <p className={seStyles.se_txt_16_work_sans_dark}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="margin_bottom_150">
                                        <div style={{paddingLeft: "30px", paddingTop: "26px"}}>
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
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0">
                                    <Button text={item.button} href={item.link || "/contact"}/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start">
                                    <div className="row">
                                        <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                                        <p className={seStyles.se_txt_16_work_sans_dark}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="margin_bottom_150">
                                        <div style={{paddingRight: "30px", paddingTop: "26px"}}>
                                            {item.mainImage && (
                                                <Image
                                                    className={`img-fluid ${styles.rightBoxShadow} ${styles.mobileRadius}`}
                                                    src={urlFor(item?.mainImage).url() || "/banner-about.png"}
                                                    height={368}
                                                    width={624}
                                                    alt={item.name}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-4 mt-lg-0">
                                    <Button text={item.button} href={item.link || "/contact"}/>
                                </div>
                            </>
                        )}


                    </div>
                ))}
            </div>

            {/*{homeData.sectionTwoImage && (*/}
                <YellowBackSection
                    title={homeData.sectionTwo.secTwoTitle}
                    description={homeData.sectionTwo.sectionTwoDescription}
                    image={urlFor(homeData.sectionTwo.sectionTwoImage).url() || "/interior.png"}
                    buttonText={homeData.sectionTwo.sectionTwoButton}
                    buttonLink={homeData.sectionTwo.sectionTwoButtonLink}/>
            {/*)}*/}


            <div
                className={`position-relative mt-0 mt-lg-4 ${styles.contactContainer} ${styles.article_v1} section mt-0`}
                style={{marginTop: "0px !important", paddingTop: "58px !important"}}>
                <div className={`${styles.articleDiv}`}>
                    <div className="d-flex flex-column d-block justify-content-between">
                        <div
                            className="d-flex flex-row justify-content-center justify-content-md-between align-items-center">
                            <div className="">
                                <h3 className={`${styles.locationDivTitle} text-center text-md-start`}>Recent
                                    Articles</h3>

                            </div>
                            <div
                                className={` d-none d-md-flex justify-content-center  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
                                <Button text="View All" href="/blog/#blogArticles"/>
                            </div>
                        </div>


                        <p className={`mt-0 ${seStyles.se_txt_16_work_sans_dark} text-center text-md-start`}>
                            Here’s what we&apos;ve been up to recently.
                        </p>

                    </div>


                    <div className="d-md-flex d-lg-flex d-block justify-content-between gap-5">

                        {blogs.posts.slice(0, 3).map((post: BlogData, index: number) => (
                            <div key={index} className={`card ${styles.articleCard1}`}>
                                <div className="card-body p-0 d-flex align-items-end position-relative">
                                    {post?.featureImage && (
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                aspectRatio: "8 / 9",
                                                overflow: "hidden",
                                                borderRadius: "20px"
                                            }}
                                        >

                                            <Image
                                                className="object-cover"
                                                src={urlFor(post?.featureImage).url()}
                                                alt={post.title || ""}
                                                fill
                                            />
                                            <Image className={`img-fluid object-cover`}
                                                   src={urlFor(post?.featureImage).url()} height={368} width={624}
                                                   alt=""/>

                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "20px",
                                                    background: "linear-gradient(180deg, rgba(24, 59, 86, 0.000085) 0%, rgba(21, 37, 50, 0.85) 100%)"
                                                }}
                                            />
                                        </div>
                                    )}

                                    <Link
                                        href={`/blog/${typeof post.slug === "string" ? post.slug : post.slug.current}`}
                                        className={seStyles.se_26_card_txt}
                                    >
                                        {post.title}
                                    </Link>

                                </div>
                            </div>
                        ))}

                    </div>
                    <div
                        className={` d-flex d-md-none justify-content-center mt-5  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
                        <Button text="View All" href="/blog/#blogArticles"/>
                    </div>
                </div>
            </div>

            <ExclusiveDeals
                title={homeData.exclusiveDeals.title}
                description={homeData.exclusiveDeals.description}
                buttonText={homeData.exclusiveDeals.buttonTxt}
                buttonLink={homeData.exclusiveDeals.link}
            />

        </>
    );
}


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("home");

    return {
        title: mdata?.title || "Breathe Spa - Home",
        description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Home",
            description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/",
        },
    };
}

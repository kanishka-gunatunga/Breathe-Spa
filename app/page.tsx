import Button from "@/components/ReusableComponents/Button";
import styles from "@/styles/page.module.css";
import seStyles from "@/styles/services.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ExclusiveDeals from "@/components/ReusableComponents/ExclusiveDeals";
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import YellowBackSection from "@/components/ReusableComponents/YellowBackSection";
import {getBlogData, getEthosData, getHomeData, getServiceCategories, getSiteData} from "@/sanity/libs/api";
import {urlFor} from "@/sanity/libs/sanity";
import Link from "next/link";
import HeroSlider from "@/components/ReusableComponents/HeroSlider";

export default async function Home() {

    const ethos = await getEthosData();
    const home = await getHomeData();
    const site = await getSiteData();
    const blogs = await getBlogData();
    const service = await getServiceCategories()

    console.log("home[0]?.heroArray : ", home[0]?.heroArray)

    const serviceOrder = [
        service.find(item => item.slug.current === 'body'),
        service.find(item => item.slug.current === 'nail-treatment'),
        service.find(item => item.slug.current === 'facial'),
        service.find(item => item.slug.current === 'add-ons'),
    ].filter(Boolean);

    return (

        <>
            <HeroSlider home={home || []}/>
            <div className={`${styles.contactContainer} section pb-5 pt-5`}>
                <div className="d-block d-md-block d-lg-flex justify-content-center gap-5">
                    <div
                        className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start justify-content-lg-between">
                        <div>
                            <h1 className={`${seStyles.se_txt_50_coe} mb-3 mb-lg-3`}>
                                {home[0]?.sectionOneTitle}
                            </h1>
                            <p className={`${seStyles.se_txt_14_work_sans} mb-3 `}>
                                {home[0]?.sectionOneDescription}
                            </p>
                            {home[0]?.sectionOneImage && (
                                <Image className="img-fluid mt-3"
                                       src={urlFor(home[0]?.sectionOneImage).url() || "/Vector12.png"} height={400}
                                       width={655} alt=""/>
                            )}
                        </div>
                        <div className="mb-md-4 pt-4">
                            <Button href={home[0]?.sectionOneButtonLink} text={home[0]?.sectionOneButton}/>
                        </div>
                    </div>


                    <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className={`card ${styles.card1}`}>
                            <div className="card-body">
                                {/* main topic our services */}
                                <div className="row mb-0">
                                    <h3 className={seStyles.se_txt_25_awesome}>OUR SERVICES</h3>
                                </div>


                                {/* treatments */}
                                <div className="row px-2">
                                    <div className={`${seStyles.line_border} mt-4 px-0`}>
                                        <h3 className={seStyles.se_txt_18}>TREATMENTS</h3>
                                    </div>

                                    <div className="row py-3 px-0">
                                        {serviceOrder?.map((item, index) => item ? (
                                            <Link key={index} href={`/services#${item.slug.current}`}
                                                  className="linkUnderlineNone">
                                                <div className="d-flex pt-1">

                                                    <div className={`col-6 ${styles.bottomBorder} `}>
                                                        <p className={`${seStyles.se_txt_18} scaleTxt`}>{item.title}</p>
                                                    </div>

                                                    <div className={`col-6 ${styles.bottomBorder}`}>
                                                        <p className={seStyles.se_txt_12_work_sans}>
                                                            {item.homeDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ) : null)}
                                        <div className="d-flex pt-1">
                                            <div className={`col-6 ${styles.bottomBorder}`}>
                                                <p className={seStyles.se_txt_18}>Gift Vouchers</p>
                                            </div>

                                            <div className={`col-6 ${styles.bottomBorder}`}>
                                                <p className={seStyles.se_txt_12_work_sans}>
                                                    Stylish gift cards to share the benefits of wellness, relaxation,
                                                    and pampering
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Hours */}
                                <div className="row px-2">
                                    <div className={`${seStyles.line_border} mt-4 px-0`}>
                                        <h3 className={seStyles.se_txt_18}>HOURS</h3>
                                    </div>
                                    {site[0]?.openDays.map((item, index) => (
                                        <div key={index} className="row  pt-3 px-0 w-100">
                                            <div className="d-flex">
                                                <div className={`col-6 ${styles.bottomBorder}`}>
                                                    <p className={seStyles.se_txt_18}>{item.day}</p>
                                                </div>

                                                <div className={`col-6 ${styles.bottomBorder}`}>
                                                    <p className={seStyles.se_txt_12_work_sans}>
                                                        {item.time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                                                {site[0]?.phoneNumberArray.map((item, index) => (
                                                    <p key={index} className={seStyles.se_txt_12_work_sans}>
                                                        {item.number}
                                                    </p>
                                                ))}

                                            </div>
                                        </div>
                                    </div>


                                    <div className="row  px-0">
                                        <div className="d-flex">
                                            <div className={`col-6 border-0 ${styles.bottomBorder}`}>
                                                <p className={seStyles.se_txt_18}>Email</p>
                                            </div>

                                            <div className={`col-6  border-0 ${styles.bottomBorder}`}>
                                                {site[0]?.emailArray.map((item, index) => (
                                                    <p key={index} className={seStyles.se_txt_12_work_sans}>
                                                        {item.email}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={`${styles.privacyPRow} pt-3 px-0`}>
                                    <p className={`${seStyles.se_txt_10_work_sans} mb-1`}>
                                        For Same Day appointment please call us so we can respond to you quickly. Please
                                        read our
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

            <DescriptionSection title={ethos[0]?.title || "Our Ethos"}
                                description={ethos[0]?.description || "We are passionately committed to providing our clients with the most professional, customized, and hygienic wellness experience."}/>

            <div className={`section py-3 ${styles.OnDesktopHideExtra} ${styles.contactContainer}`}>
                {ethos[0]?.ethosArray.map((item, index) => (
                    <div key={index} className="d-block d-md-block d-lg-flex gap-5 my-5">
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
                                <div
                                    className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start justify-content-lg-between mb-5">
                                    <div className="mb-3">
                                        <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                                        <p className={seStyles.se_txt_16_work_sans_dark} style={{textAlign: "justify"}}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <Button text={item.button} href={item.link || "/contact"}/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start justify-content-lg-between mb-5">
                                    <div className="mb-3">
                                        <h3 className={seStyles.se_txt_40}>{item.name}</h3>
                                        <p className={seStyles.se_txt_16_work_sans_dark} style={{textAlign: "justify"}}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <Button text={item.button} href={item.link || "/contact"}/>
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
                            <Button text={item.button} href={item.link || "/contact"}/>
                        </div>

                    </div>
                ))}
            </div>


            {home[0]?.sectionTwoImage && (
                <YellowBackSection
                    title={home[0]?.secTwoTitle}
                    description={home[0]?.sectionTwoDescription}
                    image={urlFor(home[0]?.sectionTwoImage).url() || "/interior.png"}
                    buttonText={home[0]?.sectionTwoButton}
                    buttonLink={home[0]?.sectionTwoButtonLink}/>
            )}


            <div className={`position-relative mt-0 mt-lg-4 ${styles.contactContainer} section`}>
                <div className={`${styles.articleDiv}`}>
                    <div className="d-md-flex d-lg-flex d-block justify-content-between">
                        <div className="col-12 col-md-8 col-lg-8">
                            <div>
                                <h3 className={`${styles.locationDivTitle} text-center text-md-start`}>Recent
                                    Articles</h3>
                                <p className={`mt-0 ${seStyles.se_txt_16_work_sans_dark} text-center text-md-start`}>
                                    Here’s what we&apos;ve been up to recently.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`col-12 col-md-4 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center  justify-content-lg-end justify-content-md-end ${styles.viewAll}`}>
                            <Button text="View All" href="/blog/#blogArticles"/>
                        </div>
                    </div>


                    <div className="d-md-flex d-lg-flex d-block justify-content-between">

                        {blogs.slice(0, 3).map((post) => (
                            <div key={post._id} className={`card ${styles.articleCard1}`}>
                                <div className="card-body p-0 p-md-2 d-flex align-items-end position-relative">
                                    {post?.feturedImage && (
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
                                                src={urlFor(post?.feturedImage).url()}
                                                alt={post.title || ""}
                                                fill
                                            />
                                            <Image className={`img-fluid object-cover`}
                                                   src={urlFor(post?.feturedImage).url()} height={368} width={624}
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
                                        style={{
                                            textDecoration: "none",
                                            position: "absolute",
                                            bottom: "16px",
                                            left: "16px",
                                            color: "white"
                                        }}
                                    >
                                        {post.title}
                                    </Link>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <ExclusiveDeals/>

        </>
    );
}

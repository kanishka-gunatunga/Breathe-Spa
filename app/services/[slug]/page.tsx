// // import { urlFor } from '@/sanity/libs/sanity';
// import Image from 'next/image';
// import style from '@/styles/services.module.css';
// import pageStyle from '@/styles/page.module.css'
// import {fetchServiceCategory} from '@/sanity/libs/api';
// import MainTitle from '@/components/servicesComponents/MainTitle';
// import Paragraph from '@/components/servicesComponents/Paragraph';
// import DescriptionSection from '@/components/servicesComponents/DescriptionSection';
// import {urlFor} from '@/sanity/libs/sanity';
// import {Service} from '@/sanity/types';
// import Link from 'next/link';
// import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
// import React from "react";
//
//
// export default async function ServiceCategoryPage({params}: { params: Promise<{ slug: string }> }) {
//     const {slug} = await params;
//
//     const category = await fetchServiceCategory(slug);
//     console.log("category : ", category);
//
//     if (!category) {
//         return <p>Category not found</p>;
//     }
//
//
//     const groupedServices = category.services.reduce((acc: { [key: string]: Service[] }, service: Service) => {
//         const {title} = service.serviceDescription;
//         if (!acc[title]) {
//             acc[title] = [];
//         }
//         acc[title].push(service);
//         return acc;
//     }, {});
//
//     return (
//         <div className='d-flex flex-column '>
//             <ScrollHandler/>
//             {/* hero section */}
//             <div className={`d-flex position-relative ${style.imageContainer}`}>
//                 {category.servicesHeroImage && (
//                     <Image
//                         src={urlFor(category.servicesHeroImage).url()}
//                         alt="services hero image"
//                         width={1920}
//                         height={1080}
//                         style={{width: "100vw", height: "auto", objectFit: 'cover'}}
//                     />
//                 )}
//                 <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
//
//                     {category.innerHeroTitle && (
//                         <h1 className={`${style.heroTxt}`}>{category.innerHeroTitle}</h1>
//                     )}
//                 </div>
//             </div>
//
//
//             <div className={`pt-5 pb-0 ${pageStyle.contactContainer} section`}>
//                 <div className="d-flex flex-column flex-lg-row">
//                     <div className="col-12 col-lg-5 d-flex">
//
//                         {category.servicesImage && (
//                             <Image src={urlFor(category.servicesImage).url()} alt='services description image'
//                                    width={600} height={800} className={style.imgHeight}/>
//                         )}
//                     </div>
//                     <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-streach pt-4 pt-lg-0">
//                         <MainTitle title={category.categoryTitle}/>
//                         {/*<Paragraph text={category.categoryDescription}/>*/}
//                         <div className={`${pageStyle.map_hours_desc} mb-0`}>
//                             {/*<PortableText value={category.categoryDescription} />*/}
//                             <p className="preserve-linebreaks">{category.categoryDescription}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             {/* loop */}
//             <div className=''>
//                 <div>
//                     {Object.keys(groupedServices).slice(0, 2).map((title, index) => (
//                         <div key={index}>
//                             <div className='mb-0'>
//                                 <DescriptionSection
//                                     title={title}
//                                     description={groupedServices[title][0].serviceDescription?.description}
//                                 />
//                             </div>
//                             <div className={`my-3 my-lg-0 pb-0 section ${pageStyle.contactContainer}`}>
//                                 {groupedServices[title].map((service, index) => (
//                                     <div
//                                         key={service.serviceName + index}
//                                         id={`service-${service.serviceName.toLowerCase().replace(/\s+/g, '-')}`}
//                                         className="p-0 position-relative"
//                                     >
//                                         <div className={`${index % 2 === 0 ? style.innerItemOne : style.innerItemTwo}`}>
//                                             <div
//                                                 className={`p-3 p-md-3 p-lg-4 ${style.serviceInnerItem} mb-0 ${index % 2 === 0 ? style.roundedBottomLeft : style.roundedTopRight}`}
//                                             >
//                                                 <div className="d-flex flex-column flex-md-row">
//                                                     <div
//                                                         className="col-12 col-lg-12 d-flex flex-column align-items-start">
//                                                         <div
//                                                             className="d-flex w-100 justify-content-between align-items-top">
//                                                             <h4 className={`${style.se_txt_40}`}>{service.serviceName}</h4>
//                                                             <div className="d-none d-md-flex">
//                                                                 <Link href="/contact#contactForm"
//                                                                       className={`${style.se_link_a_20} arrow_button`}>
//                                                                     <span>Book Now</span>
//                                                                 </Link>
//
//
//                                                             </div>
//                                                         </div>
//                                                         <ul className={`${style.pricingList} ${style.se_li_26} `}>
//                                                             {service?.pricing?.map((pricing, idx) => {
//                                                                 const priceNum =
//                                                                     typeof pricing.price === 'number'
//                                                                         ? pricing.price
//                                                                         : parseFloat(pricing.price as string) || 0;
//
//                                                                 const formatted = priceNum.toLocaleString('en-IN', {
//                                                                     minimumFractionDigits: 2,
//                                                                     maximumFractionDigits: 2,
//                                                                 });
//
//                                                                 return (
//                                                                     <li key={idx}
//                                                                         className={`${style.pricingItem} me-5`}>
//                                                                         {pricing.duration
//                                                                             ? `${pricing.duration} | Rs. ${formatted}`
//                                                                             : `Rs. ${formatted}`} {pricing.priceDescription}
//                                                                     </li>
//                                                                 );
//                                                             })}
//                                                         </ul>
//                                                         <Paragraph text={service.serviceItemDescription}/>
//                                                         <div className="d-flex d-md-none my-3">
//                                                             <Link href={"/contact#contactForm"}
//                                                                   className={`${style.se_link_a_20} arrow_button`}>Book
//                                                                 Now</Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div
//                                                 className={`${style.darkRectangle} ${index % 2 === 0 ? style.roundedBottomLeftRct : style.roundedTopRightRct}`}></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//         </div>
//     );
// }


// import { urlFor } from '@/sanity/libs/sanity';
import Image from 'next/image';
import style from '@/styles/services.module.css';
import pageStyle from '@/styles/page.module.css'
import {getServiceCategory} from '@/sanity/libs/api';
import MainTitle from '@/components/servicesComponents/MainTitle';
import Paragraph from '@/components/servicesComponents/Paragraph';
import DescriptionSection from '@/components/servicesComponents/DescriptionSection';
import {urlFor} from '@/sanity/libs/sanity';
import {Service} from '@/sanity/types';
import Link from 'next/link';
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import React from "react";
import {Metadata} from "next";


export default async function ServiceCategoryPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    // const category = await fetchServiceCategory(slug);
    const category = await getServiceCategory(slug);
    console.log("category : ", category);

    if (!category) {
        return <p>Category not found</p>;
    }


    const groupedServices = category.services.reduce((acc: { [key: string]: Service[] }, service: Service) => {
        const {title} = service.serviceDescription;
        if (!acc[title]) {
            acc[title] = [];
        }
        acc[title].push(service);
        return acc;
    }, {});

    return (
        <div className='d-flex flex-column '>
            <ScrollHandler/>
            {/* hero section */}
            <div className={`d-flex position-relative ${style.imageContainer}`}>
                {category.servicesHeroImage && (
                    <Image
                        src={urlFor(category.servicesHeroImage).url()}
                        alt="services hero image"
                        width={1920}
                        height={1080}
                        style={{width: "100vw", height: "auto", objectFit: 'cover'}}
                    />
                )}
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center">

                    {category.innerHeroTitle && (
                        <h1 className={`${style.heroTxt}`}>{category.innerHeroTitle}</h1>
                    )}
                </div>
            </div>


            <div className={`pt-5 pb-0 ${pageStyle.contactContainer} section`}>
                <div className="d-flex flex-column flex-lg-row">
                    <div className="col-12 col-lg-5 d-flex">

                        {category.servicesInnerImage && (
                            <Image src={urlFor(category.servicesInnerImage).url()} alt='services description image'
                                   width={600} height={800} className={style.imgHeight}/>
                        )}
                    </div>
                    <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-streach pt-4 pt-lg-0">
                        <MainTitle title={category.descriptionTitle}/>
                        {/*<Paragraph text={category.categoryDescription}/>*/}
                        <div className={`${pageStyle.map_hours_desc} mb-0`}>
                            {/*<PortableText value={category.categoryDescription} />*/}
                            <p className="preserve-linebreaks">{category.categoryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* loop */}
            <div className=''>
                <div>
                    {Object.keys(groupedServices).slice(0, 2).map((title, index) => (
                        <div key={index}>
                            <div className='mb-0'>
                                <DescriptionSection
                                    title={title}
                                    description={groupedServices[title][0].serviceDescription?.description}
                                />
                            </div>
                            <div className={`my-3 my-lg-0 pb-0 section ${pageStyle.contactContainer}`}>
                                {groupedServices[title].map((service : Service, index: number) => (
                                    <div
                                        key={service.serviceName + index}
                                        id={`service-${service.serviceName.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="p-0 position-relative"
                                    >
                                        <div className={`${index % 2 === 0 ? style.innerItemOne : style.innerItemTwo}`}>
                                            <div
                                                className={`p-3 p-md-3 p-lg-4 ${style.serviceInnerItem} mb-0 ${index % 2 === 0 ? style.roundedBottomLeft : style.roundedTopRight}`}
                                            >
                                                <div className="d-flex flex-column flex-md-row">
                                                    <div
                                                        className="col-12 col-lg-12 d-flex flex-column align-items-start">
                                                        <div
                                                            className="d-flex w-100 justify-content-between align-items-top">
                                                            <h4 className={`${style.se_txt_40}`}>{service.serviceName}</h4>
                                                            <div className="d-none d-md-flex">
                                                                <Link href="/contact#contactForm"
                                                                      className={`${style.se_link_a_20} arrow_button`}>
                                                                    <span>Book Now</span>
                                                                </Link>


                                                            </div>
                                                        </div>
                                                        <ul className={`${style.pricingList} ${style.se_li_26} `}>
                                                            {service?.pricing?.map((pricing, idx) => {
                                                                const priceNum =
                                                                    typeof pricing.price === 'number'
                                                                        ? pricing.price
                                                                        : parseFloat(pricing.price as string) || 0;

                                                                const formatted = priceNum.toLocaleString('en-IN', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                });

                                                                return (
                                                                    <li key={idx}
                                                                        className={`${style.pricingItem} me-5`}>
                                                                        {pricing.duration
                                                                            ? `${pricing.duration} | Rs. ${formatted}`
                                                                            : `Rs. ${formatted}`} {pricing.priceDescription}
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                        <Paragraph text={service.serviceItemDescription}/>
                                                        <div className="d-flex d-md-none my-3">
                                                            <Link href={"/contact#contactForm"}
                                                                  className={`${style.se_link_a_20} arrow_button`}>Book
                                                                Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`${style.darkRectangle} ${index % 2 === 0 ? style.roundedBottomLeftRct : style.roundedTopRightRct}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;
    const category = await getServiceCategory(slug);
    if (!category) {
        return {title: 'Category Not Found'};
    }
    const mdata = category.seo;

    return {
        title: mdata?.title || `Breathe Spa - ${category.categoryTitle}`,
        description: mdata?.description || 'Explore our luxurious spa services at Breathe Spa.',
        keywords: mdata?.keywords?.join(', ') || 'spa, wellness, relaxation, beauty, treatments',
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || `Breathe Spa - ${category.categoryTitle}`,
            description: mdata?.ogDescription || mdata?.description || 'Experience luxury and relaxation at Breathe Spa.',
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : '/Rectangle4422.png',
            url: `https://breathespa.vercel.app/services/${slug}`,
            type: 'website',
        }
    };
}
// import {getMetadata, getServiceCategories, getServiceMainPageData} from '@/sanity/libs/api'
// import Image from 'next/image'
// import React from 'react'
// import style from '@/styles/services.module.css'
// import pageStyle from '@/styles/page.module.css'
// import MainTitle from '@/components/servicesComponents/MainTitle'
// import Paragraph from '@/components/servicesComponents/Paragraph'
// import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
// import ServiceCategoryCard from '@/components/servicesComponents/ScrollSection'
// import {urlFor} from '@/sanity/libs/sanity'
// import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
// import {Metadata} from "next";
//
//
// const page = async () => {
//
//     const services = await getServiceCategories()
//     const servicesMainData = await getServiceMainPageData();
//     console.log("services: ", services);
//     console.log("services main tag: ", servicesMainData[0]?.tagDescription);
//
//     const serviceOrder = [
//         services.find(item => item.slug.current === 'body'),
//         services.find(item => item.slug.current === 'nail-treatment'),
//         services.find(item => item.slug.current === 'facial'),
//         services.find(item => item.slug.current === 'add-ons'),
//     ].filter(Boolean);
//
//
//     return (
//         <div className='d-flex flex-column'>
//             {/* hero section */}
//             <ScrollHandler/>
//             <div className={`d-flex ${style.imageContainer}`}>
//                 {servicesMainData[0].servicesHeroImage && (
//                     <Image src={urlFor(servicesMainData[0]?.servicesHeroImage).url()} alt='services hero image'
//                            width={1920} height={1080} style={{width: "100vw", height: "auto", objectFit: 'cover'}}/>
//                 )}
//             </div>
//
//             {/* services description page */}
//             <div id="serviceSection" className={`section py-3 ${pageStyle.contactContainer}`}>
//                 <div className="d-flex flex-column flex-lg-row w-100">
//                     <div className="col-12 col-lg-5 d-flex pt-3 pt-lg-0">
//                         {servicesMainData[0].mainImage && (
//                             <Image src={urlFor(servicesMainData[0]?.mainImage).url()} alt='services description image'
//                                    width={600} height={800} className={`${style.imgHeight} fade-in`}/>
//                         )}
//                     </div>
//                     <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-stretch pt-4 p-lg-0"
//                          data-aos="fade-left">
//                         <MainTitle title={servicesMainData[0]?.title}/>
//                         <Paragraph text={servicesMainData[0]?.description}/>
//                     </div>
//                 </div>
//             </div>
//
//             <div className='p-0 mb-lg-4'>
//                 <DescriptionSection title={servicesMainData[0]?.tagLine}
//                                     description={servicesMainData[0]?.tagDescription}/>
//             </div>
//
//             <div className="scroll-sections mt-lg-5">
//                 {serviceOrder && serviceOrder.map((category, index) => category ? (
//                     <ServiceCategoryCard key={index} category={category} categoryId={index}/>
//                 ) : null)}
//
//             </div>
//         </div>
//         // 123
//     )
// }
//
// export default page
//
//
// export async function generateMetadata(): Promise<Metadata> {
//     const mdata = await getMetadata("service");
//
//     return {
//         title: mdata?.title || "Breathe Spa - Services",
//         description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
//         keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
//         openGraph: {
//             title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Services",
//             description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
//             images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
//             url: mdata?.canonicalUrl || "https://breathespa.vercel.app/services",
//             type: "website",
//         },
//         alternates: {
//             canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/services",
//         },
//     };
// }
//


import {
    getCategories,
    getMetadata,
    getServiceData,
} from '@/sanity/libs/api'
import Image from 'next/image'
import React from 'react'
import style from '@/styles/services.module.css'
import pageStyle from '@/styles/page.module.css'
import MainTitle from '@/components/servicesComponents/MainTitle'
import Paragraph from '@/components/servicesComponents/Paragraph'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import ServiceCategoryCard from '@/components/servicesComponents/ScrollSection'
import {urlFor} from '@/sanity/libs/sanity'
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import {Metadata} from "next";
import {ServiceCategory} from "@/sanity/types";


const page = async () => {

    const servicesMainData = await getServiceData();
    const categories = await getCategories();

    if (!servicesMainData) {
        return <p>Services data not found</p>;
    }

    // const serviceOrder = [
    //     services.find(item => item.slug.current === 'nail-treatment'),
    //     services.find(item => item.slug.current === 'facial'),
    //     services.find(item => item.slug.current === 'add-ons'),
    // ].filter(Boolean);

    const serviceOrder = [
        categories.find((item: ServiceCategory) => item.slug?.current === 'body'),
        categories.find((item: ServiceCategory) => item.slug?.current === 'nail-treatment'),
        categories.find((item: ServiceCategory) => item.slug?.current === 'facial'),
        categories.find((item: ServiceCategory) => item.slug?.current === 'add-ons'),
    ].filter(Boolean);


    return (
        <div className='d-flex flex-column'>
            {/* hero section */}
            <ScrollHandler/>
            <div className={`d-flex ${style.imageContainer}`}>
                {servicesMainData.servicesHeroImage && (
                    <Image src={urlFor(servicesMainData.servicesHeroImage).url()} alt='services hero image'
                           width={1920} height={1080} style={{width: "100vw", height: "auto", objectFit: 'cover'}}/>
                )}
            </div>

            {/* services description page */}
            <div id="serviceSection" className={`section py-3 ${pageStyle.contactContainer}`}>
                <div className="d-flex flex-column flex-lg-row w-100">
                    <div className="col-12 col-lg-5 d-flex pt-3 pt-lg-0">
                        {servicesMainData.introduction.mainImage && (
                            <Image src={urlFor(servicesMainData.introduction.mainImage).url()}
                                   alt='services description image'
                                   width={600} height={800} className={`${style.imgHeight} fade-in`}/>
                        )}
                    </div>
                    <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-stretch pt-4 p-lg-0"
                         data-aos="fade-left">
                        <MainTitle title={servicesMainData.introduction.title}/>
                        <Paragraph text={servicesMainData.introduction.description}/>
                    </div>
                </div>
            </div>

            <div className='p-0 mb-lg-4'>
                <DescriptionSection title={servicesMainData.tagline.tagLine}
                                    description={servicesMainData.tagline.tagDescription}/>
            </div>

            <div className="scroll-sections mt-lg-5">
                {serviceOrder && serviceOrder.map((category, index) => category ? (
                    <ServiceCategoryCard key={index} category={category} categoryId={index}/>
                ) : null)}

            </div>
        </div>
        // 123
    )
}

export default page


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("service");

    return {
        title: mdata?.title || "Breathe Spa - Services",
        description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Services",
            description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/services",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/services",
        },
    };
}


import {getServiceCategories, getServiceMainPageData} from '@/sanity/libs/api'
import Image from 'next/image'
import React from 'react'
import style from '@/styles/services.module.css'
import pageStyle from '@/styles/page.module.css'
import MainTitle from '@/components/servicesComponents/MainTitle'
import Paragraph from '@/components/servicesComponents/Paragraph'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import ServiceCategoryCard from '@/components/servicesComponents/ScrollSection'
import {urlFor} from '@/sanity/libs/sanity'


const page = async () => {

    const services = await getServiceCategories()
    const servicesMainData = await getServiceMainPageData();
    console.log("services: ", services);
    console.log("services main: ", servicesMainData);

    const serviceOrder = [
        services.find(item => item.slug.current === 'body'),
        services.find(item => item.slug.current === 'nail-treatment'),
        services.find(item => item.slug.current === 'facial'),
        services.find(item => item.slug.current === 'add-ons'),
    ].filter(Boolean);


    return (
        <div className='d-flex flex-column'>
            {/* hero section */}
            <div className={`d-flex ${style.imageContainer}`}>
                {servicesMainData[0].servicesHeroImage && (
                    <Image src={urlFor(servicesMainData[0]?.servicesHeroImage).url()} alt='services hero image'
                           width={1920} height={1080} style={{width: "100vw", height: "auto", objectFit: 'cover'}}/>
                )}
            </div>

            {/* services description page */}
            <div className={`section py-3 ${pageStyle.contactContainer}`}>
                <div className="d-flex flex-column flex-lg-row w-100">
                    <div className="col-12 col-lg-5 d-flex pt-3 pt-lg-0">
                        {servicesMainData[0].mainImage && (
                            <Image src={urlFor(servicesMainData[0]?.mainImage).url()} alt='services description image'
                                   width={600} height={800} className={`${style.imgHeight} fade-in`}/>
                        )}
                    </div>
                    <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-stretch pt-4 p-lg-0"
                         data-aos="fade-left">
                        <MainTitle title={servicesMainData[0]?.title}/>
                        <Paragraph text={servicesMainData[0]?.description}/>
                    </div>
                </div>
            </div>

            <DescriptionSection title={servicesMainData[0]?.tagLine} description={servicesMainData[0]?.tagdescription}/>

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
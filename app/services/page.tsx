import { getServiceCategories, getServiceMainPageData } from '@/sanity/libs/api'
import Image from 'next/image'
import React from 'react'
import style from '@/styles/services.module.css'
import MainTitle from '@/components/servicesComponents/MainTitle'
import Paragraph from '@/components/servicesComponents/Paragraph'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import ServiceCategoryCard from '@/components/servicesComponents/ScrollSection'
import { urlFor } from '@/sanity/libs/sanity'



const page = async () => {

  const services = await getServiceCategories()
  const servicesMainData = await getServiceMainPageData();
console.log("services: ", servicesMainData[0]?.title); 



  return (
    <div className='d-flex flex-column'>
      {/* hero section */}
      <div className={`d-flex ${style.imageContainer}`}>
        
        {servicesMainData[0].servicesHeroImage && (
           <Image src={urlFor(servicesMainData[0]?.servicesHeroImage).url()} alt='services hero image' width={1920} height={1080} style={{ width: "100vw", height: "auto", objectFit: 'cover' }} />
          )}
      </div>

      {/* services description page */}
      <div className="container section pb-3">
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-5 d-flex">
          {servicesMainData[0].mainImage && (
            <Image src={urlFor(servicesMainData[0]?.mainImage).url()} alt='services description image' width={600} height={800} className={`${style.imgHeight} fade-in`} />
          )}
          </div>
          <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-stretch" data-aos="fade-left">
            <MainTitle title={servicesMainData[0]?.title} />
            <Paragraph text={servicesMainData[0]?.description} />
          </div>
        </div>
      </div>

      <DescriptionSection title="Discover the Best in Beauty & Care" description="Our services blend quality and hygiene, ensuring you receive only the best. Explore our range of treatments below and find your perfect match." />

      <div className="scroll-sections ">
        {services.map((category, index) => (
          <ServiceCategoryCard key={index} category={category} categoryId={index} />
        ))}
      </div>
    </div>
  )
}

export default page
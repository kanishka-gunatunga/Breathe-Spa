import { getServiceCategories } from '@/sanity/libs/api'
import Image from 'next/image'
import React from 'react'
import style from '@/styles/services.module.css'
import MainTitle from '@/components/servicesComponents/MainTitle'
import Paragraph from '@/components/servicesComponents/Paragraph'
import DescriptionSection from '@/components/servicesComponents/DescriptionSection'
import ServiceCategoryCard from '@/components/servicesComponents/ScrollSection'



const page = async () => {

  const services = await getServiceCategories()
  // console.log("services : ", services)

  return (
    <div className='d-flex flex-column'>
      {/* hero section */}
      <div className={`d-flex ${style.imageContainer}`}>
        <Image src={"/services/hero-img.png"} alt='services hero image' width={1920} height={1080} style={{ width: "100vw", height: "auto", objectFit: 'cover' }} />
      </div>
      {/* services description page */}
      <div className="container section pb-3">
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-5 d-flex">
            <Image src={"/services/service-description.png"} alt='services description image' width={600} height={800} className={`${style.imgHeight} fade-in`} />
          </div>
          <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-stretch" data-aos="fade-left">
            <MainTitle title="Our Services" />
            <Paragraph text="Lorem ipsum dolor sit amet consectetur. Integer purus ullamcorper fusce massa. Augue justo sagittis nulla dolor. Sed id sed rutrum aenean dapibus enim. Ut tortor mi egestas dignissim lacus gravida. Vulputate vel arcu quis adipiscing ullamcorper mattis mi volutpat morbi. Duis ullamcorper praesent non odio proin enim condimentum. Vestibulum lorem sollicitudin enim accumsan massa. Consectetur nullam est cras interdum aliquet enim praesent consectetur. Integer neque eu est quis nulla dolor consectetur. Augue condimentum aenean orci at sit tempus bibendum purus justo. Elementum vitae dui quis consectetur diam nam. Aenean fames eget suspendisse egestas sit montes vel commodo. Nisl a dictum ornare nisl elementum amet mauris cursus dolor. Mi adipiscing ut dignissim volutpat. Malesuada nisi gravida vitae dignissim facilisi. Fermentum consequat pellentesque mollis scelerisque. Egestas pulvinar volutpat venenatis risus donec amet in dolor dignissim. Pellentesque pharetra aliquam cum etiam ornare donec consequat non nibh. Ullamcorper amet eu volutpat tortor odio. A vestibulum dui gravida eu duis nisl nec porttitor quis. Fames integer metus dictumst in est non. Ridiculus nibh ut orci in. Fames ridiculus odio praesent suspendisse cras. Neque viverra vitae duis duis cursus dui platea adipiscing enim. Purus molestie neque sit ultrices egestas tortor nunc suspendisse a. Elementum libero aliquet turpis luctus. Egestas nibh dictumst imperdiet ut semper ultrices semper lorem volutpat. Netus nulla dolor egestas aliquet arcu integer quis. Pharetra varius volutpat vivamus dolor." />
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
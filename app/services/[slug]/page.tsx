// import { urlFor } from '@/sanity/libs/sanity';
import Image from 'next/image';
import style from '@/styles/services.module.css';
import pageStyle from '@/styles/page.module.css'
import { fetchServiceCategory } from '@/sanity/libs/api';
import MainTitle from '@/components/servicesComponents/MainTitle';
import Paragraph from '@/components/servicesComponents/Paragraph';
import DescriptionSection from '@/components/servicesComponents/DescriptionSection';
import { urlFor } from '@/sanity/libs/sanity';
import { Service } from '@/sanity/types';
import Link from 'next/link';



export default async function ServiceCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = await fetchServiceCategory(slug);
  console.log("category : ", category);

  if (!category) {
    return <p>Category not found</p>;
  }


  const groupedServices = category.services.reduce((acc: { [key: string]: Service[] }, service: Service) => {
    const { title } = service.serviceDescription;
    if (!acc[title]) {
      acc[title] = [];
    }
    acc[title].push(service);
    return acc;
  }, {});

  return (
    <div className='d-flex flex-column '>
      {/* hero section */}
      <div className={`d-flex position-relative ${style.imageContainer}`}>
        {category.servicesHeroImage && (
          <Image
            src={urlFor(category.servicesHeroImage).url()}
            alt="services hero image"
            width={1920}
            height={1080}
            style={{ width: "100vw", height: "auto", objectFit: 'cover' }}
          />
        )}
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">

          {category.innerHeroTitle && (
            <h1 className={`${style.heroTxt}`}>{category.innerHeroTitle}</h1>
          )}
        </div>
      </div>


      <div className={`section pb-0 ${pageStyle.contactContainer}`}>
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-5 d-flex">

            {category.servicesImage && (
              <Image src={urlFor(category.servicesImage).url()} alt='services description image' width={600} height={800} className={style.imgHeight} />
            )}
          </div>
          <div className="col-12 col-lg-7 ps-lg-5 d-flex flex-column align-items-streach">
            <MainTitle title={category.title} />
            <Paragraph text={category.categoryDescription} />
          </div>
        </div>
      </div>

      {/* loop */}
      <div className=''>
        <div>
          {Object.keys(groupedServices).slice(0, 2).map((title, index) => (
            <div key={index}>
              <DescriptionSection
                title={title}
                description={groupedServices[title][0].serviceDescription?.description}
              />
              <div className={`my-3 my-lg-0 section pb-0 ${pageStyle.contactContainer}`}>
                {groupedServices[title].map((service, index) => (
                  <div
                    key={service.serviceName + index}
                    className="p-0 position-relative"
                  >
                    <div
                      className={`p-3 p-md-3 p-lg-4 ${style.serviceInnerItem} ${index % 2 === 0 ? style.roundedBottomLeft : style.roundedTopRight}`}
                    >
                      <div className="d-flex flex-column flex-md-row">
                        <div className="col-12 col-lg-12 d-flex flex-column align-items-start">
                          <div className="d-flex w-100 justify-content-between align-items-top">
                          <h4 className={`${style.se_txt_40}`}>{service.serviceName}</h4>
                          <div className="d-none d-md-flex">
                          <Link href={"/contact"} className={`${style.se_link_a_20}`}>Learn More</Link>
                          </div>
                          </div>
                          <ul className={`${style.pricingList } ${style.se_li_26} `}>
                            {service.pricing.map((price, priceIndex) => (
                              <li key={priceIndex} className={`${style.pricingItem} me-5`}>
                                {price.duration} | Rs.{price.price}.00
                                {price.priceDescription && <span> ({price.priceDescription})</span>}
                              </li>
                            ))}
                          </ul>
                          <Paragraph text={service.serviceItemDescription} />
                          <div className="d-flex d-md-none my-3">
                          <Link href={"/contact"}>Learn More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.darkRectangle} ${index % 2 === 0 ? style.roundedBottomLeftRct : style.roundedTopRightRct}`}></div>
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

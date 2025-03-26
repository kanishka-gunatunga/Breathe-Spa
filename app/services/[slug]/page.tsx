// import { urlFor } from '@/sanity/libs/sanity';
import Image from 'next/image';
import style from '@/styles/services.module.css';
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
      <div className={`d-flex ${style.imageContainer}`}>
        {category.servicesHeroImage && (
          <Image src={urlFor(category.servicesHeroImage).url()} alt='services hero image' width={1920} height={1080} style={{ width: "100vw", height: "auto", objectFit: 'cover' }} />
        )}

      </div>

      <div className="section">
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
              {groupedServices[title].map((service, index) => (
                <div key={service.serviceName + index} className={`${style.serviceInnerItem} section py-2`}>
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-lg-10">
                      <h4>{service.serviceName}</h4>
                      <ul>
                        {service.pricing.map((price, priceIndex) => (
                          <li key={priceIndex}>
                            {price.duration}: ${price.price}
                          </li>
                        ))}
                      </ul>
                      <Paragraph text={service.serviceItemDescription} />
                    </div>
                    <div className="col-12 col-lg-2">
                      <Link href={"/contact"} >Learn More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

import { getServiceCategories } from '@/sanity/libs/api'
import React from 'react'


const page = async () => {

  const services = await getServiceCategories()
  console.log("services : ", services)

  return (
    <div>
      <h1>Our Services</h1>
      {services.map((category) => (
        <div key={category._id}>
          <h2>{category.title}</h2>
          <p>{category.description}</p>
          {category.services.map((service) => (
            <div key={service.serviceSlug.current}>
              <h3>{service.serviceName}</h3>
              <ul>
                {service.pricing.map((price, index) => (
                  <li key={index}>
                    {price.duration} | Rs. {price.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default page
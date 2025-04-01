export const GET_SERVICE_CATEGORIES = `
  *[_type == "serviceCategory"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    "services": services[] {
      serviceName,
      serviceDescription->{
      title,
      description
    },
      pricing[] {
        duration,
        price,
        priceDescription
      }
    }
  }
`
export const GET_SERVICE_CATEGORY_BY_SLUG = `
  *[_type == "serviceCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    servicesHeroImage,
    servicesImage,
    categoryTitle,
    categoryDescription,
    innerHeroTitle,
    "services": services[] {
      serviceName,
      serviceItemDescription,
      serviceDescription->{
        title,
        description
      },
      pricing[] {
        duration,
        price,
        priceDescription
      }
    }
  }
`;



export const GET_SERVICE_MAIN_PAGE_DATA = `
   *[_type == "serviceMainPage"] {
        _id,
        title,
        mainImage,
        servicesHeroImage,
        description,
        tagLine,
        tagdescription
      }
`;

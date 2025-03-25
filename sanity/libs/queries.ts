export const GET_SERVICE_CATEGORIES = `
  *[_type == "serviceCategory"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    "services": services[] {
      serviceName,
      serviceSlug,
      pricing[] {
        duration,
        price
      }
    }
  }
`

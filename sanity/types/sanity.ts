export interface ServiceCategory {
    _id: string
    _type: 'serviceCategory'
    title: string
    slug: {
      current: string
    }
    mainImage?: Image
    description: string
    services: Service[]
  }
  
  export interface Service {
    serviceName: string
    serviceSlug: {
      current: string
    }
    pricing: Pricing[]
  }
  
  export interface Pricing {
    duration: string
    price: number
  }
  
  export interface Image {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  
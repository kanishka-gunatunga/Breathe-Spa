export interface ServiceCategory {
    _id: string
    _type: 'serviceCategory'
    title: string,
    slug: {
      current: string
    }
    mainImage?: Image
    servicesHeroImage?: Image
    innerHeroTitle: string
    servicesImage?:string
    categoryTitle: string
    description: string
    categoryDescription: string
    services: Service[]
  }
  
  export interface Service {
    serviceName: string
    serviceItemDescription: string
    serviceDescription: ServiceDescription;
    pricing: Pricing[]
  }
  export interface ServiceDescription {
    title: string;
    description: string;
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
  
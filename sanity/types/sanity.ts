import {PortableTextBlock, TypedObject } from "@portabletext/types";

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
  servicesImage?: string
  categoryTitle: string
  description: string
  categoryDescription: PortableTextBlock[]
  homeDescription: string
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
  price: string
  priceDescription: string
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface ServiceMainData {
  _id: string
  title: string,
  mainImage?: Image
  servicesHeroImage?: Image
  description: string
  tagLine: string
  tagDescription: string
}

export interface AboutMainData {
  _id: string
  title: string,
  AboutsHeroImage?: Image
  sectionOneTitle: string,
  sectionOneImage?: Image
  sectionOneDescription: string
  sectionOneButton: string
  sectionOneButtonLink: string
  secTwoTitle: string,
  sectionTwoImage?: Image,
  sectionTwoDescription: string,
  sectionTwoButton: string,
  sectionTwoButtonLink: string
}

export interface TeamData {
  _id: string
  title: string,
  teamArray: Member[]
}

export interface Member {
  name: string
  description: string
  mainImage?: Image
}


export interface TestimonialData {
  _id: string
  title: string,
  testimonialsArray: Client[]
}

export interface Client {
  name: string
  position: string
  rate: string
  description: string
  mainImage?: Image
}

export interface Terms {
  _id: string
  title: string
  subTitle: string
  body: TypedObject[];
}

export interface Ethos {
  _id: string
  title: string
  description: string
  ethosArray: EthosItem[];
}

export interface EthosItem {
  name: string
  description: string
  mainImage ?: Image
  button: string
  link: string
}

export interface HomeData {
  _id: string
  heroArray: HeroImage[]
  sectionOneTitle: string,
  sectionOneImage?: Image
  sectionOneDescription: string
  sectionOneButton: string
  sectionOneButtonLink: string
  secTwoTitle: string,
  sectionTwoImage?: Image,
  sectionTwoDescription: string,
  sectionTwoButton: string,
  sectionTwoButtonLink: string
}

export interface HeroImage {
  mainImage ?: Image
}

export interface SiteData {
  _id: string
  logo?: Image
  emailArray: Email[]
  phoneNumberArray: PhoneNumber[]
  openDays: OpenItem[]
  address: string,
  socialMedia: SocialMediaItem[]
}

export interface Email {
  email: string
}

export interface PhoneNumber {
  number: string
}

export interface OpenItem {
  day: string
  time: string
}

export interface SocialMediaItem {
  link: string
  name: string
  icon ?: Image
}

export interface BlogData {
  _id: string
  slug: string | { current: string };
  feturedText: string
  feturedImage?: Image
  mainImage?: Image
  title: string
  publishedAt: string
  body: TypedObject[];
}

export interface ExclusiveDetails {
  title: string
  description: string
  link: string
  buttonTxt: string
}


export interface ContactData {
  _id: string
  title: string
  description: string
}
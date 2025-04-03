import { sanityClient } from './sanity'
import { GET_ABOUT_PAGE_DATA, GET_ETHOS_DATA, GET_SERVICE_CATEGORIES, GET_SERVICE_CATEGORY_BY_SLUG, GET_SERVICE_MAIN_PAGE_DATA, GET_TEAM_DATA, GET_TERMS_DATA, GET_TESTIMONIAL_DATA } from './queries'
import { AboutMainData, Ethos, ServiceCategory, ServiceMainData, TeamData, Terms, TestimonialData } from '@/sanity/types'

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  return sanityClient.fetch(GET_SERVICE_CATEGORIES)
}

export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
  return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, { slug });
};

export async function getServiceMainPageData(): Promise<ServiceMainData[]> {
  return sanityClient.fetch(GET_SERVICE_MAIN_PAGE_DATA)
}

export async function getAboutMainPageData(): Promise<AboutMainData[]> {
  return sanityClient.fetch(GET_ABOUT_PAGE_DATA)
}

export async function getTeamData(): Promise<TeamData[]> {
  return sanityClient.fetch(GET_TEAM_DATA)
}

export async function getTestimonialData(): Promise<TestimonialData[]> {
  return sanityClient.fetch(GET_TESTIMONIAL_DATA)
}

export async function getEthosData(): Promise<Ethos[]> {
  return sanityClient.fetch(GET_ETHOS_DATA)
}

export async function getTermsData(): Promise<Terms[]> {
  return sanityClient.fetch(GET_TERMS_DATA)
}
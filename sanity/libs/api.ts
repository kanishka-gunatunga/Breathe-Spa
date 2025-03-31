import { sanityClient } from './sanity'
import { GET_SERVICE_CATEGORIES, GET_SERVICE_CATEGORY_BY_SLUG, GET_SERVICE_MAIN_PAGE_DATA } from './queries'
import { ServiceCategory, ServiceMainData } from '@/sanity/types'

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  return sanityClient.fetch(GET_SERVICE_CATEGORIES)
}

export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
  return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, { slug });
};

export async function getServiceMainPageData(): Promise<ServiceMainData[]> {
  return sanityClient.fetch(GET_SERVICE_MAIN_PAGE_DATA)
}

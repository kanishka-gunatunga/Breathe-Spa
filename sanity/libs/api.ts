import { sanityClient } from './sanity'
import { GET_SERVICE_CATEGORIES } from './queries'
import { ServiceCategory } from '@/sanity/types'

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  return sanityClient.fetch(GET_SERVICE_CATEGORIES)
}

import { sanityClient } from './sanity'
import { GET_SERVICE_CATEGORIES, GET_SERVICE_CATEGORY_BY_SLUG } from './queries'
import { ServiceCategory } from '@/sanity/types'

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  return sanityClient.fetch(GET_SERVICE_CATEGORIES)
}

export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
  return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, { slug });
};


// export const getServiceBySlug = async (slug: string): Promise<ServiceCategory | null> => {
//   try {
//     const query = `
//       *[_type == "serviceCategory" && slug.current == ${slug}][0] {
//         _id,
//         title,
//         slug,
//         servicesHeroImage,
//         servicesImage,
//         categoryTitle,
//         categoryDescription,
//         innerHeroTitle,
//         "services": services[] {
//           serviceName,
//           serviceDescription->{
//             title,
//             description
//           },
//           pricing[] {
//             duration,
//             price
//           }
//         }
//       }
//     `;

//     const params = { slug };
//     const category: ServiceCategory = await sanityClient.fetch(query, params);
//     return category || null;
//   } catch (error) {
//     console.error('Error fetching service data by slug:', error);
//     return null;
//   }
// };
import {sanityClient} from './sanity'
import {
    GET_ABOUT_PAGE_DATA,
    GET_BLOG_BY_SLUG,
    GET_BLOG_DATA,
    GET_CAREER_PAGE_DATA,
    GET_CONTACT_PAGE_DATA,
    GET_ETHOS_DATA,
    GET_EXCLUSIVE_DATA,
    GET_HOME_DATA, GET_SEO,
    GET_SERVICE_CATEGORIES,
    GET_SERVICE_CATEGORY_BY_SLUG,
    GET_SERVICE_MAIN_PAGE_DATA,
    GET_SITE_DATA,
    GET_TEAM_DATA,
    GET_TERMS_DATA,
    GET_TESTIMONIAL_DATA
} from './queries'
import {
    AboutMainData,
    BlogData,
    ContactData,
    Ethos,
    ExclusiveDetails,
    HomeData,
    ServiceCategory,
    ServiceMainData,
    SiteData,
    TeamData,
    Terms,
    TestimonialData
} from '@/sanity/types'

export async function getServiceCategories(): Promise<ServiceCategory[]> {
    console.log('Fetching: getServiceCategories')
    return sanityClient.fetch(GET_SERVICE_CATEGORIES)
}

export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
    console.log(`Fetching: fetchServiceCategory - slug: ${slug}`)
    return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, {slug})
}

export async function getServiceMainPageData(): Promise<ServiceMainData[]> {
    console.log('Fetching: getServiceMainPageData')
    return sanityClient.fetch(GET_SERVICE_MAIN_PAGE_DATA)
}

export async function getAboutMainPageData(): Promise<AboutMainData[]> {
    console.log('Fetching: getAboutMainPageData')
    return sanityClient.fetch(GET_ABOUT_PAGE_DATA)
}

export async function getTeamData(): Promise<TeamData[]> {
    console.log('Fetching: getTeamData')
    return sanityClient.fetch(GET_TEAM_DATA)
}

export async function getTestimonialData(): Promise<TestimonialData[]> {
    console.log('Fetching: getTestimonialData')
    return sanityClient.fetch(GET_TESTIMONIAL_DATA)
}

export async function getEthosData(): Promise<Ethos[]> {
    console.log('Fetching: getEthosData')
    return sanityClient.fetch(GET_ETHOS_DATA)
}

export async function getTermsData(): Promise<Terms[]> {
    console.log('Fetching: getTermsData')
    return sanityClient.fetch(GET_TERMS_DATA)
}

export async function getHomeData(): Promise<HomeData[]> {
    console.log('Fetching: getHomeData')
    return sanityClient.fetch(GET_HOME_DATA)
}

export async function getSiteData(): Promise<SiteData[]> {
    console.log('Fetching: getSiteData')
    return sanityClient.fetch(GET_SITE_DATA)
}

export async function getBlogData(): Promise<BlogData[]> {
    console.log('Fetching: getBlogData')
    return sanityClient.fetch(GET_BLOG_DATA)
}

export const fetchBlogData = async (slug: string): Promise<BlogData | null> => {
    console.log(`Fetching: fetchBlogData - slug: ${slug}`)
    return await sanityClient.fetch(GET_BLOG_BY_SLUG, {slug})
}

export async function getExclusiveData(): Promise<ExclusiveDetails[]> {
    console.log('Fetching: getExclusiveData')
    return sanityClient.fetch(GET_EXCLUSIVE_DATA)
}

export async function getContactData(): Promise<ContactData[]> {
    console.log('Fetching: getContactData')
    return sanityClient.fetch(GET_CONTACT_PAGE_DATA)
}

export async function getCareerData() {
    console.log('Fetching: getCareerData')
    return sanityClient.fetch(GET_CAREER_PAGE_DATA)
}

export async function getMetadata (page: string) {
    return sanityClient.fetch(GET_SEO, { page });
}


// export async function getServiceCategories(): Promise<ServiceCategory[]> {
//   return sanityClient.fetch(GET_SERVICE_CATEGORIES)
// }

// export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
//   return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, { slug });
// };

// export async function getServiceMainPageData(): Promise<ServiceMainData[]> {
//   return sanityClient.fetch(GET_SERVICE_MAIN_PAGE_DATA)
// }

// export async function getAboutMainPageData(): Promise<AboutMainData[]> {
//   return sanityClient.fetch(GET_ABOUT_PAGE_DATA)
// }

// export async function getTeamData(): Promise<TeamData[]> {
//   return sanityClient.fetch(GET_TEAM_DATA)
// }

// export async function getTestimonialData(): Promise<TestimonialData[]> {
//   return sanityClient.fetch(GET_TESTIMONIAL_DATA)
// }

// export async function getEthosData(): Promise<Ethos[]> {
//   return sanityClient.fetch(GET_ETHOS_DATA)
// }

// export async function getTermsData(): Promise<Terms[]> {
//   return sanityClient.fetch(GET_TERMS_DATA)
// }

// export async function getHomeData(): Promise<HomeData[]> {
//   return sanityClient.fetch(GET_HOME_DATA)
// }

// export async function getSiteData(): Promise<SiteData[]> {
//   return sanityClient.fetch(GET_SITE_DATA)
// }

// export async function getBlogData(): Promise<BlogData[]> {
//   return sanityClient.fetch(GET_BLOG_DATA)
// }

// export const fetchBlogData = async (slug: string): Promise<BlogData | null> => {
//   return await sanityClient.fetch(GET_BLOG_BY_SLUG, { slug });
// };

// export async function getExclusiveData(): Promise<ExclusiveDetails[]> {
//   return sanityClient.fetch(GET_EXCLUSIVE_DATA)
// }

// export async function getContactData(): Promise<ContactData[]> {
//   return sanityClient.fetch(GET_CONTACT_PAGE_DATA)
// }
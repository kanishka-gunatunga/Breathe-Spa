// import {sanityClient} from './sanity'
// import {
//     GET_ABOUT_PAGE_DATA,
//     GET_BLOG_BY_SLUG,
//     GET_BLOG_DATA,
//     GET_CAREER_PAGE_DATA,
//     GET_CONTACT_PAGE_DATA,
//     GET_ETHOS_DATA,
//     GET_EXCLUSIVE_DATA,
//     GET_HOME_DATA, GET_SEO,
//     GET_SERVICE_CATEGORIES,
//     GET_SERVICE_CATEGORY_BY_SLUG,
//     GET_SERVICE_MAIN_PAGE_DATA,
//     GET_SITE_DATA,
//     GET_TEAM_DATA,
//     GET_TERMS_DATA,
//     GET_TESTIMONIAL_DATA
// } from './queries'
// import {
//     AboutMainData,
//     BlogData,
//     ContactData,
//     Ethos,
//     ExclusiveDetails,
//     HomeData,
//     ServiceCategory,
//     ServiceMainData,
//     SiteData,
//     TeamData,
//     Terms,
//     TestimonialData
// } from '@/sanity/types'
//
// export async function getServiceCategories(): Promise<ServiceCategory[]> {
//     console.log('Fetching: getServiceCategories')
//     return sanityClient.fetch(GET_SERVICE_CATEGORIES)
// }
//
// export const fetchServiceCategory = async (slug: string): Promise<ServiceCategory | null> => {
//     console.log(`Fetching: fetchServiceCategory - slug: ${slug}`)
//     return await sanityClient.fetch(GET_SERVICE_CATEGORY_BY_SLUG, {slug})
// }
//
// export async function getServiceMainPageData(): Promise<ServiceMainData[]> {
//     console.log('Fetching: getServiceMainPageData')
//     return sanityClient.fetch(GET_SERVICE_MAIN_PAGE_DATA)
// }
//
// export async function getAboutMainPageData(): Promise<AboutMainData[]> {
//     console.log('Fetching: getAboutMainPageData')
//     return sanityClient.fetch(GET_ABOUT_PAGE_DATA)
// }
//
// export async function getTeamData(): Promise<TeamData[]> {
//     console.log('Fetching: getTeamData')
//     return sanityClient.fetch(GET_TEAM_DATA)
// }
//
// export async function getTestimonialData(): Promise<TestimonialData[]> {
//     console.log('Fetching: getTestimonialData')
//     return sanityClient.fetch(GET_TESTIMONIAL_DATA)
// }
//
// export async function getEthosData(): Promise<Ethos[]> {
//     console.log('Fetching: getEthosData')
//     return sanityClient.fetch(GET_ETHOS_DATA)
// }
//
// export async function getTermsData(): Promise<Terms[]> {
//     console.log('Fetching: getTermsData')
//     return sanityClient.fetch(GET_TERMS_DATA)
// }
//
// export async function getHomeData(): Promise<HomeData[]> {
//     console.log('Fetching: getHomeData')
//     return sanityClient.fetch(GET_HOME_DATA)
// }
//
// export async function getSiteData(): Promise<SiteData[]> {
//     console.log('Fetching: getSiteData')
//     return sanityClient.fetch(GET_SITE_DATA)
// }
//
// export async function getBlogData(): Promise<BlogData[]> {
//     console.log('Fetching: getBlogData')
//     return sanityClient.fetch(GET_BLOG_DATA)
// }
//
// export const fetchBlogData = async (slug: string): Promise<BlogData | null> => {
//     console.log(`Fetching: fetchBlogData - slug: ${slug}`)
//     return await sanityClient.fetch(GET_BLOG_BY_SLUG, {slug})
// }
//
// export async function getExclusiveData(): Promise<ExclusiveDetails[]> {
//     console.log('Fetching: getExclusiveData')
//     return sanityClient.fetch(GET_EXCLUSIVE_DATA)
// }
//
// export async function getContactData(): Promise<ContactData[]> {
//     console.log('Fetching: getContactData')
//     return sanityClient.fetch(GET_CONTACT_PAGE_DATA)
// }
//
// export async function getCareerData() {
//     console.log('Fetching: getCareerData')
//     return sanityClient.fetch(GET_CAREER_PAGE_DATA)
// }
//
// export async function getMetadata (page: string) {
//     return sanityClient.fetch(GET_SEO, { page });
// }


import {sanityClient} from './sanity'
import {
    aboutQuery,
    blogPostQuery,
    blogQuery,
    careersQuery,
    contactQuery,
    GET_ABOUT_PAGE_DATA,
    GET_BLOG_BY_SLUG,
    GET_CONTACT_PAGE_DATA,
    GET_ETHOS_DATA,
    GET_EXCLUSIVE_DATA,
    GET_HOME_DATA,
    GET_SEO,
    GET_SERVICE_CATEGORIES,
    GET_SERVICE_CATEGORY_BY_SLUG,
    GET_SERVICE_MAIN_PAGE_DATA,
    GET_SITE_DATA,
    GET_TEAM_DATA,
    GET_TESTIMONIAL_DATA,
    getServiceCategoriesQuery,
    homeQuery,
    serviceCategoryQuery, servicePageQuery,
    siteDataQuery,
    termsQuery
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
    TermsData,
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

export async function getTermsData(): Promise<TermsData> {
    console.log('Fetching: getTermsData')
    return sanityClient.fetch(termsQuery)
}

export async function getHomeData(): Promise<HomeData[]> {
    console.log('Fetching: getHomeData')
    return sanityClient.fetch(GET_HOME_DATA)
}

export async function getSiteData(): Promise<SiteData[]> {
    console.log('Fetching: getSiteData')
    return sanityClient.fetch(GET_SITE_DATA)
}

// export async function getBlogData(): Promise<BlogData[]> {
//     console.log('Fetching: getBlogData')
//     return sanityClient.fetch(GET_BLOG_DATA)
// }

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
    return sanityClient.fetch(careersQuery)
}

export async function getMetadata(page: string) {
    return sanityClient.fetch(GET_SEO, {page});
}


export async function getServiceData() {
    console.log('Fetching: getServiceData')
    return sanityClient.fetch(servicePageQuery)
}

export async function getCategories() {
    console.log('Fetching: getServiceCategories')
    return sanityClient.fetch(getServiceCategoriesQuery)
}

export async function getServiceCategory(slug: string) {
    return await sanityClient.fetch(serviceCategoryQuery, {slug});
}

export async function getBlogData() {
    return await sanityClient.fetch(blogQuery);
}

export async function getBlogPost(slug: string) {
    return await sanityClient.fetch(blogPostQuery, {slug});
}

export async function getAboutData() {
    return await sanityClient.fetch(aboutQuery);
}

export async function getContactDetails() {
    return await sanityClient.fetch(contactQuery);
}

export async function getHomeDetails(){
    return await sanityClient.fetch(homeQuery);
}


export async function siteDetails() {
    return await sanityClient.fetch(siteDataQuery);
}
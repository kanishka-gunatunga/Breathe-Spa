export const GET_SERVICE_CATEGORIES = `
  *[_type == "serviceCategory"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    homeDescription,
    "services": services[] {
      serviceName,
      serviceDescription->{
      title,
      description
    },
      pricing[] {
        duration,
        price,
        priceDescription
      }
    }
  }
`
export const GET_SERVICE_CATEGORY_BY_SLUG = `
  *[_type == "serviceCategory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    servicesHeroImage,
    servicesImage,
    categoryTitle,
    categoryDescription,
    innerHeroTitle,
    "services": services[] {
      serviceName,
      serviceItemDescription,
      serviceDescription->{
        title,
        description
      },
      pricing[] {
        duration,
        price,
        priceDescription
      }
    }
  }
`;


export const GET_SERVICE_MAIN_PAGE_DATA = `
   *[_type == "serviceMainPage"] {
        _id,
        title,
        mainImage,
        servicesHeroImage,
        description,
        tagLine,
        tagDescription
      }
`;


export const GET_ABOUT_PAGE_DATA = `
   *[_type == "aboutMainPage"] {
        _id,
        AboutsHeroImage,
        sectionOneTitle,
        sectionOneImage,
        sectionOneDescription,
        sectionOneButton,
        sectionOneButtonLink,
        secTwoTitle,
        sectionTwoImage,
        sectionTwoDescription,
        sectionTwoButton,
        sectionTwoButtonLink
      }
`;


export const GET_TEAM_DATA = `
   *[_type == "team"] {
        _id,
        title,
        teamArray[]{
        name,
        description,
        mainImage
        },
       
      }
`;

export const GET_TESTIMONIAL_DATA = `
   *[_type == "testimonials"] {
        _id,
        title,
        testimonialsArray[]{
        name,
        position,
        rate,
        description,
        mainImage
        },
       
      }
`;

export const GET_ETHOS_DATA = `
   *[_type == "ethos"] {
        _id,
        title,
        description,
        ethosArray[]{
          name,
          description,
          mainImage,
          button,
          link
        },
       
      }
`;

export const GET_TERMS_DATA = `
   *[_type == "termsAndConditions"] {
        _id,
        title,
        subTitle,
        body,
      }
`;


export const GET_HOME_DATA = `
   *[_type == "home"] {
        _id,
      heroArray,
      sectionOneTitle,
      sectionOneImage,
      sectionOneDescription,
      sectionOneButton,
      sectionOneButtonLink,
      secTwoTitle,
      sectionTwoImage,
      sectionTwoDescription,
      sectionTwoButton,
      sectionTwoButtonLink,
      }
`;

export const GET_SITE_DATA = `
   *[_type == "siteData"] {
        _id,
      logo,
      emailArray[]{
        email,
      },
      phoneNumberArray[]{
        number,
      },
      openDays[]{
        day,
        time
      },
      address,
      socialMedia[]{
        link,
        name,
        icon
      },
    }
`;

export const GET_BLOG_DATA = `
   *[_type == "post"] {
        _id,
      title,
      slug,
      feturedText,
      feturedImage,
      mainImage,
      publishedAt,
      body
    }
`;

export const GET_BLOG_BY_SLUG = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    feturedText,
    feturedImage,
    mainImage,
    publishedAt,
    body
  }
`;

export const GET_EXCLUSIVE_DATA = `
   *[_type == "exclusiveDeals"] {
      _id,
      title,
      description,
      buttonTxt,
      link,
    }
`;

export const GET_CONTACT_PAGE_DATA = `
   *[_type == "contactMain"] {
      _id,
      title,
      description,
    }
`;


export const GET_CAREER_PAGE_DATA = `
    *[_type == "careersPage"][0] {
      title,
      subtitle,
      careers[] {
        positionTitle,
        description,
        requirements,
        email
      }
    }
  `
;

export const GET_SEO = `*[_type == "seo" && page == $page][0] {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalUrl
  }`
;
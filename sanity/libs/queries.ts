// export const GET_SERVICE_CATEGORIES = `
//   *[_type == "serviceCategory"] | order(_createdAt desc) {
//     _id,
//     title,
//     slug,
//     mainImage,
//     description,
//     homeDescription,
//     "services": services[] {
//       serviceName,
//       serviceDescription->{
//       title,
//       description
//     },
//       pricing[] {
//         duration,
//         price,
//         priceDescription
//       }
//     }
//   }
// `
// export const GET_SERVICE_CATEGORY_BY_SLUG = `
//   *[_type == "serviceCategory" && slug.current == $slug][0] {
//     _id,
//     title,
//     slug,
//     servicesHeroImage,
//     servicesImage,
//     categoryTitle,
//     categoryDescription,
//     innerHeroTitle,
//     "services": services[] {
//       serviceName,
//       serviceItemDescription,
//       serviceDescription->{
//         title,
//         description
//       },
//       pricing[] {
//         duration,
//         price,
//         priceDescription
//       }
//     }
//   }
// `;
//
//
// export const GET_SERVICE_MAIN_PAGE_DATA = `
//    *[_type == "serviceMainPage"] {
//         _id,
//         title,
//         mainImage,
//         servicesHeroImage,
//         description,
//         tagLine,
//         tagDescription
//       }
// `;
//
//
// export const GET_ABOUT_PAGE_DATA = `
//    *[_type == "aboutMainPage"] {
//         _id,
//         AboutsHeroImage,
//         sectionOneTitle,
//         sectionOneImage,
//         sectionOneDescription,
//         sectionOneButton,
//         sectionOneButtonLink,
//         secTwoTitle,
//         sectionTwoImage,
//         sectionTwoDescription,
//         sectionTwoButton,
//         sectionTwoButtonLink
//       }
// `;
//
//
// export const GET_TEAM_DATA = `
//    *[_type == "team"] {
//         _id,
//         title,
//         teamArray[]{
//         name,
//         description,
//         mainImage
//         },
//
//       }
// `;
//
// export const GET_TESTIMONIAL_DATA = `
//    *[_type == "testimonials"] {
//         _id,
//         title,
//         testimonialsArray[]{
//         name,
//         position,
//         rate,
//         description,
//         mainImage
//         },
//
//       }
// `;
//
// export const GET_ETHOS_DATA = `
//    *[_type == "ethos"] {
//         _id,
//         title,
//         description,
//         ethosArray[]{
//           name,
//           description,
//           mainImage,
//           button,
//           link
//         },
//
//       }
// `;
//
// export const GET_TERMS_DATA = `
//    *[_type == "termsAndConditions"] {
//         _id,
//         title,
//         subTitle,
//         body,
//       }
// `;
//
//
// export const GET_HOME_DATA = `
//    *[_type == "home"] {
//         _id,
//       heroArray,
//       sectionOneTitle,
//       sectionOneImage,
//       sectionOneDescription,
//       sectionOneButton,
//       sectionOneButtonLink,
//       secTwoTitle,
//       sectionTwoImage,
//       sectionTwoDescription,
//       sectionTwoButton,
//       sectionTwoButtonLink,
//       }
// `;
//
// export const GET_SITE_DATA = `
//    *[_type == "siteData"] {
//         _id,
//       logo,
//       emailArray[]{
//         email,
//       },
//       phoneNumberArray[]{
//         number,
//       },
//       openDays[]{
//         day,
//         time
//       },
//       address,
//       socialMedia[]{
//         link,
//         name,
//         icon
//       },
//     }
// `;
//
// export const GET_BLOG_DATA = `
//    *[_type == "post"] {
//         _id,
//       title,
//       slug,
//       feturedText,
//       feturedImage,
//       mainImage,
//       publishedAt,
//       body
//     }
// `;
//
// export const GET_BLOG_BY_SLUG = `
//   *[_type == "post" && slug.current == $slug][0] {
//     _id,
//     title,
//     slug,
//     feturedText,
//     feturedImage,
//     mainImage,
//     publishedAt,
//     body
//   }
// `;
//
// export const GET_EXCLUSIVE_DATA = `
//    *[_type == "exclusiveDeals"] {
//       _id,
//       title,
//       description,
//       buttonTxt,
//       link,
//     }
// `;
//
// export const GET_CONTACT_PAGE_DATA = `
//    *[_type == "contactMain"] {
//       _id,
//       title,
//       description,
//     }
// `;
//
//
// export const GET_CAREER_PAGE_DATA = `
//     *[_type == "careersPage"][0] {
//       title,
//       subtitle,
//       careers[] {
//         positionTitle,
//         description,
//         requirements,
//         email
//       }
//     }
//   `
// ;
//
// export const GET_SEO = `*[_type == "seo" && page == $page][0] {
//     title,
//     description,
//     keywords,
//     ogTitle,
//     ogDescription,
//     ogImage,
//     canonicalUrl
//   }`
// ;


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

export const termsQuery = `*[_type == "terms"][0] {
  pageTitle,
  contactLink,
  termsSections[] {
    title,
    subTitle,
    body
  }
}`;

// export const aboutQuery = `*[_type == "about"][0] {
//   title,
//   heroImage,
//   sectionOne {
//     sectionOneTitle,
//     sectionOneDescription,
//     sectionOneImage,
//     sectionOneButton,
//     sectionOneButtonLink
//   },
//   sectionTwo {
//     secTwoTitle,
//     sectionTwoDescription,
//     sectionTwoImage,
//     sectionTwoButton,
//     sectionTwoButtonLink
//   },
//   testimonials {
//     title,
//     testimonialsArray[] {
//       name,
//       position,
//       description,
//       rate
//     }
//   },
//   exclusiveDeals {
//     title,
//     description,
//     buttonTxt,
//     link
//   }
// }`;

// export const blogQuery = `*[_type == "blog"][0] {
//   pageTitle,
//   heroImage,
//   posts[] {
//     title,
//     slug {
//       current
//     },
//     mainImage,
//     featuredText,
//     body,
//     publishedAt
//   }
// }`;

// export const blogPostQuery = `*[_type == "blog" && posts[][slug.current == $slug][0]][0] {
//   posts[slug.current == $slug][0] {
//     title,
//     slug {
//       current
//     },
//     mainImage,
//     featuredText,
//     body,
//     publishedAt
//   }
// }`;

export const careersQuery = `*[_type == "careers"][0] {
  pageTitle,
  subtitle,
  careers[] {
    positionTitle,
    description,
    requirements,
    email
  }
}`;

// export const contactQuery = `*[_type == "contact"][0] {
//   title,
//   heroImage,
//   contactSection {
//     title,
//     description,
//     contactImage
//   },
//   siteInfo {
//     address,
//     openDays[] {
//       day,
//       time
//     },
//     phoneNumberArray[] {
//       number
//     },
//     emailArray[] {
//       email
//     }
//   },
//   exclusiveDeals {
//     title,
//     description,
//     buttonTxt,
//     link
//   },
//   mapEmbed
// }`;


// export const servicesQuery = `*[_type == "services"][0] {
//   title,
//   servicesHeroImage,
//   introduction {
//     title,
//     description,
//     mainImage
//   },
//   tagline {
//     tagLine,
//     tagDescription
//   },
//   serviceCategories[] {
//     title,
//     slug {
//       current
//     },
//     description,
//     categoryTitle,
//     categoryDescription,
//     servicesHeroImage,
//     innerHeroTitle,
//     servicesImage,
//     mainImage,
//     services[] {
//       serviceName,
//       serviceDescription {
//         title,
//         description
//       },
//       serviceItemDescription,
//       pricing[] {
//         duration,
//         price,
//         priceDescription
//       }
//     }
//   }
// }`;

// export const serviceCategoryQuery = `*[_type == "services" && serviceCategories[][slug.current == $slug][0]][0] {
//   serviceCategories[slug.current == $slug][0] {
//     title,
//     slug {
//       current
//     },
//     description,
//     categoryTitle,
//     categoryDescription,
//     servicesHeroImage,
//     innerHeroTitle,
//     servicesImage,
//     mainImage,
//     services[] {
//       serviceName,
//       serviceDescription {
//         title,
//         description
//       },
//       serviceItemDescription,
//       pricing[] {
//         duration,
//         price,
//         priceDescription
//       }
//     }
//   }
// }`;

// export const homeQuery = `*[_type == "home"][0] {
//   title,
//   heroArray[] {
//     mainImage,
//     altText
//   },
//   sectionOne {
//     sectionOneTitle,
//     sectionOneDescription,
//     sectionOneImage,
//     sectionOneButton,
//     sectionOneButtonLink
//   },
//   services {
//     serviceCategories[] {
//       title,
//       slug {
//         current
//       },
//       homeDescription
//     },
//     openDays[] {
//       day,
//       time
//     },
//     phoneNumberArray[] {
//       number
//     },
//     emailArray[] {
//       email
//     }
//   },
//   ethos {
//     title,
//     description,
//     ethosArray[] {
//       name,
//       description,
//       mainImage,
//       button,
//       link
//     }
//   },
//   sectionTwo {
//     secTwoTitle,
//     sectionTwoDescription,
//     sectionTwoImage,
//     sectionTwoButton,
//     sectionTwoButtonLink
//   },
//   recentArticles {
//     articles[]->{
//       pageTitle,
//       posts[] {
//         title,
//         slug {
//           current
//         },
//         mainImage,
//         feturedText,
//         publishedAt
//       }
//     }
//   },
//   exclusiveDeals {
//     title,
//     description,
//     buttonTxt,
//     link
//   }
// }`;


// export const siteDataQuery = `*[_type == "siteData"][0] {
//   title,
//   logo,
//   emailArray[] {
//     email
//   },
//   phoneNumberArray[] {
//     number
//   },
//   openDays[] {
//     day,
//     time
//   },
//   address,
//   socialMedia[] {
//     name,
//     link,
//     icon
//   },
//   navigation[] {
//     title,
//     link,
//     dropdownItems[] {
//       title,
//       link
//     }
//   },
//   headerScripts,
//   footerScripts
// }`;


// export const servicesQuery = `*[_type == "services"][0] {
//   title,
//   servicesHeroImage,
//   introduction {
//     title,
//     description,
//     mainImage
//   },
//   tagline {
//     tagLine,
//     tagDescription
//   }
// }`;

export const servicePageQuery = `
  *[_type == "services"][0]{
    _id,
    title,
    servicesHeroImage{
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    },
    introduction{
      title,
      description,
      mainImage{
        asset->{
          _id,
          url
        },
        hotspot,
        crop
      }
    },
    tagline{
      tagLine,
      tagDescription
    }
  }
`;


export const serviceCategoryQuery = `*[_type == "serviceCategory" && slug.current == $slug][0] {
  categoryTitle,
  slug {
    current
  },
  innerHeroTitle,
  servicesHeroImage {
    ...,
    alt
  },
  descriptionTitle,
  categoryDescription,
  servicesInnerImage {
    ...,
    alt
  },
  services[] {
    serviceName,
    serviceDescription {
      title,
      description
    },
    serviceItemDescription,
    pricing[] {
      duration,
      price,
      priceDescription
    }
  },
  seo {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage {
      ...,
      alt
    }
  }
}`;


export const getServiceCategoriesQuery = `*[_type == "serviceCategory"] {
  categoryTitle,
  slug {
    current
  },
  innerHeroTitle,
  servicesHeroImage {
    ...,
    alt
  },
  descriptionTitle,
  categoryDescription,
  categoryShortDescription,
  servicesInnerImage {
    ...,
    alt
  },
  servicesMainImage {
    ...,
    alt
  },
  services[] {
    serviceName,
    serviceDescription {
      title,
      description
    },
    serviceItemDescription,
    pricing[] {
      duration,
      price,
      priceDescription
    }
  },
  seo {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage {
      ...,
      alt
    }
  }
}`;


export const blogQuery = `*[_type == "blog"][0] {
  pageTitle,
  heroImage,
  posts[] {
    _id,
    title,
    slug {
      current
    },
    mainImage {
      ...,
      alt
    },
    featureImage {
    ...,
      alt
    },
    featuredText,
    body,
    publishedAt,
    seo {
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage {
        ...,
        alt
      }
    }
  }
}`;


// export const blogPostQuery = `*[_type == "blog"][0].posts[slug.current == $slug][0] {
//   _id,
//   _type,
//   pageTitle,
//   heroImage,
//   posts[slug.current == $slug][0] {
//     title,
//     slug {
//       current
//     },
//     mainImage {
//       ...,
//       alt
//     },
//     featureImage {
//     ...,
//       alt
//     },
//     featuredText,
//     body,
//     publishedAt,
//     seo {
//       title,
//       description,
//       keywords,
//       ogTitle,
//       ogDescription,
//       ogImage {
//         ...,
//         alt
//       }
//     }
//   }
// }`;

export const blogPostQuery = `*[_type == "blog"][0].posts[slug.current == $slug][0] {
  _id, 
  _type,
  title,
  slug {
    current
  },
  mainImage {
    asset->{
      _id,
      url
    },
    hotspot,
    crop
  },
  featureImage {
    asset->{
      _id,
      url
    },
    hotspot,
    crop
  },
  featuredText,
  body,
  publishedAt,
  seo {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    }
  }
}`;


export const aboutQuery = `*[_type == "about"][0] {
  title,
  heroImage {
    ...,
    alt
  },
  sectionOne {
    sectionOneTitle,
    sectionOneDescription,
    sectionOneImage {
      ...,
      alt
    },
    sectionOneButton,
    sectionOneButtonLink
  },
  sectionTwo {
    secTwoTitle,
    sectionTwoDescription,
    sectionTwoImage {
      ...,
      alt
    },
    sectionTwoButton,
    sectionTwoButtonLink
  },
  testimonials {
    title,
    testimonialsArray[] {
      name,
      position,
      description,
      rate
    }
  },
  exclusiveDeals {
    title,
    description,
    buttonTxt,
    link
  }
}`;


export const contactQuery = `*[_type == "contact"][0] {
  title,
  heroImage {
    ...,
    alt
  },
  contactSection {
    title,
    description,
    contactImage {
      ...,
      alt
    }
  },
  siteInfo {
    title,
    description,
    address,
    openDays[] {
      day,
      time
    },
    phoneNumberArray[] {
      number
    },
    emailArray[] {
      email
    }
  },
  exclusiveDeals {
    title,
    description,
    buttonTxt,
    link
  },
  mapEmbed
}`;


export const homeQuery = `*[_type == "home"][0] {
  title,
  heroArray[]{
      _key,
      mainImage{
        asset->{
          _id,
          url
        },
        hotspot,
        crop
      },
      altText
    },
  sectionOne {
    sectionOneTitle,
    sectionOneDescription,
    sectionOneImage {
      ...,
      alt
    },
    sectionOneButton,
    sectionOneButtonLink
  },
  services {
    serviceCategories[] {
      title,
      slug {
        current
      },
      homeDescription
    },
    openDays[] {
      day,
      time
    },
    phoneNumberArray[] {
      number
    },
    emailArray[] {
      email
    }
  },
  ethos {
    title,
    description,
    ethosArray[] {
      name,
      description,
      mainImage {
        ...,
        alt
      },
      button,
      link
    }
  },
  sectionTwo {
    secTwoTitle,
    sectionTwoDescription,
    sectionTwoImage {
      ...,
      alt
    },
    sectionTwoButton,
    sectionTwoButtonLink
  },
  exclusiveDeals {
    title,
    description,
    buttonTxt,
    link
  }
}`;

export const siteDataQuery = `*[_type == "siteData"][0] {
  title,
  logo {
    ...,
    alt
  },
  emailArray[] {
    email
  },
  phoneNumberArray[] {
    number
  },
  openDays[] {
    day,
    time
  },
  address,
  socialMedia[] {
    name,
    link,
    icon {
      ...,
      alt
    }
  },
  navigation[] {
    title,
    link,
    dropdownItems[] {
      title,
      link
    }
  },
  headerScripts,
  footerScripts
}`;
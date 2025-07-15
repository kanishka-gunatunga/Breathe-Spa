// import Image from "next/image";
// import styles from "@/styles/page.module.css";
// import React from "react";
// import ContactLocation from "@/components/servicesComponents/ContactLocation";
// import ContactForm from "@/components/servicesComponents/ContactForm";
// import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
// import {getExclusiveData, getMetadata} from "@/sanity/libs/api";
// import {Metadata} from "next";
// import {urlFor} from "@/sanity/libs/sanity";
//
//
// const Contact = async () => {
//
//     const exclusive = await getExclusiveData();
//
//     return (
//         <div>
//             <ScrollHandler/>
//             <div>
//                 <Image
//                     className={`m-0 p-0`}
//                     src="/contact_hero.png"
//                     width={0}
//                     height={0}
//                     sizes="100%"
//                     style={{width: "100%", height: "auto"}}
//                     alt=""
//                 />
//             </div>
//
//             <section className={`${styles.contactContainer} section pt-5 ${styles.formSection}`}>
//                 <div id="contactForm" className={`row align-items-stretch ${styles.equalHeightRow}`}>
//                     <ContactForm/>
//                 </div>
//             </section>
//             <div>
//                 <ContactLocation/>
//             </div>
//
//             <div className="mt-5">
//                 <div className={`${styles.exclusiveDeals} mt-6`}>
//                     <h3 className={styles.exclusiveTitle}>{exclusive[0]?.title}</h3>
//                     <p className={styles.exclusiveDescription}>
//                         {exclusive[0]?.description}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Contact;
//
//
// export async function generateMetadata(): Promise<Metadata> {
//     const mdata = await getMetadata("contact");
//
//     return {
//         title: mdata?.title || "Breathe Spa - Contact",
//         description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
//         keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
//         openGraph: {
//             title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Contact",
//             description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
//             images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
//             url: mdata?.canonicalUrl || "https://breathespa.vercel.app/contact",
//             type: "website",
//         },
//         alternates: {
//             canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/contact",
//         },
//     };
// }


import Image from "next/image";
import styles from "@/styles/page.module.css";
import React from "react";
import ContactLocation from "@/components/servicesComponents/ContactLocation";
import ContactForm from "@/components/servicesComponents/ContactForm";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import {getContactDetails, getMetadata} from "@/sanity/libs/api";
import {Metadata} from "next";
import {urlFor} from "@/sanity/libs/sanity";


const Contact = async () => {

    // const exclusive = await getExclusiveData();
    const contactData = await getContactDetails();

    return (
        <div>
            <ScrollHandler/>
            <div>
                {contactData.heroImage && (
                <Image
                    className={`m-0 p-0`}
                    src={urlFor(contactData.heroImage).url() || "/contact_hero.png"}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{width: "100%", height: "auto"}}
                    alt=""
                />
                )}
            </div>

            <section className={`${styles.contactContainer} section pt-5 ${styles.formSection}`}>
                <div id="contactForm" className={`row align-items-stretch ${styles.equalHeightRow}`}>
                    <ContactForm
                        title={contactData.contactSection.title}
                        description={contactData.contactSection.description}
                        image={contactData.contactSection.contactImage ? urlFor(contactData.contactSection.contactImage).url() : ''}
                    />
                </div>
            </section>
            <div>
                <ContactLocation contactData={contactData}/>
            </div>

            <div className="mt-5">
                <div className={`${styles.exclusiveDeals} mt-6`}>
                    <h3 className={styles.exclusiveTitle}>{contactData.exclusiveDeals.title}</h3>
                    <p className={styles.exclusiveDescription}>
                        {contactData.exclusiveDeals.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("contact");

    return {
        title: mdata?.title || "Breathe Spa - Contact Us",
        description: mdata?.description || 'Get in touch with Breathe Spa for bookings and inquiries.',
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Contact Us",
            description: mdata?.ogDescription || mdata?.description || 'Contact Breathe Spa to book your wellness experience.',
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/contact",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/contact",
        },
    };
}
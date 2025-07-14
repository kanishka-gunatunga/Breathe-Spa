import React from 'react'
import style from '@/styles/services.module.css'
import pageStyle from '@/styles/page.module.css'
import pageStyles from '@/styles/services.module.css'
import {getMetadata, getTermsData} from '@/sanity/libs/api'
import {PortableText} from 'next-sanity'
import Link from "next/link";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import {Metadata} from "next";
import {urlFor} from "@/sanity/libs/sanity";
import {TermsData} from "@/sanity/types";


const page = async () => {


    const terms: TermsData = await getTermsData();
    console.log("terms: ", terms);

    return (
        <div className='d-flex flex-column'>
            <ScrollHandler/>
            <div className={`section ${pageStyle.contactContainer} py-5`}>
                <div className='d-flex flex-column'>
                    {terms.termsSections.map((term, index) => (
                        <div key={index} className={`section ${pageStyle.contactContainer} py-5`}>
                            <div className="d-flex flex-column text-center mb-3">
                                <h2 className={`${style.termTitle}`}>{term.title}</h2>
                            </div>
                            {term.subTitle && (
                                <div className="d-flex flex-column text-start">
                                    <h4 className={`${style.se_txt_40_awsome} text-center mb-5`}>{term.subTitle}</h4>
                                </div>
                            )}
                            <div className={`d-flex flex-column text-start ${style.blockContent}`}>
                                <PortableText value={term.body}/>
                            </div>
                        </div>
                    ))}

                    <div className="d-flex justify-content-center mt-4">
                        <Link href={terms.contactLink || '/contact#contactForm'}
                              className={`${pageStyles.darkButton} text-center`}>
                            Return to Contact Us Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("terms");

    return {
        title: mdata?.title || "Breathe Spa - Terms",
        description: mdata?.description || "Welcome to Breathe Spa, your destination for wellness, relaxation, and pampering.",
        keywords: mdata?.keywords?.join(", ") || "spa, wellness, relaxation, beauty, treatments",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Breathe Spa - Terms",
            description: mdata?.ogDescription || mdata?.description || "Experience luxury and relaxation at Breathe Spa.",
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/Rectangle4422.png",
            url: mdata?.canonicalUrl || "https://breathespa.vercel.app/",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://breathespa.vercel.app/",
        },
    };
}
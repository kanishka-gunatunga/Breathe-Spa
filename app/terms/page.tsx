import React from 'react'
import style from '@/styles/services.module.css'
import pageStyle from '@/styles/page.module.css'
import pageStyles from '@/styles/services.module.css'
import {getTermsData} from '@/sanity/libs/api'
import {PortableText} from 'next-sanity'
import Link from "next/link";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";


const page = async () => {


    const terms = await getTermsData()
    console.log("terms: ", terms);

    return (
        <div className='d-flex flex-column'>
            <ScrollHandler/>
            <div className={`section ${pageStyle.contactContainer} py-5`}>
                <div className='d-flex flex-column'>
                    {terms.map((term) => (
                        <div key={term._id} className={`section ${pageStyle.contactContainer} py-5`}>
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
                        <Link href="/contact#contactForm" className={`${pageStyles.darkButton} text-center`}>
                            Return to Contact Us Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
import React from 'react'
import style from '@/styles/services.module.css'
import pageStyle from '@/styles/page.module.css'
import { getTermsData } from '@/sanity/libs/api'
import { PortableText } from 'next-sanity'



const page = async () => {
    

    const terms = await getTermsData()
    console.log("terms: ", terms);

    return (
        <div className='d-flex flex-column'>
            <div className={`section ${pageStyle.contactContainer} py-5`}>
                {/* <div className="d-flex flex-column text-center">
                    <h2 className={`${style.se_txt_40_awsome}`}>TERMS & CONDITIONS - “ADVANCE BOOKING OF AN APPOINTMENT”</h2>
                </div>
                <div className="d-flex flex-column text-start">
                    <h4 className={`${style.se_txt_40_awsome} text-center mb-5`}>Deposit, No-Show, & Cancellation Policy</h4>
                    <ol  className={`${style.se_txt_20_awsome}`}>
                        <li>
                            Breathe Day Spa is primarily a “by appointment only” business. Accordingly, it is expected from our valued clients to secure their appointments by advancing a non-refundable deposit of 50% of the total service charges applicable to the intended service since last minute cancellations can have a great impact on our business and its technicians.
                        </li>
                    </ol>
                </div> */}
                <div className='d-flex flex-column'>
                    {terms.map((term) => (
                        <div key={term._id} className={`section ${pageStyle.contactContainer} py-5`}>
                            <div className="d-flex flex-column text-center">
                                <h2 className={`${style.se_txt_40_awsome}`}>{term.title}</h2>
                            </div>
                            {term.subTitle && (
                                <div className="d-flex flex-column text-start">
                                    <h4 className={`${style.se_txt_40_awsome} text-center mb-5`}>{term.subTitle}</h4>
                                </div>
                            )}
                            <div className={`d-flex flex-column text-start ${style.blockContent}`}>
                                <PortableText value={term.body} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
import React from 'react'
import styles from "@/styles/page.module.css";
import Image from 'next/image';
import {getContactData, getSiteData} from "@/sanity/libs/api";


const ContactLocation = async () => {
    const contact = await getContactData();
    const site = await getSiteData();
    return (
        <div>
            <div className={styles.mapHouContainer}>
                <div className={styles.mapMain}>
                    <div className={`${styles.contactContainer} p-4`}>
                        <div className="row">
                            <div className={`col-lg-6 col-md-12 mb-4 ${styles.contact_info_container}`}>
                                <h1 className={styles.sectionTitle}>
                                    {contact?.[0]?.title ?? 'Find us in our quiet, urban wellness retreat'}
                                </h1>
                                <p className={`preserve-linebreaks ${styles.map_hours_desc}`}>
                                    {contact?.[0]?.description ?? 'No description available.'}
                                </p>


                                <h3 className={`${styles.map_hours_title}`}>OPENING
                                    HOURS</h3>
                                <div className="">
                                    {site?.[0]?.openDays.map((item, index) => (
                                        <div key={index}
                                             className="d-flex justify-content-between border-top border-1 border-secondary py-2">
                                            <span className={styles.map_hours_days}>{item.day}</span>
                                            <span className={styles.map_hours_time}>{item.time}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className={`mt-4 border-bottom border-1 border-secondary py-4 ${styles.map_hours_title}`}>CONTACT
                                    US</h3>
                                <div className="">
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/location.png" alt="location icon" width={24} height={24}/>
                                        {site?.[0]?.address}
                                        {/* 14 Albert Cres, Colombo 007 */}
                                    </p>
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/email.png" alt="email icon" width={24} height={24}/>

                                        {site?.[0]?.emailArray.map((item, index) => (
                                            <span key={index}>{item?.email}</span>
                                        ))}
                                    </p>
                                    <p className={`d-flex align-items-center gap-4 ${styles.contact_info}`}>
                                        <Image src="/call.png" alt="phone icon" width={24} height={24}/>
                                        {/* <span>+94 77 231 4888</span> */}
                                        {site?.[0]?.phoneNumberArray.map((item, index) => (
                                            <span key={index}>{item?.number}</span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div id="locationContainer" className={styles.map_container}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.847711096713!2d79.85992937481267!3d6.90880641856629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594fe67ad047%3A0x958aa9f666117ab1!2sBreathe%20Day%20Spa!5e0!3m2!1sen!2slk!4v1742980011520!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0, borderRadius: '15px'}}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLocation
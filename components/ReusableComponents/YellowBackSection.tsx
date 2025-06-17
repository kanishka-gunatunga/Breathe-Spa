'use client';
import React from 'react';
import Image from 'next/image';
import styles from "@/styles/page.module.css";
import MainTitle from '../servicesComponents/MainTitle';
import Paragraph from '../servicesComponents/Paragraph';
import Link from 'next/link';
import pageStyle from '@/styles/services.module.css'


interface YellowBackSectionProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

const YellowBackSection: React.FC<YellowBackSectionProps> = ({ title, description, image, buttonText, buttonLink }) => {

    return (

        <div className={`d-flex position-relative flex-column justify-content-center align-items-center ${styles.shapedBg} py-5`} style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.yellowBack_new}>
                <div className={`${styles.contactContainer} section py-0`}>
                    <div className='w-100 py-5'>
                        <div className="d-flex d-lg-flex d-xl-flex flex-column-reverse flex-lg-row w-100 py-0 py-lg-5 mb-0">

                            <div className={`col-12 col-lg-6 pe-lg-4 d-flex flex-column justify-content-start ${styles.locationContainer}`}>
                                <div className="margin_bottom_150">
                                    <MainTitle title={title} />
                                    <Paragraph text={description} />
                                </div>
                                <Link href={buttonLink}><button type="button" className={`${pageStyle.darkButton}`} style={{fontSize: "18px !important", fontWeight: 600}}>
                                    {buttonText}
                                </button></Link>
                            </div>

                            <div className="col-12 col-lg-6 ps-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
                                <Image src={image} alt="Location" width={640} height={731} className="img-fluid rounded" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default YellowBackSection;

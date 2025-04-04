'use client';
import React from 'react';
import Image from 'next/image';
import styles from "@/styles/page.module.css";
import Button from "@/components/ReusableComponents/Button";
import MainTitle from '../servicesComponents/MainTitle';
import Paragraph from '../servicesComponents/Paragraph';

interface YellowBackSectionProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

const YellowBackSection: React.FC<YellowBackSectionProps> = ({ title, description, image, buttonText, buttonLink }) => {
    
    return (

        <div className={`d-flex position-relative flex-column justify-content-center align-items-center`} style={{ width: "100%", overflow: "hidden" }}>
            <div className={`${styles.shapedBg} py-5`}>
                <div className={`${styles.contactContainer} section py-0`}>
                    <div className='w-100'>
                        <div className="d-flex d-lg-flex d-xl-flex flex-column-reverse flex-lg-row gap-5 w-100 py-0 py-lg-5 mb-5">

                            <div className={`col-12 col-lg-6 d-flex flex-column justify-content-between ${styles.locationContainer}`}>
                                <div>
                                    <MainTitle title={title} />
                                    <Paragraph text={description} />
                                </div>
                                <Button text={buttonText} href={buttonLink} ></Button>
                            </div>

                            <div className="col-12 col-lg-6 d-flex justify-content-center ">
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

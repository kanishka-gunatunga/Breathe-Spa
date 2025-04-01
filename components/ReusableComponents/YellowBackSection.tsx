'use client';
import React from 'react';
import Image from 'next/image';
import styles from "@/styles/page.module.css";
// import style from '@/styles/services.module.css'
import Button from "@/components/ReusableComponents/Button";
import MainTitle from '../servicesComponents/MainTitle';
import Paragraph from '../servicesComponents/Paragraph';

interface YellowBackSectionProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

const YellowBackSection: React.FC<YellowBackSectionProps> = ({ title, description, image, buttonText }) => {
    return (

        <div className={`d-flex position-relative flex-column justify-content-center align-items-center`} style={{ width: "100%", overflow: "hidden" }}>
            {/* <svg
                className={`${styles.YellowBackMobileHide}`}
                width="100%"
                height="100%"
                viewBox="0 0 1440 1196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1032V0C1 0 460.614 94.4288 746.5 94.5C1032.74 94.5713 1449 0 1449 0V1032H1Z" fill="#F3EEE7" />
                <path d="M376.779 1075.03C219.86 1081.32 0 1134.23 0 1134.23V962H1440V1134.23C1440 1134.23 1382.81 1153.97 1302.06 1171.14C1246.98 1182.85 1180.93 1193.36 1114.6 1195.59C848.186 1204.53 643.086 1064.34 376.779 1075.03Z" fill="#F3EEE7" />
            </svg> */}



            <div className={`${styles.shapedBg}`}>
                <div className={`${styles.contactContainer} w-100`}>
                    <div className='w-100'>
                        <div className="d-flex d-lg-flex d-xl-flex flex-column-reverse flex-lg-row gap-5 w-100 py-5">

                            <div className={`col-12 col-lg-6 d-flex flex-column justify-content-between ${styles.locationContainer}`}>
                                <div>
                                    <MainTitle title={title} />
                                    <Paragraph text={description} />
                                </div>
                                <Button text={buttonText} href="#" ></Button>
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

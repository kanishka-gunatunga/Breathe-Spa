'use client';
import React from 'react';
import Image from 'next/image';
import styles from "@/styles/page.module.css";
import Button from "@/components/ReusableComponents/Button";

interface YellowBackSectionProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}

const YellowBackSection: React.FC<YellowBackSectionProps> = ({ title, description, image, buttonText }) => {
    return (
        <div className="position-relative w-100 py-5">
            {/* Background Shape */}
            <svg width="100%"
                height="100%"
                className={`${styles.yellowSvg}`}
                viewBox="0 0 1440 1035"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M-7 830.5L1 0C1 0 460.614 94.4288 746.5 94.5C1032.74 94.5713 1449 0 1449 0V830.5H-7Z" fill="#F3EEE7" />
                <path d="M376.779 937.027C219.86 943.322 0 996.232 0 996.232V824H1440V996.232C1440 996.232 1382.81 1015.97 1302.06 1033.14C1246.98 1044.85 1180.93 1055.36 1114.6 1057.59C848.186 1066.53 643.086 926.344 376.779 937.027Z" fill="#F3EEE7" />
            </svg>


            {/* Content */}
            <div className="container position-absolute" style={{ top: '200px', right: '125px' }}>
                <div className="d-block d-lg-flex d-xl-flex gap-5">

                    {/* Left Column - Text */}
                    <div className={`col-12 col-lg-6 d-flex flex-column justify-content-between ${styles.locationContainer}`}>
                        <div>
                            <h3 className={styles.locationDivTitle}>{title}</h3>
                            <p className={styles.locationDivP}>{description}</p>
                        </div>
                        <Button text={buttonText} href="#" ></Button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
                        <Image src={image} alt="Location" width={640} height={731} className="img-fluid rounded" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default YellowBackSection;

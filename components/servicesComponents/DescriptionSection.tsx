import React from 'react'
import style from '@/styles/services.module.css'

interface MainTitleProps {
    title: string;
    description: string;
}

const DescriptionSection: React.FC<MainTitleProps> = (props) => {
    return (
        <div className={`d-flex position-relative flex-column justify-content-center align-items-center ${style.mobileHeight}`} style={{ width: "100%", overflow: "hidden" }}>
            <svg
                className={style.shapedBg}
                width="100%"
                height="70%"
                viewBox="0 0 1440 505"
                preserveAspectRatio="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 271.5V0C0 0 454.705 90.4554 740.592 90.5C1026.84 90.5446 1448 0 1448 0V271.5H0Z" fill="#F3EEE7" />
                <path d="M380.779 384.027C223.86 390.322 4 443.232 4 443.232V271H1444V443.232C1444 443.232 1386.81 462.974 1306.06 480.14C1250.98 491.852 1184.93 502.364 1118.6 504.59C852.186 513.529 647.086 373.344 380.779 384.027Z" fill="#F3EEE7" />
            </svg>

            <div
                className={`${style.sectionShaped} d-flex flex-column justify-content-center align-items-center w-100 text-center fade-in-up`}
                style={{ zIndex: 2, position: "absolute", top: 0, left: 0, height: "100%", color: "#333" }} 
            >
                <h2 className={style.mainTitleStyleTwo}>{props.title}</h2>
                <p className={style.paragraph}>{props.description}</p>
            </div>
        </div>

    )
}

export default DescriptionSection

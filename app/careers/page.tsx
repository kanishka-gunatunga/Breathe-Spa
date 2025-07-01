import pageStyle from "@/styles/page.module.css";
import style from "@/styles/services.module.css";
import React from "react";
import {getCareerData} from "@/sanity/libs/api";
import {PortableText} from "next-sanity";
import {TypedObject} from "@portabletext/types";
import Link from "next/link";


export interface Career {
    positionTitle: string
    description: string
    requirements: TypedObject[]
    email: string
}


const CareersPage = async () => {

    const careersData = await getCareerData();
    console.log(careersData);

    return (
        <div className='d-flex flex-column'>
            <div className={`section ${pageStyle.contactContainer} py-5`}>
                <div className='d-flex flex-column'>
                    <div className={`section ${pageStyle.contactContainer} py-5`}>
                        <div className="d-flex flex-column text-center">
                            <h4 className={`${style.career_txt_40_awsome}`}>{careersData.title}</h4>
                        </div>

                        <div className="d-flex flex-column text-start">
                            <h2 className={`${style.se_txt_40_awsome} text-center mb-2 mb-lg-5`}>{careersData.subtitle}</h2>
                        </div>
                    </div>
                    {
                        careersData.careers.length > 0 && careersData.careers.map((career: Career, index: string) => (
                            <section key={index} className="mb-5">
                                <div className="flex-row d-flex justify-content-between">
                                    <h2 className={`${style.career_title} mb-4`}>{career.positionTitle}</h2>
                                    <Link href={`mailto:${career.email}` || "mailto:shout@breathe-spa.com"}>
                                        <button className={`${style.darkButtonNew}`}
                                                style={{border: "none"}}>Apply Now
                                        </button>
                                    </Link>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className={`${style.career_subtitle} mb-3`}>Job Description:</h3>
                                        <p className={`${style.career_content} mb-3`}>{career.description}</p>
                                        <h3 className={`${style.career_subtitle} mb-3`}>Requirements :</h3>
                                        <div className={`${style.career_content} mx-4`}>
                                            {/*<li><i className="bi bi-check-circle"></i> Certified nail technician</li>*/}
                                            {/*<li><i className="bi bi-check-circle"></i> Steady hand and attention to detail*/}
                                            {/*</li>*/}
                                            {/*<li><i className="bi bi-check-circle"></i> Passion for creativity and guest care*/}
                                            {/*</li>*/}
                                            <PortableText value={career.requirements}/>
                                        </div>
                                        <hr className="text-[#F3EEE7] mt-5"/>
                                    </div>
                                </div>
                            </section>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CareersPage;
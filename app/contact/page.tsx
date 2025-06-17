import Image from "next/image";
import styles from "@/styles/page.module.css";
import React from "react";
import ContactLocation from "@/components/servicesComponents/ContactLocation";
import ContactForm from "@/components/servicesComponents/ContactForm";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";
import {getExclusiveData} from "@/sanity/libs/api";


const Contact = async () => {

    const exclusive = await getExclusiveData();

    return (
        <div>
            <ScrollHandler/>
            <div>
                <Image
                    className={`m-0 p-0`}
                    src="/contact_hero.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{width: "100%", height: "auto"}}
                    alt=""
                />
            </div>

            <section className={`${styles.contactContainer} section pt-5 ${styles.formSection}`}>
                <div id="contactForm" className={`row align-items-stretch ${styles.equalHeightRow}`}>
                    <ContactForm/>
                </div>
            </section>
            <div>
                <ContactLocation/>
            </div>

            <div className="mt-5">
                <div className={`${styles.exclusiveDeals} mt-6`}>
                    <h3 className={styles.exclusiveTitle}>{exclusive[0]?.title}</h3>
                    <p className={styles.exclusiveDescription}>
                        {exclusive[0]?.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
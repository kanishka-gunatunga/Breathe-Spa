import Image from "next/image";
import styles from "@/styles/page.module.css";
import React from "react";
import ContactLocation from "@/components/servicesComponents/ContactLocation";
import ContactForm from "@/components/servicesComponents/ContactForm";
import {ScrollHandler} from "@/components/ReusableComponents/ScrollHandler";


const Contact = () => {

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
            <div id="locationContainer">
                <ContactLocation/>
            </div>

            <div>
                <div className={`${styles.exclusiveDeals} mt-6`}>
                    <h3 className={styles.exclusiveTitle}>Exclusive Deals</h3>
                    <p className={styles.exclusiveDescription}>
                        &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et
                        dolore &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
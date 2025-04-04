
"use client";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import pageStyles from "@/styles/page.module.css";
import React, {   useState } from "react";
import ContactLocation from "@/components/servicesComponents/ContactLocation";

interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
    attachment: File | null,
    privacyPolicy: boolean
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
        attachment: null,
    });

    const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // const [contactData, setContactData] = useState<ContactData[] | null>(null);
    // const [siteData, setSiteData] = useState<SiteData[] | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0] || null;
    //     setFormData((prev) => ({
    //         ...prev,
    //         attachment: file
    //     }));

    //     console.log("-----file :", file);
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.privacyPolicy) {
            alert("Please agree to the privacy policy.");
            return;
        }

        setSubmissionStatus(null);
        setIsLoading(true);

        const data = new FormData();
        data.append("firstName", formData.firstName);
        data.append("lastName", formData.lastName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("message", formData.message);
        data.append("privacyPolicy", String(formData.privacyPolicy));
        data.append("submittedAt", new Date().toISOString());
        if (formData.attachment) {
            data.append("attachment", formData.attachment);
        }

        try {
            const response = await fetch("/api/submit-contact", {
                method: "POST",
                body: data as BodyInit,
            });


            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmissionStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                privacyPolicy: false,
                attachment: null
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmissionStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const contact = await getContactData();
    //         const site = await getSiteData();

    //         setContactData(contact);
    //         setSiteData(site);

    //         console.log("contact : ", contact)
    //         console.log("site : ", site)

    //     };
    //     fetchData();
    // }, []);

    // const contact = await getContactData();
    // const site = await getSiteData();

    return (
        <div>
            <div>
                <Image
                    className={`m-0 p-0`}
                    src="/contact_hero.png"
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "100%", height: "auto" }}
                    alt=""
                />
            </div>

            <section  className={`${styles.contactContainer} section pt-5 ${styles.formSection}`}>
                <div id="contactForm" className={`row align-items-stretch ${styles.equalHeightRow}`}>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className={styles.imageContainer}>
                            <Image
                                src="/spa_contact.png"
                                alt="Spa treatment"
                                fill
                                className={`img-fluid ${styles.responsiveImage}`}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className={`col-md-6 ${styles.formWrapper}`}>
                        <div className={styles.formContainer}>
                            <h2 className={styles.section_title}>Schedule your in Haus presence</h2>
                            <p className={`text-muted ${styles.sectionSubTitle}`}>Get in touch with us</p>

                            {submissionStatus === "success" && (
                                <div className="alert alert-success" role="alert">
                                    Thank you for your message! We&#39;ll get back to you soon.
                                </div>
                            )}
                            {submissionStatus === "error" && (
                                <div className="alert alert-danger" role="alert">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="row">
                                    <div className={`col-md-6 ${styles.contactFormDiv}`}>
                                        <label htmlFor="firstName" className={styles.form_label}>
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.formControl}
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.contactFormDiv}`}>
                                        <label htmlFor="lastName" className={styles.form_label}>
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className={styles.formControl}
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="email" className={styles.form_label}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={styles.formControl}
                                        id="email"
                                        name="email"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="phone" className={styles.form_label}>
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        className={styles.formControl}
                                        id="phone"
                                        name="phone"
                                        placeholder="+94 1128 4571 174"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* <div className={styles.contactFormDiv}>
                                    <label htmlFor="file" className={styles.form_label}>
                                        Attachment
                                    </label>
                                    <input
                                        type="file"
                                        className={styles.formControl}
                                        id="file"
                                        name="attachment"
                                        onChange={handleFileChange}
                                        accept=".pdf, .jpg, .jpeg, .png"
                                    />
                                </div> */}
                                <div className={styles.contactFormDiv}>
                                    <label htmlFor="message" className={styles.form_label}>
                                        Message
                                    </label>
                                    <textarea
                                        className={styles.formControl}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className={`d-flex flex-row align-items-center  ${styles.contactFormDiv}`}>
                                    <input
                                        type="checkbox"
                                        required
                                        className={`${styles.formCheckBox} mt-0`}
                                        id="privacyPolicy"
                                        name="privacyPolicy"
                                        checked={formData.privacyPolicy}
                                        onChange={handleChange}
                                        style={{border: "2px solid #dee2e6 !important", borderRadius: "6px !important"}}
                                    />
                                    <label className={`form-check-label ${styles.formCheck} ${pageStyles.agree_text}`} htmlFor="privacyPolicy">
                                        You agree to our friendly  <a href="#">Booking Policy</a>.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn btn-dark w-100 ${styles.submit_button}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
<ContactLocation />
            
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
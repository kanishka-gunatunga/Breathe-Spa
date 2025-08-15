// 'use client';
//
// import {useState} from "react";
// import pageStyles from "@/styles/page.module.css";
// import styles from "@/styles/page.module.css";
// import pageStyle from '@/styles/services.module.css'
// import Image from "next/image";
//
//
// interface FormData {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     message: string;
//     attachment: File | null;
//     privacyPolicy: boolean;
// }
//
// const ContactForm = () => {
//     const [formData, setFormData] = useState<FormData>({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: "",
//         privacyPolicy: false,
//         attachment: null,
//     });
//
//     const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const {name, value, type} = e.target;
//         const checked = "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!formData.privacyPolicy) {
//             alert("Please agree to the privacy policy.");
//             return;
//         }
//
//         setSubmissionStatus(null);
//         setIsLoading(true);
//
//         const data = new FormData();
//         data.append("firstName", formData.firstName);
//         data.append("lastName", formData.lastName);
//         data.append("email", formData.email);
//         data.append("phone", formData.phone);
//         data.append("message", formData.message);
//         data.append("privacyPolicy", String(formData.privacyPolicy));
//         data.append("submittedAt", new Date().toISOString());
//         if (formData.attachment) {
//             data.append("attachment", formData.attachment);
//         }
//
//         try {
//             const response = await fetch("/api/submit-contact", {
//                 method: "POST",
//                 body: data as BodyInit,
//             });
//
//             if (!response.ok) {
//                 throw new Error("Failed to submit form");
//             }
//
//             setSubmissionStatus("success");
//             setFormData({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 phone: "",
//                 message: "",
//                 privacyPolicy: false,
//                 attachment: null,
//             });
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             setSubmissionStatus("error");
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     return (
//         <>
//             <div className="col-md-6 mb-4 mb-md-0">
//                 <div className={styles.imageContainer}>
//                     <Image
//                         src="/spa_contact.png"
//                         alt="Spa treatment"
//                         fill
//                         className={`img-fluid ${styles.responsiveImage}`}
//                         style={{objectFit: 'cover'}}
//                     />
//                 </div>
//             </div>
//             <div className={`col-md-6 ${styles.formWrapper}`}>
//                 <div className={styles.formContainer}>
//                     <h2 className={styles.section_title_new}>Get in touch with us</h2>
//                     <p className={`text-muted ${styles.sectionSubTitle}`}>Please let us know which treatments you’re
//                         interested in. <br/>For same day appointments please whatsapp or call us on +94772444888</p>
//
//                     {submissionStatus === "success" && (
//                         <div className="alert alert-success" role="alert">
//                             Thank you for getting in touch with us. Our team will reach out to you soon.
//                         </div>
//                     )}
//                     {submissionStatus === "error" && (
//                         <div className="alert alert-danger" role="alert">
//                             Something went wrong. Please try again later.
//                         </div>
//                     )}
//
//                     <form onSubmit={handleSubmit} className="mt-4">
//                         <div className="row">
//                             <div className={`col-md-6 ${styles.contactFormDiv}`}>
//                                 <label htmlFor="firstName" className={styles.form_label}>
//                                     First name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     className={styles.formControl}
//                                     id="firstName"
//                                     name="firstName"
//                                     placeholder="First name"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className={`col-md-6 ${styles.contactFormDiv}`}>
//                                 <label htmlFor="lastName" className={styles.form_label}>
//                                     Last name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     className={styles.formControl}
//                                     id="lastName"
//                                     name="lastName"
//                                     placeholder="Last name"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className={styles.contactFormDiv}>
//                             <label htmlFor="email" className={styles.form_label}>
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 required
//                                 className={styles.formControl}
//                                 id="email"
//                                 name="email"
//                                 placeholder="you@company.com"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className={styles.contactFormDiv}>
//                             <label htmlFor="phone" className={styles.form_label}>
//                                 Phone number
//                             </label>
//                             <input
//                                 type="tel"
//                                 required
//                                 className={styles.formControl}
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="+94 71 234 5678"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         {/* <div className={styles.contactFormDiv}>
//                                     <label htmlFor="file" className={styles.form_label}>
//                                         Attachment
//                                     </label>
//                                     <input
//                                         type="file"
//                                         className={styles.formControl}
//                                         id="file"
//                                         name="attachment"
//                                         onChange={handleFileChange}
//                                         accept=".pdf, .jpg, .jpeg, .png"
//                                     />
//                                 </div> */}
//                         <div className={styles.contactFormDiv}>
//                             <label htmlFor="message" className={styles.form_label}>
//                                 Message
//                             </label>
//                             <textarea
//                                 required
//                                 className={styles.formControl}
//                                 id="message"
//                                 name="message"
//                                 rows={4}
//                                 placeholder="Message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </div>
//                         <div className={`d-flex flex-row align-items-center  ${styles.contactFormDiv}`}>
//                             <input
//                                 type="checkbox"
//                                 required
//                                 className={`${styles.formCheckBox} mt-0`}
//                                 id="privacyPolicy"
//                                 name="privacyPolicy"
//                                 checked={formData.privacyPolicy}
//                                 onChange={handleChange}
//                                 style={{border: "2px solid #dee2e6 !important", borderRadius: "6px !important"}}
//                             />
//                             <label className={`form-check-label ${styles.formCheck} ${pageStyles.agree_text}`}
//                                    htmlFor="privacyPolicy">
//                                 Please take a minute to review our <a href="/terms">Booking Policy</a> and click accept
//                                 to continue
//                             </label>
//                         </div>
//                         <button
//                             type="submit"
//                             className={` w-100 ${pageStyle.darkButton} ${pageStyle.darkButtonWidth}`}
//                             style={{
//                                 fontSize: "17px !important",
//                                 fontWeight: 600,
//                                 maxWidth: "100% !important",
//                                 width: "100% !important"
//                             }}
//                             disabled={isLoading}
//                         >
//                             {isLoading ? (
//                                 <>
//                                     <span
//                                         className="spinner-border spinner-border-sm me-2"
//                                         role="status"
//                                         aria-hidden="true"
//                                     ></span>
//                                     Sending...
//                                 </>
//                             ) : (
//                                 "Send message"
//                             )}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default ContactForm;


'use client';

import {useState} from "react";
import pageStyles from "@/styles/page.module.css";
import styles from "@/styles/page.module.css";
import pageStyle from '@/styles/services.module.css'
import Image from "next/image";


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    privacyPolicy: boolean;
}

const ContactForm = ({title, description, image}: { title: string, description: string, image: string }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        const checked = "checked" in e.target ? (e.target as HTMLInputElement).checked : false;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

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
        // if (formData.attachment) {
        //     data.append("attachment", formData.attachment);
        // }

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
                // attachment: null,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmissionStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="col-md-6 mb-4 mb-md-0">
                <div className={styles.imageContainer}>
                    <Image
                        src={image || "/spa_contact.png"}
                        alt="Spa treatment"
                        fill
                        className={`img-fluid ${styles.responsiveImage}`}
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
            <div className={`col-md-6 ${styles.formWrapper}`}>
                <div className={styles.formContainer}>
                    <h2 className={styles.section_title_new}>{title || `Get in touch with us`}</h2>
                    {/*<p className={`text-muted ${styles.sectionSubTitle}`}>{description || `Please let us know which treatments you’re*/}
                    {/*    interested in. <br/>For same day appointments please whatsapp or call us on +94772444888`}</p>*/}

                    <p className={`text-muted ${styles.sectionSubTitle}`}
                       dangerouslySetInnerHTML={{
                           __html: description || `Please let us know which treatments you’re
                       interested in. <br/>For same day appointments please whatsapp or call us on +94772444888`
                       }}
                    />

                    {submissionStatus === "success" && (
                        <div className="alert alert-success" role="alert">
                            Thank you for getting in touch with us. Our team will reach out to you soon.
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
                                    required
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
                                    required
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
                                required
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
                                required
                                className={styles.formControl}
                                id="phone"
                                name="phone"
                                placeholder="+94 712 345 678"
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
                                required
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
                            <label className={`form-check-label ${styles.formCheck} ${pageStyles.agree_text}`}
                                   htmlFor="privacyPolicy">
                                Please take a minute to review our <a href="/terms">Booking Policy</a> and click accept
                                to continue
                            </label>
                        </div>
                        <button
                            type="submit"
                            className={` w-100 ${pageStyle.darkButton} ${pageStyle.darkButtonWidth}`}
                            style={{
                                fontSize: "17px !important",
                                fontWeight: 600,
                                maxWidth: "100% !important",
                                width: "100% !important"
                            }}
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
        </>
    );
};

export default ContactForm;


// import {NextRequest, NextResponse} from "next/server";
// import {sanityClient} from "@/sanity/libs/sanity";
//
// // interface SanityFile {
// //     _type: "file";
// //     asset: {
// //         _type: "reference";
// //         _ref: string;
// //     };
// // }
//
// interface ContactSubmission {
//     _type: "contactSubmission";
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     message: string;
//     privacyPolicy: boolean;
//     // attachment?: SanityFile;
//     submittedAt: string;
// }
//
// export async function POST(request: NextRequest) {
//     try {
//         const formData = await request.formData();
//
//         const firstName = formData.get("firstName") as string;
//         const lastName = formData.get("lastName") as string;
//         const email = formData.get("email") as string;
//         const phone = formData.get("phone") as string;
//         const message = formData.get("message") as string;
//         const privacyPolicy = formData.get("privacyPolicy") === "true";
//         const submittedAt = formData.get("submittedAt") as string;
//         // const attachment = formData.get("attachment");
//
//         if (!firstName || !lastName || !email || !message || !privacyPolicy) {
//             return NextResponse.json({error: "Missing required fields"}, {status: 400});
//         }
//
//         const submission: ContactSubmission = {
//             _type: "contactSubmission",
//             firstName,
//             lastName,
//             email,
//             phone,
//             message,
//             privacyPolicy,
//             submittedAt,
//         };
//
//         // if (attachment && attachment instanceof File) {
//         //     console.log("Uploading file:", {
//         //         name: attachment.name,
//         //         type: attachment.type,
//         //         size: attachment.size,
//         //     });
//         //     const fileBuffer = Buffer.from(await attachment.arrayBuffer());
//         //     const asset = await sanityClient.assets.upload("file", fileBuffer, {
//         //         filename: attachment.name,
//         //         contentType: attachment.type,
//         //     });
//         //     console.log("Asset uploaded:", asset);
//         //     submission.attachment = {
//         //         _type: "file",
//         //         asset: {
//         //             _type: "reference",
//         //             _ref: asset._id,
//         //         },
//         //     };
//         // } else {
//         //     console.log("No file uploaded");
//         // }
//
//         console.log("Submission data:", submission);
//         const response = await sanityClient.create(submission);
//         console.log("-------------sanity response: ", response);
//
//         return NextResponse.json(
//             {message: "Form submitted successfully", id: response._id},
//             {status: 200}
//         );
//     } catch (error) {
//         console.error("Error submitting to Sanity:", error);
//         return NextResponse.json({error: "Failed to submit form"}, {status: 500});
//     }
// }


import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {sanityClient} from "@/sanity/libs/sanity";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const message = formData.get("message") as string;
        const privacyPolicy = formData.get("privacyPolicy") === "true";
        const submittedAt = formData.get("submittedAt") as string;

        if (!firstName || !lastName || !email || !message) {
            console.error("Missing form fields:", {firstName, lastName, email, message});
            return NextResponse.json({error: "Missing required form fields"}, {status: 400});
        }

        const settingsQuery = `*[_type == "contactSettings"][0]{recipientEmail,email,password}`;
        const settings = await sanityClient.fetch(settingsQuery);

        const recipientEmail = settings?.recipientEmail || "info.learn.edwin@gmail.com";
        const appEmail = settings?.email || process.env.EMAIL_USER;
        const appPassword = settings?.password || process.env.EMAIL_PASS;

        if (!appEmail || !appPassword) {
            console.error("Email credentials missing from Sanity or environment variables.");
            return NextResponse.json({error: "Email sending configuration missing"}, {status: 500});
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: appEmail,
                pass: appPassword,
            },
        });

        const formattedSubmittedAt = new Date(submittedAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: appEmail,
            to: recipientEmail,
            subject: `New Contact Submission from ${firstName} ${lastName}`,
            text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Privacy Policy Accepted: ${privacyPolicy ? 'Yes' : 'No'}
        Submitted At: ${formattedSubmittedAt}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #5B451E;">New Contact Form Submission</h2>
            <p>You have received a new message from your website's contact form:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%;"><strong>Full Name:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #5B451E; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #5B451E; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Message:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Privacy Policy Accepted:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${privacyPolicy ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Submitted At:</strong></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${formattedSubmittedAt}</td>
                </tr>
            </table>
            <p style="font-size: 0.9em; color: #666;">This email was sent automatically from your website's contact form.</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({message: "Email sent successfully"}, {status: 200});
    } catch (error) {
        console.error("Error processing contact form submission:", error);
        return NextResponse.json({error: "Failed to send message. Please try again later."}, {status: 500});
    }
}
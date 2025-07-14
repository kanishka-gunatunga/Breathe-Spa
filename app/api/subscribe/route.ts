// import { NextRequest, NextResponse } from 'next/server';
// import { sanityClient } from '@/sanity/libs/sanity';
//
// interface Subscription {
//     _type: 'newsletter';
//     email: string;
//     subscribedAt: string;
// }
//
// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         const email = body.email;
//         const subscribedAt = new Date().toISOString();
//
//         console.log("email email email : ", email);
//
//         if (!email || !email.includes('@')) {
//             return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
//         }
//
//         const subscription: Subscription = {
//             _type: 'newsletter',
//             email,
//             subscribedAt,
//         };
//
//         const response = await sanityClient.create(subscription);
//
//         return NextResponse.json(
//             { message: 'Subscription successful!', id: response._id },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error submitting to Sanity:', error);
//         return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
//     }
// }


// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
//
// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         const email = body.email;
//
//         console.log("Subscription request for email:", email);
//
//         if (!email || !email.includes('@')) {
//             return NextResponse.json({ message: 'Invalid email address provided.' }, { status: 400 });
//         }
//
//         const appEmail = process.env.EMAIL_USER;
//         const appPassword = process.env.EMAIL_PASS;
//
//         if (!appEmail || !appPassword) {
//             console.error("Email credentials (EMAIL_USER, EMAIL_PASS) are missing in environment variables.");
//             return NextResponse.json({ message: "Server configuration error: Email sending not set up." }, { status: 500 });
//         }
//
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: appEmail,
//                 pass: appPassword,
//             },
//         });
//
//         const mailOptions: nodemailer.SendMailOptions = {
//             from: `Breathe Spa <${appEmail}>`,
//             to: email,
//             subject: 'Welcome to the Breathe Spa Newsletter!',
//             text: `
//                 Dear Subscriber,
//
//                 Thank you for subscribing to the Breathe Spa newsletter!
//                 You'll now receive updates on our latest services, exclusive offers, and wellness tips.
//
//                 We're excited to have you as part of our community.
//
//                 Best regards,
//                 The Breathe Spa Team
//
//                 If you wish to unsubscribe, please contact us.
//                 (This is an automated email, please do not reply.)
//             `,
//             html: `
//                 <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
//                     <div style="background-color: #F3EEE7; padding: 20px; text-align: center;">
//                         <h1 style="color: #5B451E; margin: 0; font-size: 28px;">Welcome to Breathe Spa!</h1>
//                     </div>
//                     <div style="padding: 20px;">
//                         <p>Dear Subscriber,</p>
//                         <p>Thank you for subscribing to the <strong>Breathe Spa newsletter</strong>! We're thrilled to have you join our community.</p>
//                         <p>You'll now receive exclusive updates on our latest luxurious services, special promotions, and insightful wellness tips directly to your inbox.</p>
//                         <p>Prepare to embark on a journey of relaxation and rejuvenation with us.</p>
//                         <p style="margin-top: 30px; text-align: center;">
//                             <a href="https://breathespa.vercel.app" style="display: inline-block; padding: 12px 25px; background-color: #5B451E; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
//                         </p>
//                         <p style="margin-top: 30px;">Best regards,<br>The Breathe Spa Team</p>
//                     </div>
//                     <div style="background-color: #f7f7f7; padding: 20px; font-size: 0.85em; color: #777; text-align: center; border-top: 1px solid #eee;">
//                         <p>You are receiving this email because you subscribed to the Breathe Spa newsletter.</p>
//                         <p>If you did not request this, please ignore this email.</p>
//                         <p style="margin-top: 10px;">
//                             <a href="mailto:${appEmail}?subject=Unsubscribe%20from%20Newsletter" style="color: #5B451E;">Unsubscribe</a> | <a href="https://breathespa.vercel.app/contact" style="color: #5B451E;">Contact Us</a>
//                         </p>
//                         <p>&copy; ${new Date().getFullYear()} Breathe Spa. All rights reserved.</p>
//                     </div>
//                 </div>
//             `,
//         };
//
//         await transporter.sendMail(mailOptions);
//
//         return NextResponse.json(
//             { message: 'Subscription successful! A confirmation email has been sent.' },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Error in newsletter subscription API:', error);
//         return NextResponse.json({ message: 'Failed to subscribe. Please try again later.' }, { status: 500 });
//     }
// }


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {sanityClient} from "@/sanity/libs/sanity";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const subscriberEmail = body.email;

        console.log("Subscription request for email:", subscriberEmail);

        if (!subscriberEmail || !subscriberEmail.includes('@')) {
            return NextResponse.json({ message: 'Invalid email address provided.' }, { status: 400 });
        }

        const settingsQuery = `*[_type == "contactSettings"][0]{recipientEmail,email,password}`;
        const settings = await sanityClient.fetch(settingsQuery);
        const appEmail = process.env.EMAIL_USER;
        const appPassword = process.env.EMAIL_PASS;
        const adminEmail = settings?.recipientEmail;

        if (!appEmail || !appPassword) {
            console.error("Email credentials (EMAIL_USER, EMAIL_PASS) are missing in environment variables.");
            return NextResponse.json({ message: "Server configuration error: Email sending not set up." }, { status: 500 });
        }

        if (!adminEmail) {
            console.warn("ADMIN_EMAIL_USER is not set. New subscriber notification email will not be sent.");
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: appEmail,
                pass: appPassword,
            },
        });

        const subscriberMailOptions: nodemailer.SendMailOptions = {
            from: `Breathe Spa <${appEmail}>`,
            to: subscriberEmail,
            subject: 'Welcome to the Breathe Spa Newsletter!',
            text: `
                Dear Subscriber,

                Thank you for subscribing to the Breathe Spa newsletter!
                You'll now receive updates on our latest services, exclusive offers, and wellness tips.

                We're excited to have you as part of our community.

                Best regards,
                The Breathe Spa Team

                If you wish to unsubscribe, please contact us.
                (This is an automated email, please do not reply.)
            `,
            html: `
                <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #F3EEE7; padding: 20px; text-align: center;">
                        <h1 style="color: #5B451E; margin: 0; font-size: 28px;">Welcome to Breathe Spa!</h1>
                    </div>
                    <div style="padding: 20px;">
                        <p>Dear Subscriber,</p>
                        <p>Thank you for subscribing to the <strong>Breathe Spa newsletter</strong>! We're thrilled to have you join our community.</p>
                        <p>You'll now receive exclusive updates on our latest luxurious services, special promotions, and insightful wellness tips directly to your inbox.</p>
                        <p>Prepare to embark on a journey of relaxation and rejuvenation with us.</p>
                        <p style="margin-top: 30px; text-align: center;">
                            <a href="https://breathespa.vercel.app" style="display: inline-block; padding: 12px 25px; background-color: #5B451E; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
                        </p>
                        <p style="margin-top: 30px;">Best regards,<br>The Breathe Spa Team</p>
                    </div>
                    <div style="background-color: #f7f7f7; padding: 20px; font-size: 0.85em; color: #777; text-align: center; border-top: 1px solid #eee;">
                        <p>You are receiving this email because you subscribed to the Breathe Spa newsletter.</p>
                        <p>If you did not request this, please ignore this email.</p>
                        <p style="margin-top: 10px;">
                            <a href="mailto:${appEmail}?subject=Unsubscribe%20from%20Newsletter" style="color: #5B451E;">Unsubscribe</a> | <a href="https://breathespa.vercel.app/contact" style="color: #5B451E;">Contact Us</a>
                        </p>
                        <p>&copy; ${new Date().getFullYear()} Breathe Spa. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(subscriberMailOptions);

        if (adminEmail) {
            const adminMailOptions: nodemailer.SendMailOptions = {
                from: `Breathe Spa Notifier <${appEmail}>`,
                to: adminEmail,
                subject: `New Newsletter Subscriber: ${subscriberEmail}`,
                text: `
                    Hello Admin,

                    A new user has subscribed to the Breathe Spa newsletter.

                    Subscriber Email: ${subscriberEmail}
                    Subscription Date: ${new Date().toLocaleString()}

                    Please keep your subscriber list updated.

                    Best regards,
                    Your Website Notification System
                `,
                html: `
                    <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                        <div style="background-color: #5B451E; padding: 20px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Newsletter Subscriber!</h1>
                        </div>
                        <div style="padding: 20px;">
                            <p>Hello Admin,</p>
                            <p>A new user has just subscribed to your <strong>Breathe Spa newsletter</strong>.</p>
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; width: 35%;"><strong>Subscriber Email:</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${subscriberEmail}" style="color: #5B451E; text-decoration: none;">${subscriberEmail}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Subscription Date:</strong></td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' })}</td>
                                </tr>
                            </table>
                            <p>Please remember to update your subscriber list or CRM if necessary.</p>
                            <p style="margin-top: 30px;">Best regards,<br>Your Website Notification System</p>
                        </div>
                        <div style="background-color: #f7f7f7; padding: 15px; font-size: 0.8em; color: #777; text-align: center; border-top: 1px solid #eee;">
                            <p>This is an automated notification. Please do not reply to this email.</p>
                        </div>
                    </div>
                `,
            };
            await transporter.sendMail(adminMailOptions);
        }


        return NextResponse.json(
            { message: 'Subscription successful! A confirmation email has been sent.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in newsletter subscription API:', error);
        return NextResponse.json({ message: 'Failed to subscribe. Please try again later.' }, { status: 500 });
    }
}

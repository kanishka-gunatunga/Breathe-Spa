import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {sanityClient} from "@/sanity/libs/sanity";
import {createHmac} from "crypto";

export async function POST(request: NextRequest) {
    try {
        const signatureHeader = request.headers.get("sanity-webhook-signature");
        if (!signatureHeader) {
            return NextResponse.json({error: "Missing webhook signature"}, {status: 401});
        }

        const signatureParts = signatureHeader.split(",");
        const timestamp = signatureParts.find((part) => part.startsWith("t="))?.split("=")[1];
        const signature = signatureParts.find((part) => part.startsWith("v1="))?.split("=")[1];

        if (!timestamp || !signature) {
            return NextResponse.json({error: "Invalid signature format"}, {status: 401});
        }

        const secret = process.env.SANITY_WEBHOOK_SECRET;
        if (!secret) {
            return NextResponse.json({error: "Server configuration error"}, {status: 500});
        }

        const bodyText = await request.text();

        const dataToSign = `${timestamp}.${bodyText}`;
        let computedSignature = createHmac("sha256", secret)
            .update(dataToSign)
            .digest("base64");

        computedSignature = computedSignature
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");

        console.log("Signature comparison:", {signature, computedSignature});

        if (signature !== computedSignature) {
            console.error("Webhook signature mismatch:", {signature, computedSignature});
            return NextResponse.json({error: "Invalid webhook signature"}, {status: 401});
        }

        const body = JSON.parse(bodyText);
        console.log("Webhook body:", body);

        const {firstName, lastName, email, phone, message, privacyPolicy, submittedAt} = body;


        if (!firstName || !lastName || !email || !message) {
            console.error("Missing webhook payload:", body);
            return NextResponse.json({error: "Invalid webhook payload"}, {status: 400});
        }

        // let attachmentUrl = "No attachment";
        // if (attachment?.asset?._ref) {
        //     const assetQuery = `*[_id == $ref][0]{url}`;
        //     const asset = await sanityClient.fetch(assetQuery, {ref: attachment.asset._ref});
        //     attachmentUrl = asset?.url || "Attachment not found";
        // }


        const settingsQuery = `*[_type == "contactSettings"][0]{recipientEmail,email,password}`;
        const settings = await sanityClient.fetch(settingsQuery);
        const recipientEmail = settings?.recipientEmail || "info.learn.edwin@gmail.com";
        const appEmail = settings?.email;
        const appPassword = settings?.password;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER || appEmail,
                pass: process.env.EMAIL_PASS || appPassword,
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.EMAIL_USER || appEmail,
            to: recipientEmail,
            subject: `New Contact Submission from ${firstName} ${lastName}`,
            text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Privacy Policy Accepted: ${privacyPolicy}
        Submitted At: ${submittedAt}
      `,
            html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Privacy Policy Accepted:</strong> ${privacyPolicy}</p>
        <p><strong>Submitted At:</strong> ${submittedAt}</p>
      `,
        };


        // if (attachmentUrl !== "No attachment" && attachmentUrl !== "Attachment not found") {
        //     mailOptions.attachments = [
        //         {
        //             filename: attachmentUrl.split("/").pop() || "attachment",
        //             path: attachmentUrl,
        //         },
        //     ];
        // }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({message: "Email sent successfully"}, {status: 200});
    } catch (error) {
        console.error("Error processing webhook:", error);
        return NextResponse.json({error: "Failed to process webhook"}, {status: 500});
    }
}
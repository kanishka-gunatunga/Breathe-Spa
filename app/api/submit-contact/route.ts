import {NextRequest, NextResponse} from "next/server";
import {sanityClient} from "@/sanity/libs/sanity";

// interface SanityFile {
//     _type: "file";
//     asset: {
//         _type: "reference";
//         _ref: string;
//     };
// }

interface ContactSubmission {
    _type: "contactSubmission";
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    privacyPolicy: boolean;
    // attachment?: SanityFile;
    submittedAt: string;
}

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
        // const attachment = formData.get("attachment");

        if (!firstName || !lastName || !email || !message || !privacyPolicy) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }

        const submission: ContactSubmission = {
            _type: "contactSubmission",
            firstName,
            lastName,
            email,
            phone,
            message,
            privacyPolicy,
            submittedAt,
        };

        // if (attachment && attachment instanceof File) {
        //     console.log("Uploading file:", {
        //         name: attachment.name,
        //         type: attachment.type,
        //         size: attachment.size,
        //     });
        //     const fileBuffer = Buffer.from(await attachment.arrayBuffer());
        //     const asset = await sanityClient.assets.upload("file", fileBuffer, {
        //         filename: attachment.name,
        //         contentType: attachment.type,
        //     });
        //     console.log("Asset uploaded:", asset);
        //     submission.attachment = {
        //         _type: "file",
        //         asset: {
        //             _type: "reference",
        //             _ref: asset._id,
        //         },
        //     };
        // } else {
        //     console.log("No file uploaded");
        // }

        console.log("Submission data:", submission);
        const response = await sanityClient.create(submission);
        console.log("-------------sanity response: ", response);

        return NextResponse.json(
            {message: "Form submitted successfully", id: response._id},
            {status: 200}
        );
    } catch (error) {
        console.error("Error submitting to Sanity:", error);
        return NextResponse.json({error: "Failed to submit form"}, {status: 500});
    }
}
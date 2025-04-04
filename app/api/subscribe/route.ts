import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/libs/sanity';

interface Subscription {
    _type: 'newsletter';
    email: string;
    subscribedAt: string;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const email = body.email;
        const subscribedAt = new Date().toISOString();

        console.log("email email email : ", email);

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const subscription: Subscription = {
            _type: 'newsletter',
            email,
            subscribedAt,
        };

        const response = await sanityClient.create(subscription);

        return NextResponse.json(
            { message: 'Subscription successful!', id: response._id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error submitting to Sanity:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}

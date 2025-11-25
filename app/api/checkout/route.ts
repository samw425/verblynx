import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
    const { priceId, successUrl, cancelUrl } = await req.json();
    if (!priceId) {
        return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
    }
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: {
            // you can add user id here if you have auth
        },
    });
    return NextResponse.json({ url: session.url });
}

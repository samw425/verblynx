import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover',
}) : null;

export async function POST(req: Request) {
    const { priceId, successUrl, cancelUrl } = await req.json();

    if (!stripe || !process.env.STRIPE_SECRET_KEY) {
        return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
    }

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

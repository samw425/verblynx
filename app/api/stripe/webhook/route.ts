import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/utils/supabase'; // adjust import as needed

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'dummy_key_for_build', {
    apiVersion: '2024-06-20' as any,
});

export async function POST(req: Request) {
    const sig = req.headers.get('stripe-signature') || '';
    const buf = await req.text();
    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        console.error('⚠️ Webhook signature verification failed.', err);
        return new Response('Webhook Error', { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        if (userId) {
            // Update Supabase user record to mark as pro
            const { error } = await supabase
                .from('users')
                .update({ is_pro: true })
                .eq('id', userId);
            if (error) {
                console.error('Supabase update error', error);
            } else {
                // Send notification email to owner
                try {
                    await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'https://verblynx.vercel.app'}/api/notify`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: 'sale',
                            email: session.customer_details?.email || 'Unknown',
                            name: session.customer_details?.name || 'Unknown',
                            amount: session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00'
                        })
                    })
                } catch (notifyError) {
                    console.error('Failed to send sale notification:', notifyError)
                }
            }
        }
    }
    return new Response(JSON.stringify({ received: true }), { status: 200 });
}

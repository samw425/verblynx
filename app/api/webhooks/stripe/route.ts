import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock_key_for_build", {
    apiVersion: "2025-11-17.clover",
})

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mock.supabase.co",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "mock_key"
)

export async function POST(req: Request) {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("Stripe-Signature") as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === "checkout.session.completed") {
        const subscriptionId = session.subscription as string
        const userId = session.metadata?.userId

        if (!userId) {
            return new NextResponse("User id is missing in metadata", { status: 400 })
        }

        // Update user's subscription status in Supabase
        // Assuming a 'subscriptions' table or updating user metadata
        await supabase
            .from("subscriptions")
            .insert({
                user_id: userId,
                stripe_subscription_id: subscriptionId,
                status: "active",
                plan_id: process.env.STRIPE_PRICE_ID,
            })
    }

    return new NextResponse(null, { status: 200 })
}

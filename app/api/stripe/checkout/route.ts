import { NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { createClient } from "@/lib/supabase/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock_key_for_build", {
    apiVersion: "2025-11-17.clover",
})

export async function POST(req: Request) {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const headersList = await headers()
    const origin = headersList.get("origin") || "http://localhost:3000"

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID, // Ensure this env var is set
                    quantity: 1,
                },
            ],
            mode: "subscription",
            success_url: `${origin}/dashboard?success=true`,
            cancel_url: `${origin}/dashboard?canceled=true`,
            customer_email: user.email,
            metadata: {
                userId: user.id,
            },
        })

        return NextResponse.redirect(session.url!)
    } catch (error) {
        console.error("Stripe Checkout Error:", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

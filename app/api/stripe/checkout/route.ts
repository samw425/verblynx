import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // Create a Checkout Session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    // For now using a placeholder or creating a product on the fly if needed, 
                    // but best practice is to use a Price ID from env or config.
                    // Here we'll use a hardcoded price data for demonstration if no price ID is provided.
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Verblynx Pro',
                            description: 'Unlimited generations, voice cloning, and more.',
                        },
                        unit_amount: 2000, // $20.00
                        recurring: {
                            interval: 'month',
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?canceled=true`,
            customer_email: user.email,
            metadata: {
                userId: user.id,
            },
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error("Stripe error:", error)
        return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
    }
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import getStripe from "@/utils/get-stripe";

interface StripeButtonProps {
    priceId: string;
    className?: string;
    children: React.ReactNode;
}

export default function StripeButton({ priceId, className, children }: StripeButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        if (!priceId || !process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
            toast.success("Simulation Mode: Upgrade Successful!", {
                description: "Stripe keys missing. Pro features unlocked for demo session.",
                duration: 5000,
            })
            // Simulate upgrade in local storage or state if needed
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ priceId }),
            })

            const { url } = await response.json()

            if (url) {
                window.location.href = url
            } else {
                toast.error("Failed to create checkout session")
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className={className}
        >
            {isLoading ? 'Processing…' : children}
        </Button>
    );
}

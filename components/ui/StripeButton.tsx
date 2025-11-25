import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface StripeButtonProps {
    priceId: string;
    className?: string;
    children: React.ReactNode;
}

export default function StripeButton({ priceId, className, children }: StripeButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    priceId,
                    successUrl: `${window.location.origin}?session=success`,
                    cancelUrl: `${window.location.origin}?session=cancel`
                })
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('No URL returned from checkout');
            }
        } catch (e) {
            console.error('Checkout error', e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleClick}
            disabled={loading}
            className={className}
        >
            {loading ? 'Processing…' : children}
        </Button>
    );
}

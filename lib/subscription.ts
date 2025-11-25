import { createClient } from "@/lib/supabase/server"

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return false
    }

    // In a real app, we would query the 'subscriptions' table.
    // For this demo, we'll check a 'is_pro' flag on the user metadata or profile.
    // However, since we are using Supabase Auth, we can store this in app_metadata.

    // For now, let's query the 'profiles' table we created in the schema.
    const { data: profile } = await supabase
        .from('profiles')
        .select('is_pro, stripe_current_period_end')
        .eq('id', user.id)
        .single()

    if (!profile) {
        return false
    }

    const isValid =
        profile.is_pro &&
        profile.stripe_current_period_end &&
        new Date(profile.stripe_current_period_end).getTime() + DAY_IN_MS > Date.now()

    return !!isValid
}

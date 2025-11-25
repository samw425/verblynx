import { createClient } from "@/lib/supabase/server"
import { checkSubscription } from "@/lib/subscription"

const FREE_LIMIT = 3

export const checkApiLimit = async () => {
    const isPro = await checkSubscription()
    if (isPro) return true

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return false

    const { data: profile } = await supabase
        .from('profiles')
        .select('daily_usage_count, last_usage_date')
        .eq('id', user.id)
        .single()

    if (!profile) return true // Should ideally create profile if missing

    // Check if date is today
    const today = new Date().toISOString().split('T')[0]
    const lastDate = profile.last_usage_date

    if (lastDate !== today) {
        // Reset if new day
        await supabase.from('profiles').update({
            daily_usage_count: 0,
            last_usage_date: today
        }).eq('id', user.id)
        return true
    }

    return profile.daily_usage_count < FREE_LIMIT
}

export const incrementApiLimit = async () => {
    const isPro = await checkSubscription()
    if (isPro) return

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const { data: profile } = await supabase
        .from('profiles')
        .select('daily_usage_count')
        .eq('id', user.id)
        .single()

    if (profile) {
        await supabase.from('profiles').update({
            daily_usage_count: profile.daily_usage_count + 1
        }).eq('id', user.id)
    }
}

export const getApiLimitCount = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return 0

    const { data: profile } = await supabase
        .from('profiles')
        .select('daily_usage_count, last_usage_date')
        .eq('id', user.id)
        .single()

    if (!profile) return 0

    // Reset check for UI display consistency
    const today = new Date().toISOString().split('T')[0]
    if (profile.last_usage_date !== today) return 0

    return profile.daily_usage_count
}

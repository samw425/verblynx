import { createBrowserClient } from '@supabase/ssr'

const isDemoMode = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return !url || !key || url.includes('your-project') || key.includes('your-anon-key')
}

export function createClient() {
  if (isDemoMode()) {
    console.warn("Verblynx: Running in Demo Mode (No Supabase Keys)")
    // Return a mock client that simulates success for auth
    return {
      auth: {
        signInWithPassword: async () => ({ data: { user: { id: 'demo-user' } }, error: null }),
        signInWithOAuth: async () => {
          // Simulate a redirect or just return success for the sake of the demo
          // In a real app, this would redirect to the provider
          return { data: { url: 'http://localhost:3000/dashboard' }, error: null }
        },
        signUp: async () => ({ data: { user: { id: 'demo-user' } }, error: null }),
        getUser: async () => ({ data: { user: { id: 'demo-user', email: 'demo@example.com' } }, error: null }),
        signOut: async () => ({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
      },
      from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: [], error: null }),
        update: () => ({ data: [], error: null }),
        eq: () => ({ data: [], error: null }),
        single: () => ({ data: {}, error: null }),
      })
    } as any
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

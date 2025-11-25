import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    // In development, bypass auth to allow testing
    if (process.env.NODE_ENV === 'development') {
        return NextResponse.next({
            request: {
                headers: request.headers,
            },
        })
    }

    // If Supabase env vars are missing, just pass through
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return NextResponse.next({
            request: {
                headers: request.headers,
            },
        })
    }

    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    try {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll()
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                        response = NextResponse.next({
                            request: {
                                headers: request.headers,
                            },
                        })
                        cookiesToSet.forEach(({ name, value, options }) =>
                            response.cookies.set(name, value, options)
                        )
                    },
                },
            }
        )

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (
            !user &&
            !request.nextUrl.pathname.startsWith('/login') &&
            !request.nextUrl.pathname.startsWith('/signup') &&
            !request.nextUrl.pathname.startsWith('/auth') &&
            !request.nextUrl.pathname.startsWith('/proof') &&
            request.nextUrl.pathname !== '/'
        ) {
            // no user, potentially respond by redirecting the user to the login page
            const url = request.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }

        return response
    } catch (error) {
        console.error('Middleware error:', error)
        return response
    }
}

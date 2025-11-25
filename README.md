# Verblynx - Elite Copywriting System

Verblynx is an AI-powered strategy engine designed to help copywriters and founders generate high-converting copy by focusing on "Proof Over Pitch".

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create a `.env.local` file in the root directory with the following keys:

```env
# Supabase (Auth & Database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe (Payments)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...

# Google Gemini (AI Generation)
GOOGLE_API_KEY=your_gemini_api_key
```

### 3. Run Development Server
```bash
npm run dev
```

## 🛠 Deployment

### Vercel / Netlify
1. Push this repository to GitHub.
2. Import the project into Vercel or Netlify.
3. Add the **Environment Variables** listed above in the project settings.
4. Deploy!

### Database Setup
Run the SQL migration located in `supabase/migrations/20240525000000_create_subscriptions.sql` in your Supabase SQL Editor to create the necessary tables.

## 💎 Features
- **"Proof Over Pitch" Campaign**: Dedicated marketing assets.
- **Strategy Engine**: Split-screen chat/editor interface.
- **Monetization**: Built-in Stripe checkout for Pro plans.
- **Elite Aesthetic**: "Deep Red" dark mode design system.

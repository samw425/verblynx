import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, name, message, type } = body;

        console.log(`📧 New ${type} notification:`, { email, name });

        const subject = type === 'signup'
            ? "🚀 New Beta Signup - Verblynx"
            : "💬 New Contact Message - Verblynx";

        const htmlContent = type === 'signup'
            ? `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #dc2626; font-size: 24px; margin: 0;">🎯 NEW BETA SIGNUP</h1>
                    </div>
                    <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
                        <h2 style="color: #fff; font-size: 18px; margin-top: 0;">User Details:</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 12px 0; color: #888; font-weight: 600;">Name:</td><td style="padding: 12px 0; color: #fff; font-weight: 700;">${name}</td></tr>
                            <tr><td style="padding: 12px 0; color: #888; font-weight: 600;">Email:</td><td style="padding: 12px 0; color: #fff; font-weight: 700;">${email}</td></tr>
                            <tr><td style="padding: 12px 0; color: #888; font-weight: 600;">Time:</td><td style="padding: 12px 0; color: #fff;">${new Date().toLocaleString()}</td></tr>
                        </table>
                    </div>
                </div>
            `
            : `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #dc2626; font-size: 24px; margin: 0;">💬 NEW MESSAGE</h1>
                    </div>
                    <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
                        <h2 style="color: #fff; font-size: 18px; margin-top: 0;">Sender Details:</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 12px 0; color: #888; font-weight: 600;">Name:</td><td style="padding: 12px 0; color: #fff; font-weight: 700;">${name}</td></tr>
                            <tr><td style="padding: 12px 0; color: #888; font-weight: 600;">Email:</td><td style="padding: 12px 0; color: #fff; font-weight: 700;">${email}</td></tr>
                        </table>
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
                            <h3 style="color: #888; font-size: 14px; margin-bottom: 10px;">Message:</h3>
                            <p style="color: #fff; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                </div>
            `;

        // Send email notification
        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Verblynx <onboarding@resend.dev>",
                to: ["saziz4250@gmail.com"],
                subject: subject,
                html: htmlContent,
            }),
        });

        if (!emailResponse.ok) {
            const errorText = await emailResponse.text();
            console.error("❌ Resend API error:", errorText);
            return NextResponse.json({ success: true, emailSent: false, error: "Email failed" });
        }

        return NextResponse.json({ success: true, emailSent: true });

    } catch (error: any) {
        console.error("❌ Notify API Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

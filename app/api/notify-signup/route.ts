import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, full_name } = body;

        console.log("📧 New signup notification:", { email, full_name });

        // Send email notification
        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Verblynx <onboarding@verblynx.com>",
                to: ["saziz4250@gmail.com"],
                subject: "🚀 New Beta Signup - Verblynx",
                html: `
                    <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px 20px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #dc2626; font-size: 24px; margin: 0;">🎯 NEW BETA SIGNUP</h1>
                        </div>
                        
                        <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
                            <h2 style="color: #fff; font-size: 18px; margin-top: 0;">User Details:</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; color: #888; font-weight: 600;">Name:</td>
                                    <td style="padding: 12px 0; color: #fff; font-weight: 700;">${full_name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #888; font-weight: 600;">Email:</td>
                                    <td style="padding: 12px 0; color: #fff; font-weight: 700;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #888; font-weight: 600;">Time:</td>
                                    <td style="padding: 12px 0; color: #fff;">${new Date().toLocaleString()}</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div style="background: #dc2626; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); border-radius: 12px; padding: 20px; text-align: center;">
                            <p style="margin: 0; color: #fff; font-size: 14px;">
                                <strong>Action Required:</strong> Welcome them personally or review their profile in Supabase.
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
                            <p style="color: #666; font-size: 12px; margin: 0;">
                                Sent from Verblynx Beta Signup System
                            </p>
                        </div>
                    </div>
                `,
            }),
        });

        if (!emailResponse.ok) {
            const errorText = await emailResponse.text();
            console.error("❌ Resend API error:", errorText);
            // Don't fail the request if email fails
            return NextResponse.json({
                success: true,
                emailSent: false,
                error: "Email notification failed but signup was recorded"
            });
        }

        console.log("✅ Notification email sent successfully");
        return NextResponse.json({ success: true, emailSent: true });

    } catch (error: any) {
        console.error("❌ Notify API Error:", error);
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

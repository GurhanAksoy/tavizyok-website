import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { kurumAdi, yetkili, email, telefon, mesaj } = body

    console.log("📧 Mail gönderme isteği alındı:", { kurumAdi, yetkili, email })

    // 🔥 ZOHO ENV DEBUG
    console.log("ZOHO_DEBUG_EMAIL:", process.env.ZOHO_EMAIL)
    console.log("ZOHO_DEBUG_PASSWORD:", process.env.ZOHO_PASSWORD)

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD
      },
      debug: true,
      logger: true
    })

    const mailOptions = {
      from: `"Taviz Yok Website" <${process.env.ZOHO_EMAIL}>`,
      to: "iletisim@tavizyok.com",
      replyTo: email,
      subject: kurumAdi ? `Yeni Demo Talebi - ${kurumAdi}` : `Yeni İletişim - ${yetkili}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🔔 Yeni İletişim Talebi</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            ${kurumAdi ? `<p style="margin: 10px 0;"><strong style="color: #1e3a8a;">🏛️ Kurum:</strong> ${kurumAdi}</p>` : ''}
            <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">👤 Ad Soyad:</strong> ${yetkili}</p>
            <p style="margin: 10px 0;"><strong style="color: #1e3a8a;">📧 E-posta:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            ${telefon && telefon !== '-' ? `<p style="margin: 10px 0;"><strong style="color: #1e3a8a;">📱 Telefon:</strong> ${telefon}</p>` : ''}
            ${mesaj ? `
              <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; border-left: 4px solid #3b82f6; border-radius: 5px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #1e3a8a;">💬 Mesaj:</strong></p>
                <p style="margin: 0; white-space: pre-wrap; color: #374151;">${mesaj}</p>
              </div>
            ` : ''}
          </div>
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>Bu mail Taviz Yok web sitesi iletişim formundan gönderilmiştir.</p>
          </div>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)

    console.log("✅ Mail başarıyla gönderildi:", info.messageId)

    return NextResponse.json({
      success: true,
      messageId: info.messageId
    })

  } catch (error: any) {
    console.error("❌ Mail gönderme hatası:", error)
    return NextResponse.json({
      success: false,
      error: error.message || "Mail gönderilemedi"
    }, { status: 500 })
  }
}

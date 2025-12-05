import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { kurumAdi, yetkili, email, telefon, mesaj } = await request.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: "iletisim@tavizyok.com",
      subject: `Yeni Demo Talebi - ${kurumAdi || yetkili}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #1e3a8a;">Yeni İletişim Talebi</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
            ${kurumAdi ? `<p><strong>Kurum:</strong> ${kurumAdi}</p>` : ''}
            <p><strong>Ad Soyad:</strong> ${yetkili}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            ${telefon && telefon !== '-' ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ''}
            ${mesaj ? `<p><strong>Mesaj:</strong></p><p style="white-space: pre-wrap;">${mesaj}</p>` : ''}
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: "Email gönderilemedi" }, { status: 500 })
  }
}

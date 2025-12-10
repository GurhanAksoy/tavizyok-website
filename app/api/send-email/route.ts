import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// 1) Refresh Token → Access Token alma fonksiyonu
async function getAccessToken() {
  const params = new URLSearchParams()
  params.append("refresh_token", process.env.ZOHO_REFRESH_TOKEN!)
  params.append("client_id", process.env.ZOHO_CLIENT_ID!)
  params.append("client_secret", process.env.ZOHO_CLIENT_SECRET!)
  params.append("grant_type", "refresh_token")

  const res = await fetch("https://accounts.zoho.eu/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  })

  const data = await res.json()
  console.log("🔑 Yeni Access Token alındı:", data)

  if (!data.access_token) {
    throw new Error("Access token alınamadı: " + JSON.stringify(data))
  }

  return data.access_token
}

export async function POST(request: Request) {
  try {
    const { kurumAdi, yetkili, email, telefon, mesaj } = await request.json()

    console.log("📩 Yeni mail isteği:", { kurumAdi, yetkili, email })

    // 2) Her mail gönderiminde yeni access_token al
    const accessToken = await getAccessToken()

    // 3) OAuth 2.0 üzerinden SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 587,
      secure: false,
      auth: {
        type: "OAuth2",
        user: process.env.ZOHO_FROM,
        clientId: process.env.ZOHO_CLIENT_ID,
        clientSecret: process.env.ZOHO_CLIENT_SECRET,
        refreshToken: process.env.ZOHO_REFRESH_TOKEN,
        accessToken,
      }
    })

    // 4) Mail içeriği
    const mailOptions = {
      from: `"Taviz Yok" <${process.env.ZOHO_FROM}>`,
      to: process.env.ZOHO_FROM,
      replyTo: email,
      subject: kurumAdi
        ? `Yeni Demo Talebi - ${kurumAdi}`
        : `Yeni İletişim - ${yetkili}`,
      html: `
        <h2>Yeni İletişim Talebi</h2>
        ${kurumAdi ? `<p><b>Kurum:</b> ${kurumAdi}</p>` : ""}
        <p><b>Ad Soyad:</b> ${yetkili}</p>
        <p><b>Email:</b> ${email}</p>
        ${telefon ? `<p><b>Telefon:</b> ${telefon}</p>` : ""}
        <p><b>Mesaj:</b><br>${mesaj}</p>
      `
    }

    // 5) Gönder
    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Mail gönderildi:", info)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("❌ Mail HATASI:", err)
    return NextResponse.json({ success: false, error: err.message })
  }
}

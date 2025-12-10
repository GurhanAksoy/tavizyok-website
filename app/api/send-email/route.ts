import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { kurumAdi, yetkili, email, telefon, mesaj } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",          // EU !!!
      port: 587,                     // OAuth2 = 587
      secure: false,
      auth: {
        type: "OAuth2",
        user: process.env.ZOHO_FROM,
        clientId: process.env.ZOHO_CLIENT_ID,
        clientSecret: process.env.ZOHO_CLIENT_SECRET,
        refreshToken: process.env.ZOHO_REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `Taviz Yok Website <${process.env.ZOHO_FROM}>`,
      to: process.env.ZOHO_FROM,
      subject: kurumAdi
        ? `Yeni Demo Talebi - ${kurumAdi}`
        : `Yeni İletişim - ${yetkili}`,
      html: `
        <h2>Yeni İletişim Talebi</h2>
        <p><b>Ad Soyad:</b> ${yetkili}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefon:</b> ${telefon}</p>
        <p><b>Mesaj:</b><br>${mesaj}</p>
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (err: any) {
    console.error("❌ Mail HATASI:", err);
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}

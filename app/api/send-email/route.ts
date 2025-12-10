import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log("🔥🔥🔥 TAVIZYOK SMTP ROUTE ÇALIŞTI 🔥🔥🔥");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { kurumAdi, yetkili, email, telefon, mesaj } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",   // Avrupa datacenter
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD
      }
    });

    const info = await transporter.sendMail({
      from: `Taviz Yok <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: kurumAdi
        ? `Yeni Demo Talebi - ${kurumAdi}`
        : `Yeni İletişim - ${yetkili}`,
      html: `
        <h2>Yeni iletişim talebi</h2>
        <p><b>Ad Soyad:</b> ${yetkili}</p>
        <p><b>E-posta:</b> ${email}</p>
        <p><b>Telefon:</b> ${telefon}</p>
        <p><b>Mesaj:</b><br>${mesaj}</p>
      `
    });

    return NextResponse.json({
      success: true,
      id: info.messageId
    });

  } catch (err: any) {
    console.error("❌ Mail HATASI:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

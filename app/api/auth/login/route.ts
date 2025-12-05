import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { loginSchema, sanitizeInput } from "@/lib/validation/auth"
import { checkLoginRateLimit, getClientIP } from "@/lib/security/rate-limiter"
import { verifyCSRFToken } from "@/lib/security/csrf"

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request.headers)
    const isAllowed = await checkLoginRateLimit(clientIP)
    
    if (!isAllowed) {
      return NextResponse.json(
        { error: "Çok fazla deneme. 15 dakika sonra tekrar deneyin." },
        { status: 429 }
      )
    }

    const csrfToken = request.headers.get("x-csrf-token")
    if (!csrfToken || !verifyCSRFToken(csrfToken)) {
      return NextResponse.json(
        { error: "Geçersiz güvenlik token" },
        { status: 403 }
      )
    }

    const body = await request.json()
    const validation = loginSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: "Geçersiz form verileri" },
        { status: 400 }
      )
    }

    const { email, password } = validation.data

    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: sanitizeInput(email),
      password,
    })

    if (error) {
      return NextResponse.json(
        { error: "E-posta veya şifre hatalı" },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      user: { id: data.user.id, email: data.user.email },
      redirect: "/kurum-panel",
    })

  } catch (error) {
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    )
  }
}
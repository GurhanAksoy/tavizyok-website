import { randomBytes, createHmac } from "crypto"

const SECRET = process.env.JWT_SECRET || "fallback-secret"

export function generateCSRFToken(): string {
  const token = randomBytes(32).toString("hex")
  const hmac = createHmac("sha256", SECRET)
  hmac.update(token)
  return token + "." + hmac.digest("hex")
}

export function verifyCSRFToken(token: string): boolean {
  const parts = token.split(".")
  if (parts.length !== 2) return false
  
  const hmac = createHmac("sha256", SECRET)
  hmac.update(parts[0])
  return parts[1] === hmac.digest("hex")
}
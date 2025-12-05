import { RateLimiterMemory } from "rate-limiter-flexible"

const loginLimiter = new RateLimiterMemory({
  points: 5,
  duration: 900,
})

export async function checkLoginRateLimit(identifier: string): Promise<boolean> {
  try {
    await loginLimiter.consume(identifier)
    return true
  } catch {
    return false
  }
}

export function getClientIP(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0] ||
    headers.get("x-real-ip") ||
    "unknown"
  )
}
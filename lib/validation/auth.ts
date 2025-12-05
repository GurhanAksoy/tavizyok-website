import { z } from "zod"
import validator from "validator"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function sanitizeInput(input: string): string {
  return validator.escape(validator.trim(input))
}
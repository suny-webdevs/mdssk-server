import { z } from "zod"

export const userUpdateValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }).optional(),
  image: z.string().optional(),
})

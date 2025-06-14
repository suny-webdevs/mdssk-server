import { z } from "zod"

export const portfolioValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  technologies: z.array(z.string()).optional(),
  liveUrl: z.string().url("Live URL must be a valid URL").optional(),
  repoUrl: z.string().url("Repo URL must be a valid URL").optional(),
  imageUrl: z.string().url("Image URL must be a valid URL").optional(),
  featured: z.boolean().optional(),
})

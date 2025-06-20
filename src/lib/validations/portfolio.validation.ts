import { z } from "zod"

export const portfolioValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  technologies: z.array(z.string()),
  category: z.string(),
  liveUrl: z.string().url("Live URL must be a valid URL"),
  repoUrl: z.string().url("Repo URL must be a valid URL"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
})

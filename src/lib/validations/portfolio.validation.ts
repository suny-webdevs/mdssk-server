import { z } from "zod"

export const addPortfolioValidationSchema = z.object({
  thumbnail: z
    .string({ required_error: "Thumbnail URL is required" })
    .url("Thumbnail URL must be a valid URL"),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  technologies: z.string({
    required_error: "Technologies is required",
  }),
  images: z.string().optional(),
  live: z
    .string({ required_error: "Live URL is required" })
    .url("Live URL must be a valid URL"),
  github: z
    .string({ required_error: "GitHub Repo URL is required" })
    .url("GitHub Repo URL must be a valid URL"),
})

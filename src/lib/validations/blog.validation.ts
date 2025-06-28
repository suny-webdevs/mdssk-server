import { z } from "zod"

export const addBlogValidationSchema = z.object({
  coverImage: z.string().url("Cover Image URL must be a valid URL"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string({ required_error: "Category is required" }),
  tags: z.string().optional(),
})

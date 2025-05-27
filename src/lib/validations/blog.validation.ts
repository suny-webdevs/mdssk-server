import { z } from "zod"

export const blogValidationSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  author: z.string().min(2, "Author name is required"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  coverImage: z.string().url("Cover Image must be a valid URL").optional(),
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),
  isPublished: z.boolean().optional(),
  publishedAt: z.date().optional(),
})

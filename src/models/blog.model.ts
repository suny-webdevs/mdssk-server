import { TBlogPost } from "@/types/blog.type"
import { Schema, model, models } from "mongoose"

const blogSchema = new Schema<TBlogPost>(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    coverImage: {
      type: String,
      required: [true, "Cover Image URL is required"],
    },
    tags: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    publishedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
)

const Blog = models.Blog || model<TBlogPost>("Blog", blogSchema)

export default Blog

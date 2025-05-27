import { Types } from "mongoose"

export type TBlogPost = {
  _id?: string
  title: string
  authorId: Types.ObjectId
  content: string
  coverImage?: string
  tags?: string[]
  category?: string
  isPublished?: boolean
  publishedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

import { Types } from "mongoose"

export type TBlogPost = {
  _id?: string
  authorId: Types.ObjectId
  coverImage: string
  title: string
  category: string
  tags?: string
  content: string
  publishedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

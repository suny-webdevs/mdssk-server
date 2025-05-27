/* eslint-disable @typescript-eslint/no-explicit-any */
import Blog from "@/models/blog.model"
import { TBlogPost } from "@/types/blog.type"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  try {
    const data: TBlogPost = await req.json()
    console.log({ data })

    const res = await Blog.create(data)
    console.log({ res })

    return NextResponse.json(
      {
        success: true,
        message: "Blog added successful",
        res,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const GET = async () => {
  try {
    const res = await Blog.find()
    console.log({ res })

    return NextResponse.json(
      {
        success: true,
        message: "Blogs fetched successful",
        res,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

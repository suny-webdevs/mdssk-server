"use client"

import Loading from "@/app/loading"
import { useGetBlogQuery } from "@/redux/features/blog/blogApi"
import Image from "next/image"
import { Badge } from "../ui/badge"
import TextToHTML from "@/utils/textToHTML"

const BlogClient = ({ id }: { id: string }) => {
  const { data: blog, isLoading } = useGetBlogQuery(id)

  if (isLoading) return <Loading />

  return (
    <div>
      <div className="relative">
        <Image
          src={blog?.data?.coverImage}
          alt={blog?.data?.title}
          title={blog?.data?.title}
          width={1080}
          height={920}
          className="object-cover object-center rounded-2xl"
        />
        <Badge className="absolute top-3 right-3">{blog?.data?.category}</Badge>
      </div>
      <div className="flex items-center gap-2 my-5">
        {blog?.data?.tags.split(",").map((item: string, index: number) => (
          <Badge
            className="bg-gray-200 text-black hover:text-white backdrop-blur-xl"
            key={index}
          >
            {item}
          </Badge>
        ))}
      </div>
      <div>
        <h1>{blog?.data?.title}</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between my-2 text-gray-500">
          <span>Author : {blog?.data?.authorId?.role}</span>
          <span>Published on : {blog?.data?.createdAt.split("T")[0]}</span>
        </div>
      </div>
      <div className="mt-10">
        <TextToHTML text={blog?.data?.content} />
      </div>
    </div>
  )
}

export default BlogClient

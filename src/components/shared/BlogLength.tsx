"use client"

import Loading from "@/app/loading"
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi"

const BlogLength = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined)

  if (isLoading) return <Loading />

  return (
    <span className="text-8xl font-bold">
      {blogs?.data?.length < 10
        ? `0${blogs?.data?.length}`
        : blogs?.data?.length}
    </span>
  )
}

export default BlogLength

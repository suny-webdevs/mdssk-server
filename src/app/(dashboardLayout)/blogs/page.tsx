import BlogsClient from "@/components/shared/BlogsClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs | Admin - Suny-WebDevs",
}

const BlogsPage = () => {
  return (
    <div className="mt-5">
      <BlogsClient />
    </div>
  )
}

export default BlogsPage

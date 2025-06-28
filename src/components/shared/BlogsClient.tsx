"use client"
import Loading from "@/app/loading"
import DynamicTabs from "@/components/shared/DynamicTabs"
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi"
import BlogListCard from "../cards/BlogListCard"
import BlogGridCard from "../cards/BlogGridCard"

const BlogsClient = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined)

  if (isLoading) return <Loading />

  return (
    <div>
      <DynamicTabs
        addButtonLabel="Add Blog"
        addButtonLink="/blogs/add"
        data={blogs?.data}
        ListDataComponent={BlogListCard}
        GridDataComponent={BlogGridCard}
      />
    </div>
  )
}

export default BlogsClient

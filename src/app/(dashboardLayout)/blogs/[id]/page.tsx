import BlogClient from "@/components/shared/BlogClient"
import { getBlog } from "@/utils/actions"
import { Metadata } from "next"

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> => {
  const { id } = await params
  const res = await getBlog(id)

  if (!!res?.success) {
    return {
      title: "Blog not found",
    }
  }
  return {
    title: res?.title + " | Admin - Suny-WebDevs",
  }
}

const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  return (
    <div className="md:w-[90%] md:mx-auto xl:w-[60%] my-10">
      <BlogClient id={id} />
    </div>
  )
}

export default DynamicBlogPage

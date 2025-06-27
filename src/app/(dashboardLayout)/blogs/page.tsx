import GridCard from "@/components/cards/ProjectGridCard"
import ListCard from "@/components/cards/ProjectListCard"
import DynamicTabs from "@/components/shared/DynamicTabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs | Admin - Suny-WebDevs",
}

const blogs = [
  {
    _id: "1",
    title: "How to build a custom hook",
    category: "Coding",
    image: "https://i.ibb.co/LPWhhc7/bandarban.jpg",
  },
  {
    _id: "2",
    title: "How to deploy on vercel",
    category: "Deployment",
    image: "https://i.ibb.co/LPWhhc7/bandarban.jpg",
  },
]

const BlogsPage = () => {
  return (
    <div className="mt-5">
      <DynamicTabs
        addButtonLabel="Add Blog"
        addButtonLink="/blogs/add"
        data={blogs}
        ListDataComponent={ListCard}
        GridDataComponent={GridCard}
      />
    </div>
  )
}

export default BlogsPage

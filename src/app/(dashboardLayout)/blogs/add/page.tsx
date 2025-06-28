import AddBlogForm from "@/components/forms/AddBlogForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Add Blog | Admin - Suny-WebDevs",
}

const AddBlogPage = () => {
  return (
    <div>
      <h1>Add Blog</h1>
      <AddBlogForm />
    </div>
  )
}

export default AddBlogPage

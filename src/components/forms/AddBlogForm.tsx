/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import TiptapEditor from "../text-editor/TiptapEditor"
import { Button } from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCreateBlogMutation } from "@/redux/features/blog/blogApi"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { addBlogValidationSchema } from "@/lib/validations/blog.validation"
import { useSession } from "next-auth/react"

const AddBlogForm = () => {
  const router = useRouter()
  const [content, setContent] = useState("")
  const session = useSession()
  const authorId = session?.data?.user?.id

  const onChange = (content: string) => {
    setContent(content)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addBlogValidationSchema),
  })

  const [addBlog, { isLoading }] = useCreateBlogMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addBlog({ authorId, content, ...data })
      if (res?.data?.success) {
        router.push("/blogs")
        toast.success(res?.data?.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-5"
    >
      <div>
        <Label>Cover Image URL</Label>
        <Input
          placeholder="Cover Image URL"
          {...register("coverImage", { required: true })}
        />
        {errors.coverImage && (
          <span className="text-red-500">{errors.coverImage.message}</span>
        )}
      </div>
      <div>
        <Label>Title</Label>
        <Input
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </div>
      <div>
        <Label>Category</Label>
        <Input
          placeholder="Category"
          {...register("category", { required: true })}
        />
        {errors.category && (
          <span className="text-red-500">{errors.category.message}</span>
        )}
      </div>
      <div>
        <Label>Tags</Label>
        <Input
          placeholder="Tags(Comma separated)"
          {...register("tags")}
        />
      </div>
      <div>
        <Label>Content</Label>
        <TiptapEditor
          desc={content}
          onChange={onChange}
        />
      </div>
      <Button
        type="submit"
        size={"lg"}
      >
        {isSubmitting || isLoading ? "Adding blog..." : "Add blog"}
      </Button>
    </form>
  )
}

export default AddBlogForm

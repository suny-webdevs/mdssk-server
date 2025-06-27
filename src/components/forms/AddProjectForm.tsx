/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import TiptapEditor from "@/components/text-editor/TiptapEditor"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { useState } from "react"
import { useCreateProjectMutation } from "@/redux/features/portfolio/portfolioApi"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { addPortfolioValidationSchema } from "@/lib/validations/portfolio.validation"
import { useRouter } from "next/navigation"

const AddProjectForm = () => {
  const router = useRouter()
  const [description, setDescription] = useState("")

  const onChange = (desc: string) => {
    setDescription(desc)
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(addPortfolioValidationSchema),
  })

  const [addProject, { isLoading }] = useCreateProjectMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addProject({ description, ...data })
      if (res?.data?.success) {
        router.push("/portfolios")
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
        <Label>Thumbnail</Label>
        <Input
          placeholder="Thumbnail URL"
          {...register("thumbnail", { required: true })}
        />
        {errors.thumbnail && (
          <span className="text-red-500 text-sm">
            {errors.thumbnail.message}
          </span>
        )}
      </div>
      <div>
        <Label>Title</Label>
        <Input
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>
      <div>
        <Label>Category</Label>
        <Input
          placeholder="Category"
          {...register("category", { required: true })}
        />
        {errors.category && (
          <span className="text-red-500 text-sm">
            {errors.category.message}
          </span>
        )}
      </div>
      <div>
        <Label>Technologies</Label>
        <Input
          placeholder="Technologies"
          {...register("technologies", { required: true })}
        />
        {errors.technologies && (
          <span className="text-red-500 text-sm">
            {errors.technologies.message}
          </span>
        )}
      </div>
      <div>
        <Label>Images</Label>
        <Input
          placeholder="Images URL"
          {...register("images")}
        />
      </div>
      <div>
        <Label>Live URL</Label>
        <Input
          placeholder="Live URL"
          {...register("live", { required: true })}
        />
        {errors.live && (
          <span className="text-red-500 text-sm">{errors.live.message}</span>
        )}
      </div>
      <div>
        <Label>GitHub Repo URL</Label>
        <Input
          placeholder="GitHub Repo URL"
          {...register("github", { required: true })}
        />
        {errors.github && (
          <span className="text-red-500 text-sm">{errors.github.message}</span>
        )}
      </div>
      <div>
        <Label>Description</Label>
        <TiptapEditor
          desc={description}
          onChange={onChange}
        />
      </div>
      <Button size={"lg"}>
        {isSubmitting || isLoading ? "Adding project..." : "Add project"}
      </Button>
    </form>
  )
}

export default AddProjectForm

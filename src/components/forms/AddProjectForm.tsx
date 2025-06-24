"use client"
import TiptapEditor from "@/components/text-editor/TiptapEditor"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

const AddProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const onSubmit = () => {}

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
      </div>
      <div>
        <Label>Title</Label>
        <Input
          placeholder="Title"
          {...register("title", { required: true })}
        />
      </div>
      <div>
        <Label>Category</Label>
        <Input
          placeholder="Category"
          {...register("category", { required: true })}
        />
      </div>
      <div>
        <Label>Technologies</Label>
        <Input
          placeholder="Technologies"
          {...register("technologies", { required: true })}
        />
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
      </div>
      <div>
        <Label>GitHub Repo URL</Label>
        <Input
          placeholder="GitHub Repo URL"
          {...register("github", { required: true })}
        />
      </div>
      <div>
        <Label>Description</Label>
        <TiptapEditor />
      </div>
      <Button size={"lg"}>
        {isSubmitting ? "Adding project..." : "Add project"}
      </Button>
    </form>
  )
}

export default AddProjectForm

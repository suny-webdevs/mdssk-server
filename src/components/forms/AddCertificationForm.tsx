"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addCertificationValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"

const AddCertificationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addCertificationValidationSchema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 w-full p-5"
    >
      <div>
        <Input
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Textarea
          placeholder="Description"
          {...register("description")}
        />
      </div>

      <div>
        <Input
          placeholder="Institute"
          {...register("institute", { required: true })}
        />
        {errors.institute && (
          <p className="text-red-500 text-sm">{errors.institute.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Input
          placeholder="Image URL"
          {...register("image")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          placeholder="File URL"
          {...register("file")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add Certificate"}
      </Button>
    </form>
  )
}

export default AddCertificationForm

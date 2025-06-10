"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { addServiceValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const AddServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addServiceValidationSchema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full p-5"
    >
      <div>
        <Input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>
      <div>
        <Textarea
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button>{isSubmitting ? "Adding..." : "Add Service"}</Button>
    </form>
  )
}

export default AddServiceForm

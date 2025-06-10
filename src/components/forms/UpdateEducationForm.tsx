"use client"

import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateEducationValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"

const UpdateEducationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateEducationValidationSchema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full p-5"
    >
      <div>
        <Input
          type="text"
          placeholder="Institute"
          {...register("institute")}
        />
        {errors.institute && (
          <span className="text-red-500 text-sm">
            {errors.institute.message}
          </span>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="Degree"
          {...register("degree")}
        />
        {errors.degree && (
          <span className="text-red-500 text-sm">{errors.degree.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="CGPA"
          {...register("cgpa")}
        />
        {errors.cgpa && (
          <span className="text-red-500 text-sm">{errors.cgpa.message}</span>
        )}
      </div>
      <Button>{isSubmitting ? "Adding..." : "Add Education"}</Button>
    </form>
  )
}

export default UpdateEducationForm

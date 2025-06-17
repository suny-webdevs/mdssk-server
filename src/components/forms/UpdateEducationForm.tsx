/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateEducationValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { useUpdateEducationMutation } from "@/redux/features/profile/educationApi"
import { toast } from "sonner"

type TUpdateEducationForm = {
  data: Record<string, string>
}

const UpdateEducationForm = ({ data }: TUpdateEducationForm) => {
  const { _id, institute, degree, cgpa, passingYear, session, duration } = data
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateEducationValidationSchema),
  })

  const [updateEducation, { isLoading }] = useUpdateEducationMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateEducation({ _id, ...data })
      if (res?.data?.success) {
        toast.success(res?.data?.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full p-5"
    >
      <div>
        <Input
          type="text"
          defaultValue={institute}
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
          defaultValue={degree}
          {...register("degree")}
        />
        {errors.degree && (
          <span className="text-red-500 text-sm">{errors.degree.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          defaultValue={cgpa}
          {...register("cgpa")}
        />
        {errors.cgpa && (
          <span className="text-red-500 text-sm">{errors.cgpa.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          defaultValue={passingYear}
          {...register("passingYear")}
        />
        {errors.passingYear && (
          <span className="text-red-500 text-sm">
            {errors.passingYear.message}
          </span>
        )}
      </div>
      <div>
        <Input
          type="text"
          defaultValue={session}
          {...register("session")}
        />
        {errors.session && (
          <span className="text-red-500 text-sm">{errors.session.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          defaultValue={duration}
          {...register("duration")}
        />
        {errors.duration && (
          <span className="text-red-500 text-sm">
            {errors.duration.message}
          </span>
        )}
      </div>
      <Button>
        {isSubmitting || isLoading ? "Updating..." : "Update Education"}
      </Button>
    </form>
  )
}

export default UpdateEducationForm

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { addEducationValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { useSession } from "next-auth/react"
import { useCreateEducationMutation } from "@/redux/features/profile/educationApi"
import { toast } from "sonner"

const AddEducationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addEducationValidationSchema),
  })

  const session = useSession()
  const userId = session?.data?.user?.id
  const [addEducation, { isLoading }] = useCreateEducationMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addEducation({ userId, ...data })
      if (res?.data?.success) {
        toast.success(res?.data?.message)
      }
    } catch (error: any) {
      toast.error(error?.message)
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
          placeholder="Institute"
          {...register("institute", { required: true })}
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
          {...register("degree", { required: true })}
        />
        {errors.degree && (
          <span className="text-red-500 text-sm">{errors.degree.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="CGPA"
          {...register("cgpa", { required: true })}
        />
        {errors.cgpa && (
          <span className="text-red-500 text-sm">{errors.cgpa.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="Passing year"
          {...register("passingYear", { required: true })}
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
          placeholder="Session"
          {...register("session", { required: true })}
        />
        {errors.session && (
          <span className="text-red-500 text-sm">{errors.session.message}</span>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="Duration"
          {...register("duration", { required: true })}
        />
        {errors.duration && (
          <span className="text-red-500 text-sm">
            {errors.duration.message}
          </span>
        )}
      </div>
      <Button>
        {isSubmitting || isLoading ? "Adding..." : "Add Education"}
      </Button>
    </form>
  )
}

export default AddEducationForm

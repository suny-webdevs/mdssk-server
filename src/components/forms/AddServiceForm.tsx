/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { addServiceValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useSession } from "next-auth/react"
import { useCreateServiceMutation } from "@/redux/features/profile/servicesApi"
import { toast } from "sonner"

const AddServiceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addServiceValidationSchema),
  })

  const session = useSession()
  const userId = session?.data?.user?.id
  const [addService, { isLoading }] = useCreateServiceMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addService({ userId, ...data })
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
      <Button>{isSubmitting || isLoading ? "Adding..." : "Add Service"}</Button>
    </form>
  )
}

export default AddServiceForm

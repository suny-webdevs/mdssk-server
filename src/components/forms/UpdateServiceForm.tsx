/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { updateServiceValidationSchema } from "@/lib/validations/profile.validation"
import { useUpdateServiceMutation } from "@/redux/features/profile/servicesApi"
import { toast } from "sonner"

type TUpdateServiceFormProps = {
  data: Record<string, string>
}

const UpdateServiceForm = ({ data }: TUpdateServiceFormProps) => {
  const { _id, title, description } = data
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateServiceValidationSchema),
  })

  const [updateService, { isLoading }] = useUpdateServiceMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateService({ _id, ...data })
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
          defaultValue={title}
          {...register("title")}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>
      <div>
        <Textarea
          defaultValue={description}
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button>
        {isSubmitting || isLoading ? "Updating..." : "Update Service"}
      </Button>
    </form>
  )
}

export default UpdateServiceForm

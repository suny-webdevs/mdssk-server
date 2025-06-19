/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { updateCertificationValidationSchema } from "@/lib/validations/profile.validation"
import { useUpdateCertificationMutation } from "@/redux/features/profile/certificationApi"
import { Label } from "../ui/label"
import { toast } from "sonner"

type TUpdateCertificationFormProps = {
  data: Record<string, string>
}

const UpdateCertificationForm = ({ data }: TUpdateCertificationFormProps) => {
  const { _id, title, description, institute, image, file } = data

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateCertificationValidationSchema),
  })

  const [updateCertificate, { isLoading }] = useUpdateCertificationMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateCertificate({ _id, ...data })
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
      className="space-y-5 w-full p-5"
    >
      <div>
        <Label>Title</Label>
        <Input
          defaultValue={title}
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Textarea
          defaultValue={description}
          {...register("description")}
        />
      </div>

      <div>
        <Label>Institute</Label>
        <Input
          defaultValue={institute}
          {...register("institute")}
        />
        {errors.institute && (
          <p className="text-red-500 text-sm">{errors.institute.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label>Image</Label>
        <Input
          defaultValue={image}
          {...register("image")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>File URL</Label>
        <Textarea
          defaultValue={file}
          {...register("file")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting || isLoading ? "Updating..." : "Update Certificate"}
      </Button>
    </form>
  )
}

export default UpdateCertificationForm

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { updateSocialLinkValidationSchema } from "@/lib/validations/profile.validation"
import { useUpdateSocialLinkMutation } from "@/redux/features/profile/socialLinksApi"
import { toast } from "sonner"

type TUpdateSocialLinkFormProps = {
  data: Record<string, string>
}

const UpdateSocialLinkForm = ({ data }: TUpdateSocialLinkFormProps) => {
  const { _id, label, link } = data

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateSocialLinkValidationSchema),
  })

  const [updateSocialLink, { isLoading }] = useUpdateSocialLinkMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateSocialLink({ _id, ...data })
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
        <Input
          defaultValue={label}
          {...register("label")}
        />
        {errors.label && (
          <p className="text-red-500 text-sm">{errors.label.message}</p>
        )}
      </div>

      <div>
        <Input
          defaultValue={link}
          {...register("link")}
        />
        {errors.link && (
          <p className="text-red-500 text-sm">{errors.link.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting || isLoading ? "Updating..." : "Update Social Link"}
      </Button>
    </form>
  )
}

export default UpdateSocialLinkForm

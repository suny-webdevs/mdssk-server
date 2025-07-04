/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addSocialLinkValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import { useCreateSocialLinkMutation } from "@/redux/features/profile/socialLinksApi"
import { toast } from "sonner"

const AddSocialLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addSocialLinkValidationSchema),
  })

  const session = useSession()
  const userId = session?.data?.user?.id
  const [addSocialLink, { isLoading }] = useCreateSocialLinkMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await addSocialLink({ userId, ...data })
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
      className="space-y-5 w-full p-5"
    >
      <div>
        <Input
          placeholder="Label"
          {...register("label", { required: true })}
        />
        {errors.label && (
          <p className="text-red-500 text-sm">{errors.label.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Link"
          {...register("link", { required: true })}
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
        {isSubmitting || isLoading ? "Adding..." : "Add Social Link"}
      </Button>
    </form>
  )
}

export default AddSocialLinkForm

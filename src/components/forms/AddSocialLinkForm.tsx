"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addSocialLinkValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const AddSocialLinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addSocialLinkValidationSchema),
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
        {isSubmitting ? "Adding..." : "Add Social Link"}
      </Button>
    </form>
  )
}

export default AddSocialLinkForm

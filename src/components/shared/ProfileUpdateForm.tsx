"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label"

const ProfileUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileValidationSchema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 w-full p-5"
    >
      {/* Biography */}
      <div>
        <Label>Biography</Label>
        <Textarea
          placeholder="Biography"
          {...register("biography")}
        />
        {errors.biography && (
          <p className="text-red-500 text-sm">{errors.biography.message}</p>
        )}
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        <Label>Skills</Label>
        <Input
          placeholder="Tech Skills (space separated)"
          {...register("skills.0.techSkills")}
        />
        <Input
          placeholder="Soft Skills (space separated)"
          {...register("skills.0.softSkills")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  )
}

export default ProfileUpdateForm

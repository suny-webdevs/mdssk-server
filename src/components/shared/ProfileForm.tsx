"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileValidationSchema } from "@/lib/validations/profile.validation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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
      className="space-y-5 max-w-2xl mx-auto p-5"
    >
      {/* Biography */}
      <div>
        <Textarea
          placeholder="Biography"
          {...(register("biography"), require)}
        />
        {errors.biography && (
          <p className="text-red-500 text-sm">{errors.biography.message}</p>
        )}
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Tech Skills (comma separated)"
          {...register("skills.0.techSkills")}
        />
        <Input
          placeholder="Soft Skills (comma separated)"
          {...register("skills.0.softSkills")}
        />
      </div>

      {/* Education */}
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Institute"
          {...register("education.0.institute")}
        />
        <Input
          placeholder="Degree"
          {...register("education.0.degree")}
        />
        <Input
          placeholder="CGPA"
          {...register("education.0.cgpa")}
        />
      </div>

      {/* Services */}
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Service Title"
          {...register("services.0.title")}
        />
        <Textarea
          placeholder="Service Description"
          {...register("services.0.description")}
        />
      </div>

      {/* Certification */}
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Certification Title"
          {...register("certification.0.title")}
        />
        <Input
          placeholder="Certification Institute"
          {...register("certification.0.institute")}
        />
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Social Label"
          {...register("socialLinks.0.label")}
        />
        <Input
          placeholder="Social Link"
          {...register("socialLinks.0.link")}
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

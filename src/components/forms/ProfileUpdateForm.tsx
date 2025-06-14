/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateProfileValidationSchema } from "@/lib/validations/profile.validation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label"
import { useSession } from "next-auth/react"
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/profile/profileApi"
import { toast } from "sonner"

const ProfileUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(updateProfileValidationSchema),
  })

  const session = useSession()
  const userId = session.data?.user?.id
  const { data: profileData } = useGetProfileQuery(
    session.data?.user?.id as string
  )
  const [updateProfile, { isLoading }] = useUpdateProfileMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateProfile({ userId, ...data })
      console.log(res)
      if (res.data.success) {
        toast.success(res.data.message)
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
      {/* Biography */}
      <div>
        <Label>Biography</Label>
        <Textarea
          placeholder="Biography"
          defaultValue={profileData?.data?.biography}
          {...register("biography")}
        />
        {errors.biography && (
          <p className="text-red-500 text-sm">{errors.biography.message}</p>
        )}
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-2">
        <Label>Skills</Label>
        <Textarea
          placeholder="Tech Skills (comma separated)"
          defaultValue={profileData?.data?.skills?.techSkills}
          {...register("skills.techSkills")}
        />
        <Textarea
          placeholder="Soft Skills (comma separated)"
          defaultValue={profileData?.data?.skills?.softSkills}
          {...register("skills.softSkills")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting || isLoading ? "Updating..." : "Update Profile Info"}
      </Button>
    </form>
  )
}

export default ProfileUpdateForm

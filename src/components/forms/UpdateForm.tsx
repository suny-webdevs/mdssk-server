/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { TUser } from "@/types"
import { updateUser } from "@/utils/actions"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { userUpdateValidationSchema } from "@/lib/validations/user.validation"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

type TUpdateUserProps = {
  success: boolean
  message: string
  data: TUser
}

const UpdateForm = ({ user }: { user: TUpdateUserProps }) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userUpdateValidationSchema),
  })

  const onSubmit: SubmitHandler<Partial<TUser>> = async ({
    name,
    email,
    image,
  }) => {
    try {
      const res = await updateUser(user?.data?.email, { name, email, image })
      if (res.success) {
        if (user?.data?.email !== email) {
          await signOut()
          router.push("/")
          toast.success(res.message)
        }
        toast.success(res.message)
      }
    } catch (error: any) {
      toast.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4"
    >
      <div className="">
        <Input
          id="name"
          defaultValue={user?.data?.name}
          placeholder="Name"
          className="col-span-3"
          {...register("name")}
        />
      </div>
      <div className="">
        <Input
          id="email"
          defaultValue={user?.data?.email}
          placeholder="email"
          className="col-span-3"
          {...register("email")}
        />
      </div>
      <div className="">
        <Input
          id="photo"
          defaultValue={user?.data?.image}
          placeholder="Photo URL"
          className="col-span-3"
          {...register("image")}
        />
      </div>
      <Button type="submit">Update</Button>
    </form>
  )
}

export default UpdateForm

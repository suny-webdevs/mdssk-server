/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { TLoginInputValues } from "@/types"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginValidationSchema } from "@/lib/validations/login.validation"
import { Button } from "../ui/button"
import { loginUser } from "@/utils/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputValues>({
    resolver: zodResolver(loginValidationSchema),
  })

  const onSubmit: SubmitHandler<TLoginInputValues> = async ({
    email,
    password,
  }) => {
    try {
      const res = await loginUser({ email, password })
      if (res.success) {
        router.push("/dashboard")
        toast.success("Login successful")
      }
    } catch (error: any) {
      console.log(error)
      throw new Error(error)
    }
  }

  return (
    <div className="p-5 md:p-10 border-2 rounded-3xl shadow-md">
      <h2 className="text-black/80 text-3xl font-bold text-center">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-5 w-80"
      >
        <div className="flex flex-col gap-1">
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default LoginForm

export type TUser = {
  id: string
  name: string
  email: string
  password: string
  photo?: string
  role: "Admin"
  createdAt?: Date
  updatedAt?: Date
}

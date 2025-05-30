export type TUser = {
  id: string
  name: string
  email: string
  password: string
  image?: string
  role: "Admin"
  createdAt?: Date
  updatedAt?: Date
}

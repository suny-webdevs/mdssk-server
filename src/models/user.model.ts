import { TUser } from "@/types"
import { Schema, model, models } from "mongoose"

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, default: "Admin" },
  },
  { timestamps: true }
)

export const User = models.User || model<TUser>("User", userSchema)

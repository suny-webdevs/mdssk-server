import { TProfile } from "@/types"
import { Schema, model, models } from "mongoose"

// 🧩 Sub-schema definitions

const skillsSchema = new Schema(
  {
    techSkills: {
      type: String,
      required: [true, "Tech skills are required"],
    },
    softSkills: {
      type: String,
      required: [true, "Soft skills are required"],
    },
  },
  { _id: false }
)

const educationSchema = new Schema(
  {
    institute: { type: String, required: [true, "Institute is required"] },
    degree: { type: String, required: [true, "Degree is required"] },
    cgpa: { type: Schema.Types.Mixed, required: [true, "CGPA is required"] }, // Accepts string or number
  },
  { _id: false }
)

const servicesSchema = new Schema(
  {
    title: { type: String, required: [true, "Service title is required"] },
    description: {
      type: String,
      required: [true, "Service description is required"],
    },
  },
  { _id: false }
)

const certificationSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Certification title is required"],
    },
    institute: {
      type: String,
      required: [true, "Certification institute is required"],
    },
    description: { type: String },
    image: { type: String },
    file: { type: String },
  },
  { _id: false }
)

const socialLinksSchema = new Schema(
  {
    label: { type: String, required: [true, "Social link label is required"] },
    link: { type: String, required: [true, "Social link is required"] },
  },
  { _id: false }
)

// 🌐 Profile Schema
const profileSchema = new Schema<TProfile>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },
    biography: { type: String, required: [true, "Biography is required"] },
    skills: {
      type: skillsSchema,
      required: [true, "Skills field is required"],
    },
    education: {
      type: [educationSchema],
      required: [true, "Education field is required"],
    },
    services: {
      type: [servicesSchema],
      required: [true, "Services field is required"],
    },
    certification: {
      type: [certificationSchema],
      required: [true, "Certification field is required"],
    },
    socialLinks: {
      type: [socialLinksSchema],
      required: [true, "Social link field is required"],
    },
  },
  { timestamps: true }
)

// ✅ Model
export const Profile =
  models.Profile || model<TProfile>("Profile", profileSchema)

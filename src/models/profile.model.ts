import {
  TCertification,
  TEducation,
  TProfile,
  TServices,
  TSocialLinks,
} from "@/types"
import { Schema, model, models } from "mongoose"

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

// 🌐 Education Schema
const educationSchema = new Schema<TEducation>(
  {
    institute: { type: String, required: [true, "Institute is required"] },
    degree: { type: String, required: [true, "Degree is required"] },
    cgpa: { type: String, required: [true, "CGPA is required"] },
    passingYear: { type: String, required: [true, "Passing year is required"] },
    session: { type: String, required: [true, "Session is required"] },
    duration: { type: String, required: [true, "Duration is required"] },
  },
  { timestamps: true }
)

// 🌐 Services Schema
const servicesSchema = new Schema<TServices>(
  {
    title: { type: String, required: [true, "Service title is required"] },
    description: {
      type: String,
      required: [true, "Service description is required"],
    },
  },
  { timestamps: true }
)

// 🌐 Certifications Schema
const certificationSchema = new Schema<TCertification>(
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
  { timestamps: true }
)

// 🌐 SocialLinks Schema
const socialLinksSchema = new Schema<TSocialLinks>(
  {
    label: { type: String, required: [true, "Social link label is required"] },
    link: { type: String, required: [true, "Social link is required"] },
  },
  { timestamps: true }
)

// 🌐 Profile Schema
const profileSchema = new Schema<TProfile>(
  {
    biography: { type: String, required: [true, "Biography is required"] },
    skills: {
      type: skillsSchema,
      required: [true, "Skills field is required"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },
    education: [
      {
        type: Schema.Types.ObjectId,
        ref: "Education",
        unique: true,
        required: [true, "Education field is required"],
      },
    ],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
        unique: true,
        required: [true, "Service field is required"],
      },
    ],
    certification: [
      {
        type: Schema.Types.ObjectId,
        ref: "Certification",
        unique: true,
        required: [true, "Certification field is required"],
      },
    ],
    socialLinks: [
      {
        type: Schema.Types.ObjectId,
        ref: "SocialLink",
        unique: true,
        required: [true, "SocialLink field is required"],
      },
    ],
  },
  { timestamps: true }
)

// ✅ Models
export const Profile =
  models.Profile || model<TProfile>("Profile", profileSchema)

export const Education =
  models.Education || model<TEducation>("Education", educationSchema)

export const Service =
  models.Service || model<TServices>("Service", servicesSchema)

export const Certification =
  models.Certification ||
  model<TCertification>("Certification", certificationSchema)

export const SocialLink =
  models.SocialLink || model<TSocialLinks>("SocialLink", socialLinksSchema)

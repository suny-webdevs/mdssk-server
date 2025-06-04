import { Types } from "mongoose"

export type TSkills = {
  techSkills: string
  softSkills: string
}

export type TEducation = {
  institute: string
  degree: string
  cgpa: string | number
}

export type TServices = {
  title: string
  description: string
}

export type TCertification = {
  title: string
  description?: string
  institute: string
  image?: string
  file?: string
}

export type TSocialLinks = {
  label: string
  link: string
}

export type TProfile = {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  biography: string
  skills: TSkills
  education: Types.ObjectId
  services: Types.ObjectId
  certification: Types.ObjectId
  socialLinks: Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}

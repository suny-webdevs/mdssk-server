import { Types } from "mongoose"

export type TSkills = {
  techSkills: string
  softSkills: string
}

export type TEducation = {
  _id?: Types.ObjectId
  institute: string
  degree: string
  cgpa: string
  passingYear: string
  session: string
  duration: string
  createdAt?: Date
  updatedAt?: Date
}

export type TServices = {
  _id?: Types.ObjectId
  title: string
  description: string
}

export type TCertification = {
  _id?: Types.ObjectId
  title: string
  description?: string
  institute: string
  image?: string
  file?: string
}

export type TSocialLinks = {
  _id?: Types.ObjectId
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

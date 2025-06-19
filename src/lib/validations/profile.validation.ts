import { z } from "zod"

// 🎯 Reusable Field Validations
const requiredString = (field: string) =>
  z.string({ message: `${field} must be string` })

export const updateProfileValidationSchema = z.object({
  biography: requiredString("Biography").optional(),

  skills: z
    .object({
      techSkills: requiredString("Tech skills"),
      softSkills: requiredString("Soft skills"),
    })
    .optional(),
})

export const addEducationValidationSchema = z.object({
  institute: requiredString("Institute"),
  degree: requiredString("Degree"),
  cgpa: requiredString("CGPA"),
  passingYear: requiredString("Passing year"),
  session: requiredString("Session"),
  duration: requiredString("Duration"),
})
export const updateEducationValidationSchema = z.object({
  institute: requiredString("Institute").optional(),
  degree: requiredString("Degree").optional(),
  cgpa: requiredString("CGPA").optional(),
  passingYear: requiredString("Passing year").optional(),
  session: requiredString("Session").optional(),
  duration: requiredString("Duration").optional(),
})

export const addServiceValidationSchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
})
export const updateServiceValidationSchema = z.object({
  title: requiredString("Title").optional(),
  description: requiredString("Description").optional(),
})

export const addCertificationValidationSchema = z.object({
  title: requiredString("Title"),
  description: z.string().optional(),
  institute: requiredString("Institute"),
  image: z.string().optional(),
  file: z.string().optional(),
})
export const updateCertificationValidationSchema = z.object({
  title: requiredString("Title").optional(),
  description: z.string().optional(),
  institute: requiredString("Institute").optional(),
  image: z.string().optional(),
  file: z.string().optional(),
})

export const addSocialLinkValidationSchema = z.object({
  label: requiredString("Label"),
  link: requiredString("Link"),
})
export const updateSocialLinkValidationSchema = z.object({
  label: requiredString("Label").optional(),
  link: requiredString("Link").optional(),
})

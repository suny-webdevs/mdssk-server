import { z } from "zod"

// 🎯 Reusable Field Validations
const requiredString = (field: string) =>
  z.string().min(1, `${field} is required`)

export const profileValidationSchema = z.object({
  biography: requiredString("Biography"),

  skills: z
    .array(
      z.object({
        techSkills: requiredString("Tech skills"),
        softSkills: requiredString("Soft skills"),
      })
    )
    .min(1, "Skills is required"),

  education: z
    .array(
      z.object({
        institute: requiredString("Institute"),
        degree: requiredString("Degree"),
        cgpa: z.union([z.string().min(1), z.number()]),
      })
    )
    .min(1, "Education is required"),

  services: z
    .array(
      z.object({
        title: requiredString("Service title"),
        description: requiredString("Service description"),
      })
    )
    .min(1, "Services is required"),

  certification: z
    .array(
      z.object({
        title: requiredString("Certification title"),
        institute: requiredString("Certification institute"),
        image: z.string().optional(),
        file: z.string().optional(),
      })
    )
    .min(1, "Certification is required"),

  socialLinks: z
    .array(
      z.object({
        label: requiredString("Social link label"),
        link: requiredString("Social link"),
      })
    )
    .min(1, "Social link is required"),
})

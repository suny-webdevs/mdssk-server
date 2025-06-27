import { TPortfolioProject } from "@/types"
import { Schema, model, models } from "mongoose"

const projectSchema = new Schema<TPortfolioProject>(
  {
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Project category is required"],
      trim: true,
    },
    technologies: {
      type: String,
      required: [true, "Project technologies is required"],
    },
    images: {
      type: String,
    },
    live: {
      type: String,
      required: [true, "Project live url is required"],
      trim: true,
    },
    github: {
      type: String,
      required: [true, "Project repo url is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
  },
  {
    timestamps: true,
  }
)

const Project =
  models.Project || model<TPortfolioProject>("Project", projectSchema)

export default Project

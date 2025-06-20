import { Schema, model, models } from "mongoose"

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Project category is required"],
      trim: true,
    },
    technologies: {
      type: [String],
      required: [true, "Project technologies is required"],
      default: [],
    },
    liveUrl: {
      type: String,
      required: [true, "Project live url is required"],
      trim: true,
    },
    repoUrl: {
      type: String,
      required: [true, "Project repo url is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, "Project image url is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Project = models.Project || model("Project", projectSchema)

export default Project

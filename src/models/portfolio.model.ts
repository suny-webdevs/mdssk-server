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
    technologies: {
      type: [String],
      default: [],
    },
    liveUrl: {
      type: String,
      trim: true,
    },
    repoUrl: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Project = models.Project || model("Project", projectSchema)

export default Project

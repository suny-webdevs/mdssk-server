import mongoose from "mongoose"

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log("Database connected")
  } catch (error) {
    console.log({ message: "Failed to connect database", error })
  }
}

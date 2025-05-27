import mongoose from "mongoose"

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
  } catch (error) {
    console.log({ message: "Failed to connect database", error })
  }
}

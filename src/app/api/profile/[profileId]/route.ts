import { connectToDatabase } from "@/lib/mongoose"
import { Profile } from "@/models/profile.model"
import { TProfile } from "@/types"
import { NextResponse } from "next/server"

export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ profileId: string }> }
) => {
  try {
    await connectToDatabase()
    const payload: Partial<TProfile> = await req.json()
    const { profileId } = await params

    const res = await Profile.findByIdAndUpdate(profileId, payload)
    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully",
        data: res,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        data: error,
      },
      { status: 500 }
    )
  }
}

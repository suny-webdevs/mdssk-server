/* eslint-disable @typescript-eslint/no-explicit-any */
import UpdateEducationForm from "../forms/UpdateEducationForm"
import { useDeleteEducationMutation } from "@/redux/features/profile/educationApi"
import { toast } from "sonner"
import Loading from "@/app/(dashboardLayout)/loading"
import { useSession } from "next-auth/react"
import DynamicInfoCard from "./DynamicInfoCard"

type TEducationInfoCardProps = {
  data: Record<string, string>
}

const EducationInfoCard = ({ data }: TEducationInfoCardProps) => {
  const { _id, institute, degree, passingYear, session, duration } = data
  const [deleteEducation, { isLoading }] = useDeleteEducationMutation()
  const userSession = useSession()
  const userId = userSession.data?.user.id

  const handleDelete = async () => {
    try {
      const res = await deleteEducation({ userId, _id })
      if (res?.data?.success) {
        toast.success(res?.data?.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <DynamicInfoCard
      updateForm={<UpdateEducationForm data={data} />}
      deleteHandler={handleDelete}
    >
      <div>
        <h1 className="font-semibold text-white">{institute}</h1>
        <div className="flex flex-col text-sm text-white/80">
          <span>
            Degree : {degree} - {passingYear}
          </span>
          <span>Session : {session}</span>
          <span>Duration : {duration}</span>
        </div>
      </div>
    </DynamicInfoCard>
  )
}

export default EducationInfoCard

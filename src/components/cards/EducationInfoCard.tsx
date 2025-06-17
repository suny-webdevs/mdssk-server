/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react"
import { DynamicDrawer } from "../shared/DynamicDrawer"
import UpdateEducationForm from "../forms/UpdateEducationForm"
import { useDeleteEducationMutation } from "@/redux/features/profile/educationApi"
import { toast } from "sonner"
import Loading from "@/app/(dashboardLayout)/loading"
import { useSession } from "next-auth/react"

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
    <div className="group relative bg-black/10 backdrop:blur-xl p-4 rounded-xl">
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
      <div className="group-hover:flex flex-col justify-center gap-1 py-3 bg-black/20 backdrop:blur-lg rounded-3xl absolute top-4 bottom-4 right-2 hidden">
        <DynamicDrawer
          form={<UpdateEducationForm data={data} />}
          row
        />
        <hr className="border-white/20" />
        <button
          onClick={handleDelete}
          className="bg-transparent text-red-400 hover:bg-transparent hover:text-red-600 backdrop:blur-lg p-2"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
    </div>
  )
}

export default EducationInfoCard

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSession } from "next-auth/react"
import UpdateServiceForm from "../forms/UpdateServiceForm"
import DynamicInfoCard from "./DynamicInfoCard"
import { useDeleteServiceMutation } from "@/redux/features/profile/servicesApi"
import { toast } from "sonner"
import Loading from "@/app/(dashboardLayout)/loading"

type TServiceInfoCardProps = {
  data: Record<string, string>
}

const ServicesInfoCard = ({ data }: TServiceInfoCardProps) => {
  const { _id, title, description } = data

  const userSession = useSession()
  const userId = userSession.data?.user.id

  const [deleteService, { isLoading }] = useDeleteServiceMutation()

  const handleDelete = async () => {
    try {
      const res = await deleteService({ userId, _id })
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
      updateForm={<UpdateServiceForm data={data} />}
      deleteHandler={handleDelete}
    >
      <div className="flex flex-col gap-2 text-white">
        <span className="font-bold text-lg">{title}</span>
        <span className="lg:w-[40%]">{description}</span>
      </div>
    </DynamicInfoCard>
  )
}

export default ServicesInfoCard

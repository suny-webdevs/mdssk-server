/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import UpdateCertificationForm from "../forms/UpdateCertificationForm"
import DynamicInfoCard from "./DynamicInfoCard"
import { useDeleteCertificationMutation } from "@/redux/features/profile/certificationApi"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import Loading from "@/app/(dashboardLayout)/loading"

type TCertificationInfoCardProps = {
  data: Record<string, string>
}

const CertificationInfoCard = ({ data }: TCertificationInfoCardProps) => {
  const { _id, title, description, institute, file } = data

  const userSession = useSession()
  const userId = userSession.data?.user.id
  const [deleteCertificate, { isLoading }] = useDeleteCertificationMutation()

  const handleDelete = async () => {
    try {
      const res = await deleteCertificate({ userId, _id })
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
      updateForm={<UpdateCertificationForm data={data} />}
      deleteHandler={handleDelete}
    >
      <div className="flex flex-col gap-5 text-white">
        <div className="flex flex-col">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-sm">{institute}</span>
        </div>
        <div className="flex flex-col gap-2 lg:w-[40%]">
          <span>{description}</span>
          {file && (
            <div className="flex flex-col gap-1 bg-black/5 backdrop-blur-lg p-4 rounded-3xl">
              <span className="font-bold">File URL</span>
              <Link
                href={file}
                target="_blank"
              >
                {file}
              </Link>
            </div>
          )}
        </div>
      </div>
    </DynamicInfoCard>
  )
}

export default CertificationInfoCard

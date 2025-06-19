/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeleteSocialLinkMutation } from "@/redux/features/profile/socialLinksApi"
import UpdateSocialLinkForm from "../forms/UpdateSocialLinkForm"
import DynamicInfoCard from "./DynamicInfoCard"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import Loading from "@/app/loading"

type TSocialLinkInfoCardProps = {
  data: Record<string, string>
}

const SocialLinksInfoCard = ({ data }: TSocialLinkInfoCardProps) => {
  const { _id, label, link } = data

  const userSession = useSession()
  const userId = userSession.data?.user.id
  const [deleteSocialLink, { isLoading }] = useDeleteSocialLinkMutation()

  const handleDelete = async () => {
    try {
      const res = await deleteSocialLink({ userId, _id })
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
      updateForm={<UpdateSocialLinkForm data={data} />}
      deleteHandler={handleDelete}
    >
      <div className="flex flex-col gap-1 text-white">
        <span className="font-bold">{label}</span>
        <span>{link}</span>
      </div>
    </DynamicInfoCard>
  )
}

export default SocialLinksInfoCard

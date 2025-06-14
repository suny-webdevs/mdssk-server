import { getUser } from "@/utils/actions"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"

const getUserSession = async () => {
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user?.email as string)
  return user
}

export default getUserSession

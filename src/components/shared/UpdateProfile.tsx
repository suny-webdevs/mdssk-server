import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { getUser } from "@/utils/actions"
import { authOptions } from "@/utils/authOptions"
import { UserRoundPen } from "lucide-react"
import { getServerSession } from "next-auth"
import UpdateForm from "./UpdateForm"

const UpdateProfile = async () => {
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user?.email as string)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-transparent select-none"
        >
          <UserRoundPen className="text-white text-xl" />
          <span className="text-base text-white">Update</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click update when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <UpdateForm user={user} />
      </DialogContent>
    </Dialog>
  )
}

export default UpdateProfile

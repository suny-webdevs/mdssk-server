import UpdateProfile from "@/components/shared/UpdateProfile"
import { ShieldCheck } from "lucide-react"
import Image from "next/image"

const ProfilePage = () => {
  return (
    <div className="size-full">
      <div className="relative h-full w-full rounded-3xl p-5 flex items-center justify-center bg-black/80">
        <span className="absolute top-7 left-7 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-100/10 border border-green-200/30 text-green-500 tracking-wider">
          <ShieldCheck className="text-xs" />
          <span className="font-semibold">Admin</span>
        </span>
        <span className="absolute top-7 right-7">
          <UpdateProfile />
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src={
              "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Profile image"
            width={100}
            height={100}
            className="rounded-full object-cover border-2 border-white size-20 md:size-36"
          />
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-bold">
              Md Suny Shaikh
            </h1>
            <p className="text-center text-xl text-white font-medium">
              mdsunyshaikh@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

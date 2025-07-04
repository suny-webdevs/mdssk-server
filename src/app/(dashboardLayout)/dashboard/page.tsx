import BlogLength from "@/components/shared/BlogLength"
import PortfolioLength from "@/components/shared/PortfolioLength"
import { Button } from "@/components/ui/button"
import { getUser } from "@/utils/actions"
import { authOptions } from "@/utils/authOptions"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user?.email as string)

  return (
    <div className="flex flex-col justify-center gap-2 md:gap-5">
      <div className="relative h-[40rem] lg:h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-gradient-to-b from-black via-black/90 to-black/80">
        <span className="absolute top-5 left-5 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-100/10 border border-green-200/30 text-green-500 tracking-wider">
          <ShieldCheck className="text-xs" />
          <span className="font-semibold">
            {session?.user.role === "Admin" && user?.data?.role}
          </span>
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src={
              user?.data?.image ||
              "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Profile image"
            width={100}
            height={100}
            className="rounded-full object-cover border-2 border-white size-20 md:size-36"
          />
          <div className="flex flex-col items-center justify-center gap-2 md:gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-bold">
              {user?.data?.name}
            </h1>
            <Link href={"/profile"}>
              <Button
                variant={"ghost"}
                className="text-white hover:text-black"
              >
                View Profile <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center gap-2 md:gap-5">
        <div className="h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-gradient-to-b from-black/80 via-black/70 to-black/60">
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="flex flex-col items-center gap-5">
              <PortfolioLength />
              <span className="text-xl tracking-wider font-bold uppercase">
                portfolios
              </span>
            </div>
            <Link href={"/portfolios"}>
              <Button
                variant={"ghost"}
                className="text-white hover:text-black"
              >
                See All <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-gradient-to-b from-black/60 via-black/50 to-black/40 md:from-black/80 md:via-black/70 md:to-black/60">
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="flex flex-col items-center gap-5">
              <BlogLength />
              <span className="text-xl tracking-widest font-bold uppercase">
                all blogs
              </span>
            </div>
            <Link href={"/blogs"}>
              <Button
                variant={"ghost"}
                className="text-white hover:text-black"
              >
                See All <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

import { Button } from "@/components/ui/button"
import { authOptions } from "@/utils/authOptions"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="relative h-[40rem] lg:h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-black/80">
        <span className="absolute top-5 left-5 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-100/10 border border-green-200/30 text-green-500 tracking-wider">
          <ShieldCheck className="text-xs" />
          <span className="font-semibold">Admin</span>
        </span>
        <div className="flex flex-col items-center justify-center gap-1">
          <Image
            src={
              session?.user?.image ||
              "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Profile image"
            width={100}
            height={100}
            className="rounded-full object-cover border-2 border-white size-20 md:size-36"
          />
          <div className="flex flex-col items-center justify-center gap-2 md:gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-bold">
              {session?.user?.name}
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
      <div className="w-full flex flex-col lg:flex-row items-center gap-5">
        <div className="h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-black/80">
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="flex flex-col items-center gap-5">
              <span className="text-8xl font-bold">
                {/* todo: Add portfolios length */} 10
              </span>
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
        <div className="h-96 w-full rounded-3xl p-5 flex items-center justify-center bg-black/80">
          <div className="flex flex-col gap-1 items-center justify-center text-white">
            <div className="flex flex-col items-center gap-5">
              <span className="text-8xl font-bold">
                {/* todo: Add blogs length */} 10
              </span>
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

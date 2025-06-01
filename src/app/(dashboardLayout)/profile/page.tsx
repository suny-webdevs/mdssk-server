import UpdateProfile from "@/components/shared/UpdateProfile"
import { getUser } from "@/utils/actions"
import { authOptions } from "@/utils/authOptions"
import { ShieldCheck } from "lucide-react"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import Image from "next/image"
import styles from "./styles.module.css"
import { ProfileUpdateDrawer } from "@/components/shared/ProfileUpdateDrawer"

export const metadata: Metadata = {
  title: "Profile | Admin - Suny-WebDevs",
}

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user.email as string)

  return (
    <div className="size-full flex flex-col justify-center gap-2 md:gap-5">
      <div className="relative h-[40rem] w-full rounded-3xl p-5 flex items-center justify-center bg-black/80">
        <span className="absolute top-7 left-7 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-100/10 border border-green-200/30 text-green-500 tracking-wider">
          <ShieldCheck className="text-xs" />
          <span className="font-semibold">
            {session?.user.role === "Admin" && user?.data?.role}
          </span>
        </span>
        <span className="absolute top-7 right-7">
          <UpdateProfile />
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
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white text-center font-bold">
              {user?.data?.name}
            </h1>
            <p className="text-center text-xl text-white font-medium">
              {user?.data?.email}
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full rounded-3xl pb-5 pt-10 lg:pt-20 bg-black/80">
        <span className="absolute top-7 right-7">
          <ProfileUpdateDrawer />
        </span>
        <div className={styles.card}>
          <div>
            <h1 className={styles.card_header}>Biography</h1>
            <p className={styles.card_normal_text}>
              Motivated MERN Stack Developer skilled in building dynamic,
              scalable web applications. Passionate about clean code,
              performance optimization, and seamless user experiences.
            </p>
          </div>
          <div>
            <h1 className={styles.card_header}>Skills</h1>
            <div className={styles.card_normal_text}>
              <p>
                <span className="font-bold">Tech skills : </span>
                Next.Js, React.Js, Node.Js, TypeScript, Express.Js, Tailwind
                CSS, Mongoose, MongoDB, PostgreSQL, Prisma
              </p>
              <p>
                <span className="font-bold">Soft skills : </span>
                Well communication, Networking, Presentation
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.card_header}>Education</h1>
            <div className={styles.card_normal_text}>
              <p>
                <span className="font-bold">Institute : </span>GOVT P.C Collage,
                Bagerhat
              </p>
              <p>
                <span className="font-bold">Degree : </span>BSS Honours, 3rd
                year
              </p>
              <p>
                <span className="font-bold">CGPA : </span>3.50
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.card_header}>Services</h1>
            <div className={styles.card_normal_text}>
              <p className="font-bold">1. Full Stack Development</p>
              <p>
                Bridging front and back—crafting seamless, scalable, and dynamic
                web solutions.
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.card_header}>Certification</h1>
            <div className={styles.card_normal_text}>
              <p>
                <span className="font-bold">Title : </span>Full Stack
                Development
              </p>
              <p>
                <span className="font-bold">Institute : </span>Programming Hero
              </p>
            </div>
          </div>
          <div>
            <h1 className={styles.card_header}>Social Links</h1>
            <div className={styles.card_normal_text}>
              <p>
                <span className="font-bold">Label :</span>GitHub
              </p>
              <p>
                <span className="font-bold">Link : </span>
                https://github.com/suny-webdevs
              </p>
            </div>
            <div className={styles.card_normal_text}>
              <p>
                <span className="font-bold">Label :</span>LinkedIn
              </p>
              <p>
                <span className="font-bold">Link : </span>
                https://linkedin.com/in/mdsunyshaikh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

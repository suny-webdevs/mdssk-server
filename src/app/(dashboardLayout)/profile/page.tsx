import UpdateProfile from "@/components/shared/UpdateProfile"
import { getUser } from "@/utils/actions"
import { authOptions } from "@/utils/authOptions"
import { ShieldCheck } from "lucide-react"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import Image from "next/image"
import styles from "./styles.module.css"
import { ProfileUpdateDrawer } from "@/components/shared/ProfileUpdateDrawer"
import { DynamicTable } from "@/components/shared/DynamicTable"

export const metadata: Metadata = {
  title: "Profile | Admin - Suny-WebDevs",
}

const skills = [
  {
    techSkills:
      "Next.Js, React.Js, Node.Js, TypeScript, Express.Js, Tailwind CSS, Mongoose, MongoDB, PostgreSQL, Prisma",
    softSkills: "Well communication, Networking, Presentation",
  },
]

const educations = [
  {
    institute: "Govt P.C Collage, Bagerhat",
    degree: "BSS",
    cgpa: 3.5,
  },
]

const services = [
  {
    title: "Full Stack Development",
    description:
      "Bridging front and back—crafting seamless, scalable, and dynamic web solutions.",
  },
]

const certifications = [
  {
    title: "Full Stack Development",
    institute: "Programming Hero",
  },
]

const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/suny-webdevs",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/mdsunyshaikh",
  },
]

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  const user = await getUser(session?.user.email as string)

  return (
    <div className="size-full flex flex-col justify-center gap-2 md:gap-5">
      <div className="relative h-[40rem] w-full rounded-3xl p-5 flex items-center justify-center bg-gradient-to-b from-black via-black/90 to-black/80">
        <span className="absolute top-7 left-7 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-100/10 border border-green-200/30 text-green-500 tracking-wider">
          <ShieldCheck className="text-xs" />
          <span className="font-semibold select-none">
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
            className="rounded-full object-cover border-2 border-white size-20 md:size-36 select-none"
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
      <div className="relative w-full h-full rounded-3xl px-5 pt-20 bg-gradient-to-b from-black/80 via-black/70 to-black/50">
        <span className="absolute top-7 right-7">
          <ProfileUpdateDrawer />
        </span>
        <div className={styles.card}>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Biography</h1>
            <p className={styles.card_normal_text}>
              Motivated MERN Stack Developer skilled in building dynamic,
              scalable web applications. Passionate about clean code,
              performance optimization, and seamless user experiences.
            </p>
          </div>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Skills</h1>
            <div className={styles.card_normal_text}>
              <DynamicTable
                tableData={skills}
                tableHeader={["Tech Skills", "Soft Skills"]}
              />
            </div>
          </div>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Education</h1>
            <div className={styles.card_normal_text}>
              <DynamicTable
                tableData={educations}
                tableHeader={["Institute", "Degree", "CGPA"]}
                action
              />
            </div>
          </div>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Services</h1>
            <div className={styles.card_normal_text}>
              <DynamicTable
                tableData={services}
                tableHeader={["Title", "Description"]}
                action
              />
            </div>
          </div>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Certification</h1>
            <div className={styles.card_normal_text}>
              <DynamicTable
                tableData={certifications}
                tableHeader={["Title", "Institute"]}
                action
              />
            </div>
          </div>
          <div className={styles.card_body}>
            <h1 className={styles.card_header}>Social Links</h1>
            <div className={styles.card_normal_text}>
              <DynamicTable
                tableData={socialLinks}
                tableHeader={["Label", "Link"]}
                action
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

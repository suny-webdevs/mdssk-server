"use client"

import ProfileUpdateForm from "@/components/forms/ProfileUpdateForm"
import AddEducationForm from "@/components/forms/AddEducationForm"

import AddServiceForm from "@/components/forms/AddServiceForm"
import AddCertificationForm from "@/components/forms/AddCertificationForm"
import AddSocialLinkForm from "@/components/forms/AddSocialLinkForm"
import ProfileCard from "@/components/shared/ProfileCard"
import { DynamicDrawer } from "./DynamicDrawer"
import { useGetProfileQuery } from "@/redux/features/profile/profileApi"
import Loading from "@/app/(dashboardLayout)/loading"

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

type TProfileClientProps = {
  userId: string
}

const ProfileClient = ({ userId }: TProfileClientProps) => {
  const { data: profileData, isLoading } = useGetProfileQuery(userId)
  console.log(profileData)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="rounded-3xl px-5 py-14 bg-gradient-to-b from-black/80 via-black/70 to-black/50">
      <div className="w-[99%] h-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col gap-5 md:gap-10">
        <div className="relative px-5 pb-5 pt-14 w-full bg-gradient-to-bl from-white to-black/40 rounded-3xl border-2 border-white flex flex-col gap-5">
          <span className="absolute top-2 right-3">
            <DynamicDrawer
              form={<ProfileUpdateForm />}
              buttonColor="black"
            />
          </span>
          <div className={"bg-black/50 backdrop:blur-lg p-8 rounded-3xl"}>
            <h1
              className={
                "text-3xl font-bold text-white tracking-wider select-none flex items-center justify-between"
              }
            >
              Biography
            </h1>
            <p
              className={
                "text-lg text-white mt-5 tracking-wide flex flex-col gap-2"
              }
            >
              {profileData?.data?.biography}
            </p>
          </div>
          <div className={"bg-black/50 backdrop:blur-lg p-8 rounded-3xl"}>
            <h1
              className={
                "text-3xl font-bold text-white tracking-wider select-none flex items-center justify-between"
              }
            >
              Skills
            </h1>
            <div
              className={
                "text-lg text-white mt-5 tracking-wide flex flex-col gap-5"
              }
            >
              <span>
                <span className="font-bold select-none">Tech skills : </span>
                {profileData?.data?.skills?.techSkills}
              </span>
              <span>
                <span className="font-bold select-none">Soft skills : </span>
                {profileData?.data?.skills?.softSkills}
              </span>
            </div>
          </div>
        </div>
        <ProfileCard
          title="Education"
          form={<AddEducationForm />}
          formType="add"
          tableData={educations}
          tableHeader={["Institute", "Degree", "CGPA"]}
        />

        <ProfileCard
          title="Services"
          form={<AddServiceForm />}
          formType="add"
          tableData={services}
          tableHeader={["Title", "Description"]}
        />

        <ProfileCard
          title="Certification"
          form={<AddCertificationForm />}
          formType="add"
          tableData={certifications}
          tableHeader={["Title", "Institute"]}
        />

        <ProfileCard
          title="Social Links"
          form={<AddSocialLinkForm />}
          formType="add"
          tableData={socialLinks}
          tableHeader={["Label", "Link"]}
        />
      </div>
    </div>
  )
}

export default ProfileClient

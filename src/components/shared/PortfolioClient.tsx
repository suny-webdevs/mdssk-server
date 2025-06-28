"use client"

import Loading from "@/app/loading"
import { useGetProjectQuery } from "@/redux/features/portfolio/portfolioApi"
import Image from "next/image"
import TextToHTML from "@/utils/textToHTML"
import Link from "next/link"
import { FolderGit2, Link2 } from "lucide-react"

interface IPortfolioClientProps {
  id: string
}

const PortfolioClient = ({ id }: IPortfolioClientProps) => {
  const { data: project, isLoading } = useGetProjectQuery(id)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="mt-5 md:w-[90%] md:mx-auto xl:w-[60%]">
      <div className="relative">
        <Image
          src={project?.data.thumbnail}
          alt={project?.data.title}
          width={1080}
          height={920}
          className="w-full md:h-96 object-cover object-center md:object-top rounded-3xl"
        />
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-black text-5xl">{project?.data.title}</h1>
            <p className="text-black text-base italic">
              {project?.data?.category}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="text-black bg-black/20 backdrop-blur-lg text-xs px-2 py-1 rounded-lg flex items-center gap-2"
              href={project?.data?.live}
            >
              <Link2 className="size-4" /> Live link
            </Link>
            <Link
              className="text-black bg-black/20 backdrop-blur-lg text-xs px-2 py-1 rounded-lg flex items-center gap-2"
              href={project?.data?.github}
            >
              <FolderGit2 className="size-4" /> Github Repo link
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2>
          <strong>Tech stack : </strong>
        </h2>
        <p>{project?.data?.technologies}</p>
      </div>
      <div className="mt-5">
        <TextToHTML text={project?.data?.description} />
      </div>
    </div>
  )
}

export default PortfolioClient

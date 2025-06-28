"use client"

import Loading from "@/app/loading"
import { useGetProjectsQuery } from "@/redux/features/portfolio/portfolioApi"

const PortfolioLength = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined)

  if (isLoading) {
    return <Loading />
  }

  return (
    <span className="text-8xl font-bold">
      {projects?.data?.length < 10
        ? `0${projects?.data?.length}`
        : projects?.data?.length}
    </span>
  )
}

export default PortfolioLength

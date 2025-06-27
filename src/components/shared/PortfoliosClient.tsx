"use client"
import DynamicTabs from "@/components/shared/DynamicTabs"
import { useGetProjectsQuery } from "@/redux/features/portfolio/portfolioApi"
import Loading from "@/app/loading"
import ProjectListCard from "../cards/ProjectListCard"
import ProjectGridCard from "../cards/ProjectGridCard"

const PortfoliosClient = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <DynamicTabs
        addButtonLabel="Add Portfolio"
        addButtonLink="/portfolios/add"
        data={projects?.data}
        ListDataComponent={ProjectListCard}
        GridDataComponent={ProjectGridCard}
      />
    </div>
  )
}

export default PortfoliosClient

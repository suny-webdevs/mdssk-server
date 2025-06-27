import PortfolioClient from "@/components/shared/PortfolioClient"

interface IProjectPageProps {
  params: Promise<{ id: string }>
}

const ProjectPage = async ({ params }: IProjectPageProps) => {
  const { id } = await params

  return (
    <div>
      <PortfolioClient id={id} />
    </div>
  )
}

export default ProjectPage

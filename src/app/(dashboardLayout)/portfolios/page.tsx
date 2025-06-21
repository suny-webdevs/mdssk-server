import DynamicTabs from "@/components/shared/DynamicTabs"
import ListCard from "@/components/cards/ListCard"
import GridCard from "@/components/cards/GridCard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio projects | Admin - Suny-WebDevs",
}

const projects = [
  {
    _id: "1",
    title: "Taj Apart",
    category: "Building Management System",
    image: "https://i.ibb.co/g3HBHtp/taj-apart.png",
  },
  {
    _id: "2",
    title: "Tour Master Pro",
    category: "Tour Management System",
    image: "https://i.ibb.co/D1qRky2/tour-master-pro.png",
  },
]

const PortfolioPage = () => {
  return (
    <div className="mt-5">
      <DynamicTabs
        addButtonLabel="Add Portfolio"
        addButtonLink="/portfolios/add"
        data={projects}
        ListDataComponent={ListCard}
        GridDataComponent={GridCard}
      />
    </div>
  )
}

export default PortfolioPage

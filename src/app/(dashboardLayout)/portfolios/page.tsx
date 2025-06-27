import PortfoliosClient from "@/components/shared/PortfoliosClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio projects | Admin - Suny-WebDevs",
}

const PortfolioPage = () => {
  return (
    <div className="mt-5">
      <PortfoliosClient />
    </div>
  )
}

export default PortfolioPage

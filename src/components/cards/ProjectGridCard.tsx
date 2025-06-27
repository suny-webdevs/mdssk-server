import Image from "next/image"
import { Badge } from "../ui/badge"
import { TPortfolioProject } from "@/types"
import Link from "next/link"

type TGridCardProps = {
  item: Partial<TPortfolioProject>
}

const ProjectGridCard = ({ item }: TGridCardProps) => {
  const { _id, thumbnail, title, category } = item
  return (
    <Link
      href={`/portfolios/${_id}`}
      className="group relative rounded-xl shadow"
    >
      <Image
        src={thumbnail!}
        alt={title!}
        title={title}
        width={400}
        height={100}
        className="w-full object-cover object-center rounded-xl z-10"
      />
      <div className="absolute top-0 left-0 hidden group-hover:flex items-end p-5 size-full bg-gradient-to-b from-black/10 via-black/10 to-black/95 rounded-xl z-20">
        <div>
          <h1 className="text-3xl text-white font-bold mt-1">{title}</h1>
          <Badge className="text-white bg-white/10 backdrop-blur-xl hover:bg-white/10 hover:backdrop-blur-xl">
            {category}
          </Badge>
        </div>
      </div>
    </Link>
  )
}

export default ProjectGridCard

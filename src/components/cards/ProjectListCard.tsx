import { TPortfolioProject } from "@/types"
import Image from "next/image"
import Link from "next/link"

type TListCardProps = {
  item: Partial<TPortfolioProject>
}

const ProjectListCard = ({ item }: TListCardProps) => {
  const { _id, thumbnail, title, category } = item
  return (
    <Link
      href={`/portfolios/${_id}`}
      className="flex items-center gap-2 bg-gray-100 backdrop-blur-lg p-2 rounded-xl shadow"
    >
      <Image
        src={thumbnail!}
        alt={title!}
        title={title}
        width={100}
        height={100}
        className="object-cover object-center rounded-lg"
      />
      <div>
        <h1 className="text-lg text-black/80 font-bold">{title}</h1>
        <p>{category}</p>
      </div>
    </Link>
  )
}

export default ProjectListCard

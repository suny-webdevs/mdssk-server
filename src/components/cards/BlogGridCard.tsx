import { TBlogPost } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"

type TGridCardProps = {
  item: Partial<TBlogPost>
}

const BlogGridCard = ({ item }: TGridCardProps) => {
  const { _id, title, category, coverImage } = item

  return (
    <Link
      href={`/blogs/${_id}`}
      className="group relative rounded-xl shadow"
    >
      <Image
        src={coverImage!}
        alt={title!}
        title={title}
        width={400}
        height={100}
        className="w-full object-cover object-center rounded-xl z-10"
      />
      <div className="absolute top-0 left-0 flex items-end p-5 size-full bg-gradient-to-b from-black/10 via-black/10 to-black/95 rounded-xl z-20">
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

export default BlogGridCard

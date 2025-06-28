import { TBlogPost } from "@/types"
import Image from "next/image"
import Link from "next/link"

type TListCardProps = {
  item: Partial<TBlogPost>
}

const BlogListCard = ({ item }: TListCardProps) => {
  const { _id, title, category, coverImage } = item
  return (
    <Link
      href={`/blogs/${_id}`}
      className="flex items-center gap-2 bg-gray-100 backdrop-blur-lg p-2 rounded-xl shadow"
    >
      <Image
        src={coverImage!}
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

export default BlogListCard

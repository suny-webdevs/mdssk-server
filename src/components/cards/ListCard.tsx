import Image from "next/image"

type TListCardProps = {
  item: Record<string, string>
}

const ListCard = ({ item }: TListCardProps) => {
  const { title, category, image } = item
  return (
    <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-lg p-2 rounded-xl">
      <Image
        src={image}
        alt={title}
        title={title}
        width={100}
        height={100}
        className="object-cover object-center rounded-lg"
      />
      <div>
        <h1 className="text-lg text-black/80 font-bold">{title}</h1>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ListCard

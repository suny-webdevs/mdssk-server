import Image from "next/image"

type TGridCardProps = {
  item: Record<string, string>
}

const GridCard = ({ item }: TGridCardProps) => {
  const { title, category, image } = item
  return (
    <div className="flex flex-col gap-5 bg-gray-50 backdrop-blur-lg p-4 rounded-xl">
      <Image
        src={image}
        alt={title}
        title={title}
        width={400}
        height={100}
        className="w-full object-cover object-center rounded"
      />
      <div>
        <h1 className="text-2xl text-black/80 font-bold">{title}</h1>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default GridCard

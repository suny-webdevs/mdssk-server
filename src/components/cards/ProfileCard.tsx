import { ComponentType, ReactNode } from "react"
import { DynamicDrawer } from "../shared/DynamicDrawer"

type TProfileCardProps = {
  title: string
  form: ReactNode
  formType?: "add" | "update"
  formRow?: boolean
  data: Record<string, string>[]
  dataComponent: ComponentType<{ data: Record<string, string> }>
}

const ProfileCard = ({
  title,
  form,
  formType = "update",
  formRow = false,
  data,
  dataComponent: DataComponent,
}: TProfileCardProps) => {
  return (
    <div className="bg-black/10 backdrop:blur-lg p-8 rounded-3xl">
      <h1 className="text-3xl font-bold text-white tracking-wider select-none flex items-center justify-between">
        <span>{title}</span>
        <DynamicDrawer
          form={form}
          type={formType}
          row={formRow}
        />
      </h1>
      <div className="flex flex-col gap-3 mt-5">
        {data.map((item) => (
          <DataComponent
            key={item._id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileCard

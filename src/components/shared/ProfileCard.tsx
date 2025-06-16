import { ReactNode } from "react"
import { DynamicDrawer } from "./DynamicDrawer"
import { DynamicTable } from "./DynamicTable"

type TProfileCardProps = {
  title: string
  form: ReactNode
  formType?: "add" | "update"
  formTable?: boolean
  tableData: Record<string, string | number>[]
  tableHeader: string[]
}

const ProfileCard = ({
  title,
  form,
  formType = "update",
  formTable = false,
  tableData,
  tableHeader,
}: TProfileCardProps) => {
  return (
    <div className="bg-black/10 backdrop:blur-lg p-8 rounded-3xl">
      <h1 className="text-3xl font-bold text-white tracking-wider select-none flex items-center justify-between">
        <span>{title}</span>
        <DynamicDrawer
          form={form}
          type={formType}
          table={formTable}
        />
      </h1>
      <div className="text-lg text-white mt-5 tracking-wide flex flex-col gap-2">
        <DynamicTable
          tableData={tableData}
          tableHeader={tableHeader}
          action
        />
      </div>
    </div>
  )
}

export default ProfileCard

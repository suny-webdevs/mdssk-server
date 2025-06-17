import { MouseEventHandler, ReactNode } from "react"
import InfoManageCapsule from "../shared/InfoManageCapsule"

type TDynamicInfoCardProps = {
  children: ReactNode
  updateForm: ReactNode
  deleteHandler: MouseEventHandler<HTMLButtonElement>
}

const DynamicInfoCard = ({
  children,
  updateForm,
  deleteHandler,
}: TDynamicInfoCardProps) => {
  return (
    <div className="group relative bg-black/10 backdrop:blur-xl p-4 rounded-xl">
      {children}
      <InfoManageCapsule
        updateForm={updateForm}
        deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default DynamicInfoCard

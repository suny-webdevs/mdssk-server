import { Trash2 } from "lucide-react"
import { DynamicDrawer } from "./DynamicDrawer"
import { MouseEventHandler, ReactNode } from "react"

type TInfoManageCapsuleProps = {
  updateForm: ReactNode
  deleteHandler: MouseEventHandler<HTMLButtonElement>
}

const InfoManageCapsule = ({
  updateForm,
  deleteHandler,
}: TInfoManageCapsuleProps) => {
  return (
    <div className="group-hover:flex w-20 justify-center bg-black/20 backdrop-blur-lg rounded-xl absolute top-1 right-1 hidden">
      <DynamicDrawer
        form={updateForm}
        row
      />
      <button
        onClick={deleteHandler}
        className="bg-transparent text-red-400 hover:bg-transparent hover:text-red-600 p-2"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  )
}

export default InfoManageCapsule

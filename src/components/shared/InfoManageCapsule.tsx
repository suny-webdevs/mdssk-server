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
    <div className="group-hover:flex flex-col justify-center gap-1 py-3 bg-black/20 backdrop-blur-lg rounded-3xl absolute top-4 bottom-4 right-2 hidden">
      <DynamicDrawer
        form={updateForm}
        row
      />
      <hr className="border-white/20" />
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

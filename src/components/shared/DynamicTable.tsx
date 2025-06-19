import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ReactNode } from "react"
import { DynamicDrawer } from "./DynamicDrawer"

type TDynamicTableProps = {
  tableData: Record<string, string | number>[]
  tableHeader: string[]
  action?: boolean
  form?: ReactNode
}

export function DynamicTable({
  tableData,
  tableHeader,
  action = false,
  form,
}: TDynamicTableProps) {
  const keys = Object.keys(tableData[0])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeader.map((item, index) => (
            <TableHead
              className="text-white font-bold"
              key={index}
            >
              {item}
            </TableHead>
          ))}
          {action && (
            <TableHead className="text-right text-white">Action</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data, index) => (
          <TableRow key={index}>
            {keys.map((key) => (
              <TableCell key={key}>
                {typeof data[key] === "object"
                  ? JSON.stringify(data[key])
                  : data[key]}
              </TableCell>
            ))}
            {action && (
              <TableCell className="flex items-end justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size={"icon"}
                      variant={"ghost"}
                    >
                      <EllipsisVertical className="text-sm" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <DynamicDrawer form={form} />
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <button className="text-red-500 cursor-pointer">
                          Delete
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

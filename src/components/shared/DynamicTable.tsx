import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { PenLine, Trash2 } from "lucide-react"
import SwdTooltip from "../ui/SwdTooltip"

type TDynamicTableProps = {
  tableData: Record<string, string | number>[]
  tableHeader: string[]
  action?: boolean
}

export function DynamicTable({
  tableData,
  tableHeader,
  action = false,
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
              <TableCell className="flex items-center gap-2 justify-end">
                <SwdTooltip text="Update">
                  <Button
                    size="icon"
                    className="text-white"
                  >
                    <PenLine />
                  </Button>
                </SwdTooltip>
                <SwdTooltip text="Delete">
                  <Button
                    size="icon"
                    className="text-red-500"
                  >
                    <Trash2 />
                  </Button>
                </SwdTooltip>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

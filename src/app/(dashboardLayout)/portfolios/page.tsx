import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    id: 1,
    title: "Taj Apart",
    category: "Building Management System",
  },
  {
    id: 2,
    title: "Tour Master Pro",
    category: "Tour Management System",
  },
]

const PortfolioPage = () => {
  return (
    <div>
      <Button> Add Portfolio</Button>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-end">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.title}</TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell className="flex items-center gap-3 justify-end">
                <Button
                  size="sm"
                  className="text-green-500"
                >
                  Update
                </Button>
                <Button
                  size="sm"
                  className="text-red-500"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PortfolioPage

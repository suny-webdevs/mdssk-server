import { Button } from "@/components/ui/button"
import SwdTooltip from "@/components/shared/SwdTooltip"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PenLine, Trash2 } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blogs | Admin - Suny-WebDevs",
}

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

const BlogsPage = () => {
  return (
    <div>
      <Link href={"/blogs/add"}>
        <Button>Add Blog</Button>
      </Link>
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
                <SwdTooltip text="Update">
                  <Link href={"/blogs/update"}>
                    <Button
                      size="sm"
                      className="text-white"
                    >
                      <PenLine />
                    </Button>
                  </Link>
                </SwdTooltip>
                <SwdTooltip text="Delete">
                  <Button
                    size="sm"
                    className="text-red-500"
                  >
                    <Trash2 />
                  </Button>
                </SwdTooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default BlogsPage

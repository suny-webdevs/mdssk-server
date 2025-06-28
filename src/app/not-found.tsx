import NotFoundClient from "@/components/shared/NotFound"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 Not Found",
}

const NotFound = () => {
  return <NotFoundClient />
}

export default NotFound

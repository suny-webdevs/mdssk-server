"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const DynamicBreadcrumb = () => {
  const pathname = usePathname()
  const paths = pathname.split("/").slice(1)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {paths.length === 1 && <span>{capitalize(paths[0])}</span>}
          {paths.length > 1 && (
            <BreadcrumbLink asChild>
              <Link href={`/${paths[0]}`}>{capitalize(paths[0])}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {paths.length > 1 && <BreadcrumbSeparator />}
        {paths.length > 1 && (
          <BreadcrumbItem>
            <span>{capitalize(paths[1])}</span>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DynamicBreadcrumb

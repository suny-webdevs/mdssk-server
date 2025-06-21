import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid2x2, List } from "lucide-react"
import { ComponentType } from "react"

type TDynamicTabsProps = {
  addButtonLink: string
  addButtonLabel: string
  data: Record<string, string>[]
  ListDataComponent: ComponentType<{ item: Record<string, string> }>
  GridDataComponent: ComponentType<{ item: Record<string, string> }>
}

const DynamicTabs = ({
  addButtonLink,
  addButtonLabel,
  data,
  ListDataComponent,
  GridDataComponent,
}: TDynamicTabsProps) => {
  return (
    <Tabs
      defaultValue="list"
      className="flex flex-col gap-3"
    >
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
        <Link href={addButtonLink}>
          <Button>{addButtonLabel}</Button>
        </Link>
        <TabsList>
          <TabsTrigger value="list">
            <List />
          </TabsTrigger>
          <TabsTrigger value="grid">
            <Grid2x2 />
          </TabsTrigger>
        </TabsList>
      </div>
      <div>
        <TabsContent
          value="list"
          className="flex flex-col gap-2"
        >
          {data.map((item) => (
            <ListDataComponent
              key={item._id}
              item={item}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
        >
          {data.map((item) => (
            <GridDataComponent
              key={item._id}
              item={item}
            />
          ))}
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default DynamicTabs

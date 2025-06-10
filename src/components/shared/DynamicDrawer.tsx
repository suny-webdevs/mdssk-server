"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Plus, UserRoundPen } from "lucide-react"
import { ReactNode } from "react"

type TDynamicDrawerProps = {
  form: ReactNode
  type?: "add" | "update"
}

export function DynamicDrawer({ form, type = "update" }: TDynamicDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {type === "update" ? (
          <Button
            variant="ghost"
            className="bg-transparent hover:bg-transparent select-none"
          >
            <UserRoundPen className="text-white text-xl" />
            <span className="text-base text-white">Update</span>
          </Button>
        ) : (
          <Button
            size="icon"
            variant={"ghost"}
            className="text-white"
            title="Add"
          >
            <Plus />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {type === "update" ? (
              <DrawerTitle>Update</DrawerTitle>
            ) : (
              <DrawerTitle>Add</DrawerTitle>
            )}
            {type === "update" ? (
              <DrawerDescription>
                Make changes to your profile here. Click update when you&apos;re
                done.
              </DrawerDescription>
            ) : (
              <DrawerDescription>
                Make changes to your profile here. Click add when you&apos;re
                done.
              </DrawerDescription>
            )}
          </DrawerHeader>
          {form}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

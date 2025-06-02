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
import ProfileUpdateForm from "./ProfileUpdateForm"
import { UserRoundPen } from "lucide-react"

export function ProfileUpdateDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-transparent select-none"
        >
          <UserRoundPen className="text-white text-xl" />
          <span className="text-base text-white">Update</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Update Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click update when you&apos;re
              done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="">
            <ProfileUpdateForm />
          </div>
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

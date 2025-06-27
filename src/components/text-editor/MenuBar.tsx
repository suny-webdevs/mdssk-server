import { Editor } from "@tiptap/react"
import { Toggle } from "../ui/toggle"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Underline,
} from "lucide-react"

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="bg-black/80 text-white p-1 rounded-tr-lg rounded-tl-lg">
      <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
        <Toggle
          size={"sm"}
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("paragraph")}
          onPressedChange={() => editor.chain().focus().setParagraph().run()}
        >
          P
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive("highlight")}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        >
          <Highlighter className="size-5" />
        </Toggle>

        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
        >
          <AlignJustify className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List className="size-5" />
        </Toggle>
        <Toggle
          size={"sm"}
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered className="size-5" />
        </Toggle>
      </div>
    </div>
  )
}

export default MenuBar

"use client"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./MenuBar"
import TextAlign from "@tiptap/extension-text-align"
import Highlight from "@tiptap/extension-highlight"
import Underline from "@tiptap/extension-underline"

interface ITipTapEditorProps {
  desc: string
  onChange: (desc: string) => void
}

const TiptapEditor = ({ desc, onChange }: ITipTapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-4",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Underline,
    ],
    content: desc ? desc : "<p>Write your project description here...</p>",
    editorProps: {
      attributes: {
        class:
          "min-h-[15rem] bg-slate-100 py-2 px-3 rounded-br-lg rounded-bl-lg shadow",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapEditor

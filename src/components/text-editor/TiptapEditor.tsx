"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./MenuBar"
import TextAlign from "@tiptap/extension-text-align"
import Highlight from "@tiptap/extension-highlight"
import Underline from "@tiptap/extension-underline"

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Underline,
    ],
    content: "<p>Write your project description here...</p>",
    editorProps: {
      attributes: {
        class:
          "min-h-[15rem] bg-slate-100 py-2 px-3 rounded-br-lg rounded-bl-lg shadow",
      },
    },
    immediatelyRender: false,
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapEditor

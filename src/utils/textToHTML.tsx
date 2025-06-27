interface props {
  text: string
}

const TextToHTML = ({ text }: props) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />
}

export default TextToHTML

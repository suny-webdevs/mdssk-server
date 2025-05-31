import { LoaderPinwheel } from "lucide-react"

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoaderPinwheel className="animate-spin" />
    </div>
  )
}

export default LoadingPage

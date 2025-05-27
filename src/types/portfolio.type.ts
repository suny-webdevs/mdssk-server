export type TPortfolioProject = {
  _id?: string
  title: string
  description: string
  technologies?: string[]
  liveUrl?: string
  repoUrl?: string
  imageUrl?: string
  featured?: boolean
  createdAt?: Date
  updatedAt?: Date
}

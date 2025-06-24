export type TPortfolioProject = {
  _id?: string
  thumbnail: string
  title: string
  category: string
  technologies: string[]
  images?: string[]
  live: string
  github: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

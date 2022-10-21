import { IGatsbyImageData } from "gatsby-plugin-image"

export interface ISeo {
  title?: string
  description?: string
  robot?: boolean
  featuredImage?: {
    gatsbyImageData: IGatsbyImageData
  }
  children?: React.ReactNode
}

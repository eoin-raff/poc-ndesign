import { ImageDataLike } from "gatsby-plugin-image";

export interface IMedia {
  description: string;
  gatsbyImageData: ImageDataLike | null;
}

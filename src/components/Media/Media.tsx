import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IMedia } from "./types";

const Media = ({ description, gatsbyImageData = null }: IMedia) => {
  const image = getImage(gatsbyImageData);
  return image ? (
    <GatsbyImage data-cy="image-module" image={image} alt={description || ""} />
  ) : (
    <></>
  );
};

export default Media;

import { graphql } from "gatsby";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicSection from "../components/BasicSection";
import { IBasicSection } from "../components/BasicSection/types";

const Template = ({ data }) => {
  const { pageTitle, sections } = data?.contentfulPage;
  return (
    <Box>
      <Box>
        <Typography variant="h1">{pageTitle}</Typography>
      </Box>
      {sections.map((section: IBasicSection) => (
        <BasicSection {...section} />
      ))}
    </Box>
  );
};

// export const Head = ({ data }: IArticle) => {
//   const { seo, title } = data.page
//   const seoProps: ISeo = {
//     ...seo,
//     title: seo ? seo.title : title,
//   }
//   return <Seo {...seoProps} />
// }

export default Template;

export const pageQuery = graphql`
  query Page($id: String) {
    contentfulPage(contentful_id: { eq: $id }) {
      pageTitle
      sections {
        content {
          raw
          references {
            ... on ContentfulPage {
              internal {
                type
              }
              contentful_id
              slug
            }
            ... on ContentfulAsset {
              internal {
                type
              }
              __typename
              contentful_id
              file {
                url
              }
            }
            ... on ContentfulButton {
              contentful_id
              internal {
                type
              }
              label
              internalPage {
                slug
              }
              href
              variant
              color
            }
          }
        }
        media {
          file {
            contentType
          }
          gatsbyImageData
        }
        gridRules
        flexDirection
        alignItems
        justifyContent
      }
    }
  }
`;

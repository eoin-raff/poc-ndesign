import { config as dotEnvConfig } from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotEnvConfig({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: "POC Netdesign",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ud9qwbjni2t5`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-image`,
  ],
};

export default config;

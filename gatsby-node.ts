import { CreatePagesArgs } from "gatsby";
import path from "path";

interface IPageQuery {
  allContentfulPage: {
    nodes: {
      contentful_id: string;
      slug: string;
    }[];
  };
}

export const createPages = async ({ actions, graphql }: CreatePagesArgs) => {
  actions.createPage({
    path: "/dsg",
    component: path.resolve("src/templates/dsg.tsx"),
    defer: true,
  });

  const pageQuery = await graphql<IPageQuery>(`
    query MyQuery {
      allContentfulPage {
        nodes {
          contentful_id
          slug
        }
      }
    }
  `);

  const pages = (pageQuery.data as IPageQuery).allContentfulPage.nodes;

  pages.forEach(({ slug, contentful_id }) => {
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        id: contentful_id,
      },
    });
  });
};

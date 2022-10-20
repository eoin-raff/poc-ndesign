import type { Actions, GatsbyNode } from "gatsby";
import path from "path";

interface ICreatePages {
  actions: Actions;
}

export const createPages = ({ actions }: ICreatePages) => {
  actions.createPage({
    path: "/dsg",
    component: path.resolve("src/templates/dsg.tsx"),
    defer: true,
  });
};

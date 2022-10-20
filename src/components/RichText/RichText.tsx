import React, { ReactElement } from "react";
import { BLOCKS, INLINES, MARKS, Node } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Typography from "@mui/material/Typography";
import { IRichText } from "./types";
import { Link } from "gatsby-theme-material-ui";
import ButtonLink from "../ButtonLink";

const RichText = ({ raw, references }: IRichText): ReactElement => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <strong>{text}</strong>, // replaces <b>
      [MARKS.ITALIC]: (text: string) => <em>{text}</em>, //replaces <i>
      [MARKS.UNDERLINE]: (text: string) => (
        <Typography component="span">{text}</Typography>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Node, text: string) => {
        return (
          <Typography component="h1" variant="h1">
            {text}
          </Typography>
        );
      },
      [BLOCKS.HEADING_2]: (node: Node, text: string) => {
        return (
          <Typography component="h2" variant="h2">
            {text}
          </Typography>
        );
      },
      [BLOCKS.HEADING_3]: (node: Node, text: string) => {
        return (
          <Typography component="h3" variant="h3">
            {text}
          </Typography>
        );
      },
      [BLOCKS.HEADING_4]: (node: Node, text: string) => {
        return (
          <Typography component="h4" variant="h4">
            {text}
          </Typography>
        );
      },
      [BLOCKS.HEADING_5]: (node: Node, text: string) => {
        return (
          <Typography component="h5" variant="h5">
            {text}
          </Typography>
        );
      },
      [BLOCKS.HEADING_6]: (node: Node, text: string) => {
        return (
          <Typography component="h6" variant="h6">
            {text}
          </Typography>
        );
      },
      //   [BLOCKS.HR]: () => <Divider />,
      [BLOCKS.PARAGRAPH]: (node: Node, text: string) => {
        return (
          <Typography variant="body1" paragraph>
            {text}
          </Typography>
        );
      },
      [INLINES.HYPERLINK]: (node: Node, text: string) => {
        return (
          <Link href={node.data.uri} rel="noopener noreferrer" target="_blank">
            {text}
          </Link>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, text: string) => {
        return <Link to={node.data.target.slug}>{text}</Link>;
      },
      [INLINES.ASSET_HYPERLINK]: (node: Node, text: string) => {
        return (
          <Link
            href={node.data.target.file.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {text}
          </Link>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
        const target = node.data.target;
        if (!target) {
          console.warn(`target is null, check GRAPHQL fragment`);
          return null;
        }
        const {
          contentful_id: _id,
          sys: _sys,
          internal: _internal,
          ...props
        } = target;
        return <ButtonLink {...props} />;
      },
    },
    renderText: (text: string) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  //@ts-ignore
  return <div>{renderRichText({ raw, references }, options)}</div>;
};

export default RichText;

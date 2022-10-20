import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import RichText from "../RichText";
import Media from "../Media";
import { IBasicSection } from "./types";

const getGrid = (gridRules: string) => {
  const gridSizes = gridRules.split("/");

  const left = gridSizes[0];
  const right = gridSizes[1];

  return [
    {
      xs: 12,
      md: parseInt(left),
    },
    {
      xs: 12,
      md: parseInt(right),
    },
  ];
};

const BasicSection = ({
  content,
  media,
  gridRules,
  ...flexRules
}: IBasicSection) => {
  const [leftGrid, rightGrid] = getGrid(gridRules);

  return (
    <Box component="section" py={10} bgcolor="#000000" color="#FFFFFF">
      <Container>
        <Grid container spacing={4} {...flexRules}>
          <Grid {...leftGrid}>
            <RichText {...content} />
          </Grid>
          {media && (
            <Grid {...rightGrid}>
              <Media {...media} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default BasicSection;

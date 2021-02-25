import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import Squircle from "./Squircle";
import { useSquircle } from "../hooks";

const SquirclePreview = () => {
  const { size } = useSquircle();

  return (
    <Grid id="Squircle" placeContent="center">
      <Box width={size} height={size}>
        <Squircle />
      </Box>
    </Grid>
  );
};

export default SquirclePreview;

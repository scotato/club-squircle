import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import Squircle, { SquircleImage } from "./Squircle";
import { useSquircle, useImage } from "../hooks";

const SquirclePreview = () => {
  const { size } = useSquircle();
  const { src } = useImage();

  return (
    <Grid id="Squircle" placeContent="center">
      <Box p={2} width={size} height={size}>
        {src ? <SquircleImage /> : <Squircle />}
      </Box>
    </Grid>
  );
};

export default SquirclePreview;

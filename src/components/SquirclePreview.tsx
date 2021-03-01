import React from "react";
import { Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import Squircle, { SquircleImage } from "./Squircle";
import { useSquircle, useImage } from "../hooks";

const SquirclePreview = () => {
  const { size } = useSquircle();
  const { src } = useImage();
  const padding = useBreakpointValue({ md: 8, lg: 2 });

  return (
    <Grid id="Squircle" placeContent="center">
      <Box p={padding} width={size} height={size}>
        {src ? <SquircleImage /> : <Squircle />}
      </Box>
    </Grid>
  );
};

export default SquirclePreview;

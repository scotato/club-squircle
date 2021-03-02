import React from "react";
import { Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import Squircle, { SquircleImage } from "./Squircle";
import { useSquircle, useImage } from "../hooks";

const SquirclePreview = () => {
  const squircle = useSquircle();
  const { src } = useImage();
  const { size } = squircle;
  const padding = useBreakpointValue({ md: 8, lg: 2 });

  return (
    <Grid id="Squircle" placeContent="center">
      <Box p={padding} width={size} height={size}>
        {src ? <SquircleImage {...squircle} /> : <Squircle {...squircle} />}
      </Box>
    </Grid>
  );
};

export default SquirclePreview;

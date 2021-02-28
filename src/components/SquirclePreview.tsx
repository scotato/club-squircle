import React from "react";
import { Grid, Box } from "@chakra-ui/react";
// import Squircle from "./Squircle";
import Colors from "./Colors";
import { useSquircle } from "../hooks";

const SquirclePreview = () => {
  const { size } = useSquircle();

  return (
    <Grid id="Squircle" placeContent="center">
      <Box width={size} height={size}>
        {/* <Squircle /> */}
        <Colors />
      </Box>
    </Grid>
  );
};

export default SquirclePreview;

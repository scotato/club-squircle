import React from "react";
import { Box } from "@chakra-ui/react";
import Squircle from "./Squircle";

const SquirclePreview = () => {
  return (
    <Box display="grid" placeContent="center">
      <Squircle />
    </Box>
  );
};

export default SquirclePreview;

import React from "react";
import { Box } from "@chakra-ui/react";
import Squircle from "./Squircle";

const SquirclePreview = () => {
  return (
    <Box id="Squircle" display="grid" p={16}>
      <Squircle />
    </Box>
  );
};

export default SquirclePreview;

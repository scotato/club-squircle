import React from "react";
import CurvatureSlider from "./CurvatureSlider";
import DownloadSquircle from "./DownloadSquircle";
import SquirclePreview from "./SquirclePreview";
import Layout from "./Layout";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const bg = useColorModeValue("gray.100", "black");

  return (
    <Layout>
      <Box
        py={6}
        px={4}
        height="100%"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <Navigation />
        <Actions />
      </Box>
      <Box display="grid" placeContent="center" bg={bg}>
        <SquirclePreview />
      </Box>
      <Box
        p={6}
        height="100%"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <CurvatureSlider />
        <DownloadSquircle />
      </Box>
    </Layout>
  );
}

export default App;

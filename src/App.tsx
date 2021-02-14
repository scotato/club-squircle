import React from "react";
import CurvatureSlider from "./CurvatureSlider";
import DownloadSquircle from "./DownloadSquircle";
import SquirclePreview from "./SquirclePreview";
import Layout from "./Layout";
import Apps from "./Apps";
import { SquircleMask } from "@scotato/react-squircle";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <SquircleMask c={1}>
      <Layout>
        <Box
          p={6}
          // m={6}
          height="100%"
          bg="white"
          justifyContent="space-between"
          display="flex"
          flexDirection="column"
        >
          {/* <Apps /> */}
        </Box>
        <Box display="grid" placeContent="center">
          <SquirclePreview />
        </Box>
        <Box
          p={6}
          // m={6}
          height="100%"
          bg="white"
          justifyContent="space-between"
          display="flex"
          flexDirection="column"
        >
          <CurvatureSlider />
          <DownloadSquircle />
        </Box>
      </Layout>
    </SquircleMask>
  );
}

export default App;

import React from "react";
import CurvatureSlider from "./CurvatureSlider";
import DownloadSquircle from "./DownloadSquircle";
import SquirclePreview from "./SquirclePreview";
import Layout from "./Layout";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <Layout>
      <Box
        p={6}
        height="100%"
        bg={bg}
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Box>
      <Box display="grid" placeContent="center">
        <SquirclePreview />
      </Box>
      <Box
        p={6}
        height="100%"
        bg={bg}
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

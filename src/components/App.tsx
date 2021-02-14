import React from "react";
import DownloadSquircle from "./DownloadSquircle";
import SquirclePreview from "./SquirclePreview";
import SquircleConfig from "./SquircleConfig";
import Layout from "./Layout";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.800");

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
      <Box
        display="grid"
        placeContent="center"
        bg={bg}
        borderX="1px"
        borderColor={borderColor}
      >
        <SquirclePreview />
      </Box>
      <Box
        p={6}
        height="100%"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
      >
        <SquircleConfig />
        <DownloadSquircle />
      </Box>
    </Layout>
  );
}

export default App;

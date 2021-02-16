import React from "react";
import DownloadSquircle from "./DownloadSquircle";
import SquirclePreview from "./SquirclePreview";
import SquircleConfig from "./SquircleConfig";
import Layout from "./Layout";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as SquircleWordmark } from "../logos/squircle-wordmark.svg";
import { repository } from "../../package.json";

const SquircleUrl = "https://en.wikipedia.org/wiki/squircle";
const SuperellipseUrl = "https://en.wikipedia.org/wiki/superellipse";

interface ReferenceProps {
  to: string;
  text: string;
}

const Reference = ({ to, text }: ReferenceProps) => (
  <Link href={to} color="blue.500" target="_blank">
    {text}
  </Link>
);

function App() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.800");
  // TODO: dark mode word mark
  return (
    <Layout>
      <Box py={6} px={4} height="100%" display="flex" flexDirection="column">
        <Box
          as={SquircleWordmark}
          title="Squircle"
          m={2}
          mb={4}
          sx={{ path: { fill: "currentColor" } }}
        />

        <Text px={2} mb={4}>
          A squircle is an intermediate shape between a square and a circle.
          This <Reference to={repository} text="open source" /> tool allows you
          to create and edit <Reference to={SquircleUrl} text="squircles" /> and{" "}
          <Reference to={SuperellipseUrl} text="superellipses" />.
        </Text>

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

import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
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

const Introduction = () => (
  <Box p={2} py={4}>
    <Box
      as={SquircleWordmark}
      title="Squircle"
      sx={{ path: { fill: "currentColor" } }}
      mb={4}
    />

    <Text>
      A squircle is an intermediate shape between a square and a circle. This{" "}
      <Reference to={repository} text="open source" /> tool helps you to create{" "}
      <Reference to={SquircleUrl} text="squircles" /> and{" "}
      <Reference to={SuperellipseUrl} text="superellipses" />.
    </Text>
  </Box>
);

export default Introduction;

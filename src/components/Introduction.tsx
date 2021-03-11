import React from "react";
import { Box, Stack, Text, Link } from "@chakra-ui/react";
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
  <Stack mb={2} p={8} spacing={4}>
    <Box
      title="Squircle"
      as={SquircleWordmark}
      sx={{ path: { fill: "currentColor" } }}
    />

    <Text>
      A squircle is an intermediate shape between a square and a circle.
    </Text>
    <Text>
      This <Reference to={repository} text="open source" /> tool helps you
      create <Reference to={SquircleUrl} text="squircles" /> and{" "}
      <Reference to={SuperellipseUrl} text="superellipses" />.
    </Text>
  </Stack>
);

export default Introduction;

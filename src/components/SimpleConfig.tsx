import React from "react";
import { useSimple } from "../hooks";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Slider from "./Slider";

const SimpleConfig = () => {
  const { c, setSimple } = useSimple();

  return (
    <Stack spacing={3}>
      <Flex justifyContent="space-between" color="gray.500" userSelect="none">
        <Text fontSize={12} fontWeight="700">
          Curvature
        </Text>

        <Text fontSize={12} fontWeight="400">
          {c}
        </Text>
      </Flex>
      <Slider value={c} onChange={setSimple} min={1} max={10} step={1} />
    </Stack>
  );
};

export default SimpleConfig;

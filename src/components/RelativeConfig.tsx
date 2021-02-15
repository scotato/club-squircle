import React from "react";
import { useRelative } from "../hooks";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Slider from "./Slider";

const RelativeConfig = () => {
  const { r1, r2, setRelative } = useRelative();
  const setR1 = (r1: number) => setRelative({ r1, r2 });
  const setR2 = (r2: number) => setRelative({ r1, r2 });

  return (
    <Stack spacing={4}>
      <Stack spacing={3}>
        <Flex justifyContent="space-between" color="gray.500" userSelect="none">
          <Text fontSize={12} fontWeight="700">
            Radius One
          </Text>

          <Text fontSize={12} fontWeight="400">
            {r1.toFixed(3)}
          </Text>
        </Flex>
        <Slider value={r1} onChange={setR1} min={0} max={0.5} step={0.001} />
      </Stack>

      <Stack spacing={3}>
        <Flex justifyContent="space-between" color="gray.500" userSelect="none">
          <Text fontSize={12} fontWeight="700">
            Radius Two
          </Text>

          <Text fontSize={12} fontWeight="400">
            {r2.toFixed(3)}
          </Text>
        </Flex>
        <Slider value={r2} onChange={setR2} min={0} max={0.5} step={0.001} />
      </Stack>
    </Stack>
  );
};

export default RelativeConfig;

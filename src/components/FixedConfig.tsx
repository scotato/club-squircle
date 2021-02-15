import React from "react";
import { useFixed, useSquircle } from "../hooks";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Slider from "./Slider";

const FixedConfig = () => {
  const { p1, p2, setFixed } = useFixed();
  const { size } = useSquircle();
  const setP1 = (p1: number) => setFixed({ p1, p2 });
  const setP2 = (p2: number) => setFixed({ p1, p2 });

  return (
    <Stack spacing={4}>
      <Stack spacing={3}>
        <Flex justifyContent="space-between" color="gray.500" userSelect="none">
          <Text fontSize={12} fontWeight="700">
            p1
          </Text>

          <Text fontSize={12} fontWeight="400">
            {p1}
          </Text>
        </Flex>
        <Slider value={p1} onChange={setP1} min={1} max={size / 2} step={1} />
      </Stack>

      <Stack spacing={3}>
        <Flex justifyContent="space-between" color="gray.500" userSelect="none">
          <Text fontSize={12} fontWeight="700">
            p2
          </Text>

          <Text fontSize={12} fontWeight="400">
            {p2}
          </Text>
        </Flex>
        <Slider value={p2} onChange={setP2} min={1} max={size / 2} step={1} />
      </Stack>
    </Stack>
  );
};

export default FixedConfig;

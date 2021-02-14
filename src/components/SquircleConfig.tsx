import React from "react";
import { useCurvature } from "../hooks";
import { Text, Stack, NumberInput, NumberInputField } from "@chakra-ui/react";
import CurvatureSlider from "./CurvatureSlider";

const CurvatureInput = () => {
  const { curvature, setCurvature } = useCurvature();

  return (
    <NumberInput
      value={curvature}
      onChange={(_, value) => {
        if (curvature !== value) setCurvature(value);
      }}
      min={1}
      max={10}
      step={1}
    >
      <NumberInputField />
    </NumberInput>
  );
};

const SquircleConfig = () => {
  return (
    <Stack spacing={2}>
      <Text fontSize={12} fontWeight="700" color="gray.500">
        Curvature
      </Text>
      <CurvatureInput />
      <CurvatureSlider />
    </Stack>
  );
};

export default SquircleConfig;

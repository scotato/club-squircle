import React from "react";
import { useCurvature } from "../hooks";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const CurvatureSlider = () => {
  const { curvature, setCurvature } = useCurvature();

  return (
    <Slider
      value={curvature}
      onChange={setCurvature}
      min={1}
      max={10}
      px={2}
      mb={4}
      step={1}
      width={194}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} mx={2} />
    </Slider>
  );
};

export default CurvatureSlider;

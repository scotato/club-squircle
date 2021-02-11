import React from "react";
import { useCurvature } from "./hooks";
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
      step={1}
      width={412}
      m={8}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

export default CurvatureSlider;

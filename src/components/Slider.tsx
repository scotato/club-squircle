import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps,
} from "@chakra-ui/react";

const CurvatureSlider = (props: SliderProps) => {
  return (
    <Slider mb={4} width={194} {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} mx={2} />
    </Slider>
  );
};

export default CurvatureSlider;

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
    <Slider mb={4} alignSelf="center" width="calc(100% - 16px)" {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

export default CurvatureSlider;

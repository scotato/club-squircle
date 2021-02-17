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
    <Slider width="calc(100% - 16px)" alignSelf="center" {...props}>
      <SliderTrack height={2} borderRadius={4} bg="gray.200">
        <SliderFilledTrack bg="blue.500" />
      </SliderTrack>
      <SliderThumb boxSize={6} bg="gray.100" />
    </Slider>
  );
};

export default CurvatureSlider;

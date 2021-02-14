import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { Box } from "@chakra-ui/react";
import { useCurvature } from "../hooks";
import { useWindowSize } from "@react-hook/window-size";

const SquirclePreview = () => {
  const { curvature } = useCurvature();
  const [width, height] = useWindowSize();
  const smallestDimension = width > height ? height : width;
  const size = smallestDimension * 0.618;

  return (
    <SquircleMask c={curvature} className="squircle">
      <Box
        width={size}
        height={size}
        background={`linear-gradient(
          323deg,
          rgba(131, 58, 180, 1) 0%,
          rgba(253, 29, 29, 1) 50%,
          rgba(252, 176, 69, 1) 100%
        )`}
      />
    </SquircleMask>
  );
};

export default SquirclePreview;

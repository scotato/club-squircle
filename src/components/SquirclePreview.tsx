import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { Box } from "@chakra-ui/react";
import { useSquircle, SquircleProps } from "../hooks";
import { SquircleMode } from "../squircle";

const squircleByMode = (squircle: SquircleProps) => {
  const { mode, c, r1, r2, p1, p2 } = squircle;
  switch (mode) {
    case SquircleMode.Fixed:
      return { p1, p2 };
    case SquircleMode.Relative:
      return { r1, r2 };
    case SquircleMode.Simple:
    default:
      return { c };
  }
};

const SquirclePreview = () => {
  const squircle = useSquircle();
  const squircleMask = squircleByMode(squircle);

  return (
    <SquircleMask {...squircleMask} className="squircle">
      <Box
        width={squircle.size}
        height={squircle.size}
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

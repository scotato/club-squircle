import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { Box, Image } from "@chakra-ui/react";
import { useImage, useSquircle, SquircleProps } from "../hooks";
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

const FileImage = () => {
  const { size } = useSquircle();
  const { filename, src } = useImage();

  return <Image src={src} alt={filename} boxSize={size} objectFit="cover" />;
};

const Gradient = () => {
  const squircle = useSquircle();

  return (
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
  );
};

const SquirclePreview = () => {
  const { src } = useImage();
  const squircle = useSquircle();
  const squircleMask = squircleByMode(squircle);

  return (
    <Box display="grid" placeContent="center">
      <SquircleMask {...squircleMask} className="squircle">
        {src ? <FileImage /> : <Gradient />}
      </SquircleMask>
    </Box>
  );
};

export default SquirclePreview;

import React from "react";
import Squircle from "./Squircle";
import { Box } from "@chakra-ui/react";
import { useSquircle } from "../hooks";
// import { Box, Image } from "@chakra-ui/react";
// import { useImage, useSquircle, SquircleProps } from "../hooks";
// import { SquircleMode } from "../squircle";

const SquirclePreview = () => {
  const { size } = useSquircle();

  return (
    <Box display="grid" placeContent="center">
      <Squircle width={size} height={size} />
    </Box>
  );
};

export default SquirclePreview;

// const squircleByMode = (squircle: SquircleProps) => {
//   const { mode, c, r1, r2, p1, p2 } = squircle;
//   switch (mode) {
//     case SquircleMode.Fixed:
//       return { p1, p2 };
//     case SquircleMode.Relative:
//       return { r1, r2 };
//     case SquircleMode.Simple:
//     default:
//       return { c };
//   }
// };

// const FileImage = () => {
//   const { size } = useSquircle();
//   const { filename, src } = useImage();

//   return <Image src={src} alt={filename} boxSize={size} objectFit="cover" />;
// };

// const Gradient = () => {
//   const squircle = useSquircle();

//   return (
//     <Box
//       width={squircle.size}
//       height={squircle.size}
//       background={`linear-gradient(
//         323deg,
//         rgba(131, 58, 180, 1) 0%,
//         rgba(253, 29, 29, 1) 50%,
//         rgba(252, 176, 69, 1) 100%
//       )`}
//     />
//   );
// };

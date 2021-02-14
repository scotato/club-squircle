import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { useCurvature } from "../hooks";
import { Button } from "@chakra-ui/react";
import { createSquircleSVG, SquircleMode } from "../squircle";

function DownloadSquircle() {
  const { curvature } = useCurvature();
  const svg = createSquircleSVG({ c: curvature, mode: SquircleMode.simple });
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  return (
    <SquircleMask p1={4} p2={16}>
      <Button
        as="a"
        size="lg"
        borderRadius={0}
        href={svgUrl}
        colorScheme="blue"
        download="squircle.svg"
        width="100%"
        target="_blank"
      >
        Download SVG
      </Button>
    </SquircleMask>
  );
}

export default DownloadSquircle;

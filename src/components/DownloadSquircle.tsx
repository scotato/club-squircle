import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { useCurvature } from "../hooks";
import { createSquircleSVG, SquircleMode } from "../squircle";
import { LinkButton } from "./Button";

function DownloadSquircle() {
  const { curvature } = useCurvature();
  const svg = createSquircleSVG({ c: curvature, mode: SquircleMode.simple });
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  return (
    <SquircleMask p1={4} p2={16}>
      <LinkButton
        to={svgUrl}
        download="squircle.svg"
        colorScheme="blue"
        size="lg"
      >
        Download SVG
      </LinkButton>
    </SquircleMask>
  );
}

export default DownloadSquircle;

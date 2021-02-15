import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { useMode, useSimple, useRelative, useFixed } from "../hooks";
import { createSquircleSVG } from "../squircle";
import { LinkButton } from "./Button";

function DownloadSquircle() {
  const { mode } = useMode();
  const { c } = useSimple();
  const { r1, r2 } = useRelative();
  const { p1, p2 } = useFixed();
  const svg = createSquircleSVG({ c, mode, r1, r2, p1, p2 });
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

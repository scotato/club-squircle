import React from "react";
import { Stack, useClipboard, useToast } from "@chakra-ui/react";
import { useMode, useSimple, useRelative, useFixed } from "../hooks";
import { createSquircleSVG } from "../squircle";
import SquircleButton, { LinkButton } from "./Button";

function DownloadSquircle() {
  const { mode } = useMode();
  const { c } = useSimple();
  const { r1, r2 } = useRelative();
  const { p1, p2 } = useFixed();
  const svg = createSquircleSVG({ c, mode, r1, r2, p1, p2 });
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const { onCopy } = useClipboard(svg);
  const toast = useToast();

  const onCopyClick = () => {
    onCopy();
    toast({
      description: "Paste me in your favorite design tool or HTML",
      position: "top",
      duration: 4000,
    });
  };

  return (
    <Stack spacing={4} direction="column">
      <LinkButton to={svgUrl} download="squircle.svg" size="lg">
        Save
      </LinkButton>

      <SquircleButton onClick={onCopyClick} size="lg" colorScheme="blue">
        Copy
      </SquircleButton>
    </Stack>
  );
}

export default DownloadSquircle;

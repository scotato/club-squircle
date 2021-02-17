import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Stack, useClipboard, useToast } from "@chakra-ui/react";
import SquircleButton, { LinkButton } from "./Button";
import { useSquircle } from "../hooks";
import Squircle from "./Squircle";

function DownloadSquircle() {
  useSquircle(); // ensure re-render on props change
  const svg = renderToStaticMarkup(<Squircle />);
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
      <LinkButton
        to={svgUrl}
        download="squircle.svg"
        size="lg"
        userSelect="none"
      >
        Save
      </LinkButton>

      <SquircleButton
        onClick={onCopyClick}
        size="lg"
        colorScheme="blue"
        userSelect="none"
      >
        Copy
      </SquircleButton>
    </Stack>
  );
}

export default DownloadSquircle;

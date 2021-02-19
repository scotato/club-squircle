import React from "react";
import { Stack, useClipboard, useToast } from "@chakra-ui/react";
import SquircleButton, { LinkButton } from "./Button";
import { squircleString } from "./Squircle";
import { useSquircle } from "../hooks";

function DownloadSquircle() {
  const squircle = useSquircle();
  const svg = squircleString(squircle);
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
    <Stack spacing={4} direction="column" mt="auto">
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
        color="white"
        bg="blue.500"
        userSelect="none"
      >
        Copy
      </SquircleButton>
    </Stack>
  );
}

export default DownloadSquircle;

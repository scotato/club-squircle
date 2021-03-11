import React from "react";
import { Stack, useToast } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import SquircleButton, { LinkButton } from "./Button";
import { squircleString } from "./Squircle";
import { useSquircle } from "../hooks";

function DownloadSquircle() {
  const toast = useToast();
  const squircle = useSquircle();
  const svg = squircleString(squircle);
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const hasImage = !!squircle.image.src;
  const download = hasImage ? "squircle.png" : "squircle.svg";

  const onCopyClick = () => {
    copy(svg);
    toast({
      description: "Paste me in your favorite design tool or HTML",
      position: "top",
      duration: 4000,
    });
  };

  const svgToPng = (cb: (url: string) => void) => {
    const img = document.createElement("img");
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svg));
    img.onload = function () {
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      ctx.drawImage(img, 0, 0);
      cb(canvas.toDataURL("image/png"));
    };
  };

  return (
    <Stack mt="auto" p={6} spacing={4} direction="column">
      <LinkButton
        to={svgUrl}
        download={download}
        size="lg"
        userSelect="none"
        onClick={(e) => {
          if (hasImage) {
            e.preventDefault();
            svgToPng((url) => {
              const link = document.createElement("a");
              link.download = download;
              link.href = url;
              link.click();
            });
          }
        }}
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
        disabled={hasImage}
      >
        Copy
      </SquircleButton>
    </Stack>
  );
}

export default DownloadSquircle;

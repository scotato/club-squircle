import React from "react";
import { Stack } from "@chakra-ui/react";
import ModeConfig from "./ModeConfig";
import SimpleConfig from "./SimpleConfig";
import RelativeConfig from "./RelativeConfig";
import ImageConfig from "./ImageConfig";
import { useSquircle } from "../hooks";
import { SquircleMode } from "../squircle";

const ModeSwitch = () => {
  const { mode } = useSquircle();
  switch (mode) {
    case SquircleMode.Relative:
      return <RelativeConfig />;
    case SquircleMode.Simple:
    default:
      return <SimpleConfig />;
  }
};

const SquircleConfig = () => {
  return (
    <Stack spacing={6}>
      <ModeConfig />
      <ModeSwitch />
      <ImageConfig />
    </Stack>
  );
};

export default SquircleConfig;

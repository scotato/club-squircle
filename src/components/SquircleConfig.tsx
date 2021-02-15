import React from "react";
import { Stack } from "@chakra-ui/react";
import ModeConfig from "./ModeConfig";
import SimpleConfig from "./SimpleConfig";
import RelativeConfig from "./RelativeConfig";
import { useMode } from "../hooks";
import { SquircleMode } from "../squircle";

const ModeSwitch = () => {
  const { mode } = useMode();
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
    <Stack spacing={8}>
      <ModeConfig />
      <ModeSwitch />
    </Stack>
  );
};

export default SquircleConfig;

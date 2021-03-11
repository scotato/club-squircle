import React from "react";
import { VStack } from "@chakra-ui/react";
import { useSquircle } from "../hooks";
import { SquircleMode } from "../squircle";
import SegmentedControl from "./SegmentedControl";
import SimpleConfig from "./SimpleConfig";
import RelativeConfig from "./RelativeConfig";

const ModeSwitch = () => {
  const { shape } = useSquircle();
  switch (shape.mode) {
    case SquircleMode.Relative:
      return <RelativeConfig />;
    case SquircleMode.Simple:
    default:
      return <SimpleConfig />;
  }
};

const ModeConfig = () => {
  const { shape, setMode } = useSquircle();

  const activeSegment = (mode: SquircleMode) => {
    switch (mode) {
      case SquircleMode.Simple:
        return "Simple";
      case SquircleMode.Relative:
        return "Advanced";
      default:
        return "";
    }
  };

  const onSegmentClick = (segment: string) => {
    switch (segment) {
      case "Simple":
        return setMode(SquircleMode.Simple);
      case "Advanced":
        return setMode(SquircleMode.Relative);
    }
  };

  return (
    <VStack p={6} spacing={6} alignItems="stretch">
      <SegmentedControl
        segments={["Simple", "Advanced"]}
        activeSegment={activeSegment(shape.mode)}
        onSegmentClick={onSegmentClick}
      />
      <ModeSwitch />
    </VStack>
  );
};

export default ModeConfig;

import React from "react";
import { useSquircle } from "../hooks";
import { SquircleMode } from "../squircle";
import SegmentedControl from "./SegmentedControl";

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
    <SegmentedControl
      segments={["Simple", "Advanced"]}
      activeSegment={activeSegment(shape.mode)}
      onSegmentClick={onSegmentClick}
    />
  );
};

export default ModeConfig;

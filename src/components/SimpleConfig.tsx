import React from "react";
import { useSimple } from "../hooks";
import Slider from "./Slider";
import Configuration from "./Configuration";

const SimpleConfig = () => {
  const { c, setSimple } = useSimple();

  return (
    <Configuration label="Curvature" value={c}>
      <Slider value={c} onChange={setSimple} min={1} max={10} step={1} />
    </Configuration>
  );
};

export default SimpleConfig;

import React from "react";
import { useSquircle } from "../hooks";
import Slider from "./Slider";
import Configuration from "./Configuration";

const SimpleConfig = () => {
  const { shape, setC } = useSquircle();
  const { c } = shape;

  return (
    <Configuration label="Curvature" value={c}>
      <Slider value={c} onChange={setC} min={1} max={10} step={1} />
    </Configuration>
  );
};

export default SimpleConfig;

import React from "react";
import { useSquircle } from "../hooks";
import Slider from "./Slider";
import Configuration from "./Configuration";

const RelativeConfig = () => {
  const { shape, setR1, setR2 } = useSquircle();
  const { r1, r2 } = shape;

  return (
    <>
      <Configuration label="Radius One" value={r1.toFixed(3)}>
        <Slider value={r1} onChange={setR1} min={0} max={0.5} step={0.001} />
      </Configuration>

      <Configuration label="Radius Two" value={r2.toFixed(3)}>
        <Slider value={r2} onChange={setR2} min={0} max={0.5} step={0.001} />
      </Configuration>
    </>
  );
};

export default RelativeConfig;

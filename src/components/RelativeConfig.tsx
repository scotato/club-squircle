import React from "react";
import { useRelative } from "../hooks";
import Slider from "./Slider";
import Configuration from "./Configuration";

const RelativeConfig = () => {
  const { r1, r2, setRelative } = useRelative();
  const setR1 = (r1: number) => setRelative({ r1, r2 });
  const setR2 = (r2: number) => setRelative({ r1, r2 });

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

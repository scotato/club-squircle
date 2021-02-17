import React from "react";
import { useFixed, useSquircle } from "../hooks";
import Slider from "./Slider";
import Configuration from "./Configuration";

const FixedConfig = () => {
  const { p1, p2, setFixed } = useFixed();
  const { size } = useSquircle();
  const setP1 = (p1: number) => setFixed({ p1, p2 });
  const setP2 = (p2: number) => setFixed({ p1, p2 });

  return (
    <>
      <Configuration label="p1" value={p1}>
        <Slider value={p1} onChange={setP1} min={1} max={size / 2} step={1} />
      </Configuration>

      <Configuration label="p2" value={p2}>
        <Slider value={p2} onChange={setP2} min={1} max={size / 2} step={1} />
      </Configuration>
    </>
  );
};

export default FixedConfig;

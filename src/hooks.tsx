import createPersistedState from "use-persisted-state";
import { useWindowSize } from "@react-hook/window-size";
import { SquircleMode } from "./squircle";

const useModeState = createPersistedState("mode");
const useSimpleState = createPersistedState("simple");
const useRelativeState = createPersistedState("relative");
const useFixedState = createPersistedState("fixed");
const useImageState = createPersistedState("image");

export const useMode = () => {
  const [mode, setMode] = useModeState(SquircleMode.Simple);
  return { mode, setMode };
};

export const useSimple = () => {
  const [c, setSimple] = useSimpleState(10);
  return { c, setSimple };
};

export const useRelative = () => {
  const [{ r1, r2 }, setRelative] = useRelativeState({ r1: 0.059, r2: 0.332 });
  return { r1, r2, setRelative };
};

export const useFixed = () => {
  const [{ p1, p2 }, setFixed] = useFixedState({ p1: 8, p2: 32 });
  return { p1, p2, setFixed };
};

export const useImage = () => {
  const [image, setImage] = useImageState({ filename: "", src: "" });
  return { ...image, setImage };
};

export type SquircleProps = {
  size: number;
  mode: SquircleMode;
  c: number;
  r1: number;
  r2: number;
  p1: number;
  p2: number;
};

export const useSquircle = () => {
  const { mode } = useMode();
  const { c } = useSimple();
  const { r1, r2 } = useRelative();
  const { p1, p2 } = useFixed();
  const [width, height] = useWindowSize();
  const smallestDimension = width > height ? height : width;
  const size = smallestDimension * 0.618;

  return { size, mode, c, r1, r2, p1, p2 };
};

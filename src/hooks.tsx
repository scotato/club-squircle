import createPersistedState from "use-persisted-state";
import { useWindowSize } from "@react-hook/window-size";
import { SquircleDefaultProps, SquircleMode, SquircleImage } from "./squircle";

const useSquircleState = createPersistedState("squircle");

export const useSquircle = () => {
  const [squircle, setSquircle] = useSquircleState(SquircleDefaultProps);
  const [width, height] = useWindowSize();
  const smallestDimension = width > height ? height : width;
  const size = smallestDimension * 0.618;

  return {
    ...squircle,
    size,
    setMode: (mode: SquircleMode) => setSquircle({ ...squircle, mode }),
    setC: (c: number) => setSquircle({ ...squircle, c }),
    setR1: (r1: number) => setSquircle({ ...squircle, r1 }),
    setR2: (r2: number) => setSquircle({ ...squircle, r2 }),
    setP1: (p1: number) => setSquircle({ ...squircle, p1 }),
    setP2: (p2: number) => setSquircle({ ...squircle, p2 }),
    setImage: (image: SquircleImage) => setSquircle({ ...squircle, image }),
  };
};

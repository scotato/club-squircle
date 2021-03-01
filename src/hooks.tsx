import { useEffect, useContext } from "react";
import createPersistedState from "use-persisted-state";
import { useWindowSize } from "@react-hook/window-size";
import { useTheme } from "@chakra-ui/react";
import { SquircleDefaultProps, SquircleMode } from "./squircle";
import { AppContext } from "./components/Context";
import { Types } from "./reducers";

const useSquircleState = createPersistedState("squircle");

export const useSquircle = () => {
  const [squircle, setSquircle] = useSquircleState(SquircleDefaultProps);
  const [width, height] = useWindowSize();
  const smallestDimension = width > height ? height : width;
  const size = smallestDimension * 0.6;

  return {
    ...squircle,
    size,
    setMode: (mode: SquircleMode) => setSquircle({ ...squircle, mode }),
    setC: (c: number) => setSquircle({ ...squircle, c }),
    setR1: (r1: number) => setSquircle({ ...squircle, r1 }),
    setR2: (r2: number) => setSquircle({ ...squircle, r2 }),
    setP1: (p1: number) => setSquircle({ ...squircle, p1 }),
    setP2: (p2: number) => setSquircle({ ...squircle, p2 }),
    setFill: (fill: string) => setSquircle({ ...squircle, fill }),
  };
};

export const useColors = () => {
  const { colors } = useTheme();

  return {
    gray: colors.gray,
    red: colors.red,
    orange: colors.orange,
    yellow: colors.yellow,
    green: colors.green,
    teal: colors.teal,
    blue: colors.blue,
    cyan: colors.cyan,
    purple: colors.purple,
    pink: colors.pink,
  } as Record<string, any>;
};

export const useImage = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const upload = document.getElementById("ImageInput") as HTMLInputElement;
    if (upload) {
      upload.onchange = () => {
        const file = upload?.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            dispatch({
              type: Types.Set,
              payload: {
                src: e.target?.result as string,
                filename: file.name,
              },
            });
          };
          reader.readAsDataURL(file); // convert to base64 string
        }
      };
    }
  }, [dispatch]);

  return {
    src: state.image.src,
    filename: state.image.filename,
    removeImage: () => dispatch({ type: Types.Remove }),
  };
};

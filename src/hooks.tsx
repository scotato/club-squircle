import { useEffect, useContext } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { useTheme } from "@chakra-ui/react";
import { SquircleMode } from "./squircle";
import { AppContext } from "./components/Context";
import { Types } from "./reducers";

export const useSquircle = () => {
  const { state, dispatch } = useContext(AppContext);
  const [width, height] = useWindowSize();
  const colors = useColors();
  const smallestDimension = width > height ? height : width;
  const size = smallestDimension * 0.618;

  return {
    ...state,
    size,
    setMode: (mode: SquircleMode) =>
      dispatch({ type: Types.ShapeMode, payload: mode }),
    setC: (c: number) => dispatch({ type: Types.ShapeC, payload: c }),
    setR1: (r1: number) => dispatch({ type: Types.ShapeR1, payload: r1 }),
    setR2: (r2: number) => dispatch({ type: Types.ShapeR2, payload: r2 }),
    setP1: (p1: number) => dispatch({ type: Types.ShapeP1, payload: p1 }),
    setP2: (p2: number) => dispatch({ type: Types.ShapeP2, payload: p2 }),
    setFillColor: (fillColor: string) =>
      dispatch({ type: Types.StyleFillColor, payload: fillColor }),
    fillName: getFillName(state.style.fillColor, colors),
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
              type: Types.ImageSet,
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
    removeImage: () => dispatch({ type: Types.ImageRemove }),
  };
};

function getFillName(fill: string, colors: Record<string, any>) {
  for (const fillKey of Object.keys(colors)) {
    for (const scaleKey of Object.keys(colors[fillKey])) {
      if (fill === colors[fillKey][scaleKey]) return `${fillKey} ${scaleKey}`;
    }
  }

  return "Color";
}

import { useSquircle } from "../hooks";
import { createSquirclePath } from "../squircle";
import { useTheme } from "@chakra-ui/react";
import { SquircleProps } from "../squircle";

const SquircleImage = (props: SquircleProps) => {
  const { width = 512, height = 512 } = props;
  const squircle = useSquircle();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="SquircleMask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path d={d} fill="#C4C4C4" />
      </mask>
      <rect
        mask="url(#SquircleMask)"
        width={width}
        height={height}
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0"
          width={width}
          height={height}
          xlinkHref={squircle.image.src}
        />
      </defs>
    </svg>
  );
};

const Squircle = (props: SquircleProps) => {
  const { width = 512, height = 512 } = props;
  const theme = useTheme();
  const squircle = useSquircle();
  const squirclePath = createSquirclePath({ ...squircle, width, height });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation
  const fill = theme.colors?.gray?.["500"] ?? "#C4C4C4";

  if (squircle.image.src) return <SquircleImage />;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path id="Squircle" fill={fill} d={d} />
    </svg>
  );
};

export const squircleString = (squircle: SquircleProps) => {
  const { width = 512, height = 512 } = squircle;
  const squirclePath = createSquirclePath({ ...squircle, width, height });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  // if (image.src) return <SquircleImage />;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <path id="Squircle" fill="#C4C4C4" d="${d}" />
    </svg>
  `;
};

export default Squircle;

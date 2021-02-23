import { useSquircle } from "../hooks";
import { createSquirclePath } from "../squircle";
import { useTheme } from "@chakra-ui/react";
import { SquircleProps } from "../squircle";

const SquircleImage = (props: SquircleProps) => {
  const { width = 1024, height = 1024 } = props;
  const squircle = useSquircle();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return (
    <svg
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
        width="100%"
        height="100%"
      >
        <path d={d} fill="#C4C4C4" />
      </mask>
      <image
        id="image0"
        width="100%"
        height="100%"
        mask="url(#SquircleMask)"
        xlinkHref={squircle.image.src}
        preserveAspectRatio="xMinYMin slice"
      />
    </svg>
  );
};

const Squircle = (props: SquircleProps) => {
  const { width = 1024, height = 1024 } = props;
  const theme = useTheme();
  const squircle = useSquircle();
  const squirclePath = createSquirclePath({ ...squircle, width, height });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation
  const fill = theme.colors?.gray?.["500"] ?? "#C4C4C4";

  if (squircle.image.src) return <SquircleImage />;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
      <path id="Squircle" fill={fill} d={d} />
    </svg>
  );
};

export const squircleString = (squircle: SquircleProps) => {
  const { width = 1024, height = 1024 } = squircle;
  if (squircle.image?.src) return squircleImageString(squircle);
  const squirclePath = createSquirclePath({ ...squircle, width, height });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <path id="Squircle" fill="#C4C4C4" d="${d}" />
    </svg>
  `;
};

export const squircleImageString = (squircle: SquircleProps) => {
  const { width = 1024, height = 1024 } = squircle;
  const squirclePath = createSquirclePath({ ...squircle, width, height });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return `
    <svg
      viewBox="0 0 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="SquircleMask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <path d="${d}" fill="#C4C4C4"></path>
      </mask>
      <image
        id="image0"
        width="100%"
        height="100%"
        mask="url(#SquircleMask)"
        xlink:href="${squircle.image?.src}"
        preserveAspectRatio="xMinYMin slice"
      />
    </svg>
  `;
};

export default Squircle;

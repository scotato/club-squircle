import { useSquircle, useImage } from "../hooks";
import { createSquirclePath } from "../squircle";
import { SquircleProps } from "../squircle";

export const SquircleImage = (props: SquircleProps) => {
  const { width = 1024, height = 1024 } = props;
  const squircle = useSquircle();
  const { src, filename } = useImage();
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
        <path d={d} />
      </mask>
      <path d={d} fill={squircle.fill} />
      <image
        id={filename}
        width="100%"
        height="100%"
        mask="url(#SquircleMask)"
        xlinkHref={src}
        preserveAspectRatio="xMinYMin slice"
        fill="red"
      />
    </svg>
  );
};

const Squircle = (props: SquircleProps) => {
  const { width = 1024, height = 1024 } = props;
  const squircle = useSquircle();
  const fill = props.fill ?? squircle.fill ?? "#C4C4C4";
  const squirclePath = createSquirclePath({
    ...squircle,
    ...props,
    width,
    height,
  });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

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
      <path id="Squircle" fill="${squircle.fill}" d="${d}" />
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
        <path d="${d}"></path>
      </mask>
      <path d="${d}" fill="${squircle.fill}" />
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

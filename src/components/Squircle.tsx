import { useSquircle, useImage } from "../hooks";
import { createSquirclePath } from "../squircle";
import { SquircleProps } from "../squircle";
import { rgbFromHsl } from "../colors";

export const SquircleImage = (props: SquircleProps) => {
  const { width = 1024, height = 1024 } = props.shape;
  const squircle = useSquircle();
  const { src, filename, scale, clip } = useImage();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation
  const mask = "url(#SquircleMask)";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      overflow="visible"
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
        <path d={d} />
      </mask>
      <path d={d} fill={squircle.style.fillColor} />
      <g mask={mask}>
        <image
          id={filename}
          width={width}
          height={height}
          mask={clip ? mask : ""}
          xlinkHref={src}
          preserveAspectRatio="xMinYMin slice"
          style={{
            transform: `scale(${scale / 100})`,
            transformOrigin: `50%`,
          }}
        />
      </g>
    </svg>
  );
};

const Squircle = (props: SquircleProps) => {
  const squircle = useSquircle();
  const { width, height } = squircle.shape;
  const squirclePath = createSquirclePath({ ...squircle, ...props });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      overflow="visible"
    >
      <path id="Squircle" fill={squircle.style.fillColor} d={d} />
    </svg>
  );
};

export const squircleString = (squircle: SquircleProps) => {
  if (squircle.image?.src) return squircleImageString(squircle);
  const { width, height } = squircle.shape;
  const squirclePath = createSquirclePath({ ...squircle });
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation
  const fill = rgbFromHsl(squircle.style.fillColor);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <path id="Squircle" fill="${fill}" d="${d}" />
    </svg>
  `;
};

export const squircleImageString = (squircle: SquircleProps) => {
  const squirclePath = createSquirclePath(squircle);
  const { width, height } = squircle.shape;
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
      <path d="${d}" fill="${squircle.style.fillColor}" />
      <g mask="url(#SquircleMask)">
        <image
          id="image0"
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="${squircle.image.clip ? "url(#SquircleMask)" : ""}"
          xlink:href="${squircle.image?.src}"
          preserveAspectRatio="xMinYMin slice"
          style="transform: scale(${
            squircle.image.scale / 100
          }); transform-origin: 50%;"
        />
      </g>
    </svg>
  `;
};

export default Squircle;

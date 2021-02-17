import { useSquircle, useImage } from "../hooks";
import { createSquirclePath } from "../squircle";

const SquircleImage = () => {
  const image = useImage();
  const squircle = useSquircle();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="SquircleMask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="512"
        height="512"
      >
        <path d={d} fill="#C4C4C4" />
      </mask>
      <rect
        mask="url(#SquircleMask)"
        width="512"
        height="512"
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
        <image id="image0" width="512" height="512" xlinkHref={image.src} />
      </defs>
    </svg>
  );
};

const Squircle = () => {
  const image = useImage();
  const squircle = useSquircle();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  if (image.src) return <SquircleImage />;

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path id="Squircle" fill="#C4C4C4" d={d} />
    </svg>
  );
};

export default Squircle;

import { useSquircle } from "../hooks";
import { createSquirclePath } from "../squircle";

const Squircle = () => {
  const squircle = useSquircle();
  const squirclePath = createSquirclePath(squircle);
  const d = squirclePath.replace(/\r?\n|\r| {4}/g, ""); // remove newlines and indentation

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path id="Squircle" fill="#C4C4C4" d={d} />
    </svg>
  );
};

export default Squircle;

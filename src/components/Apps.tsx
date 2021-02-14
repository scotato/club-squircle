import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { ReactComponent as FigmaLogo } from "../logos/figma-logo.svg";
import { ReactComponent as ReactLogo } from "../logos/react-logo.svg";
import { ReactComponent as TwitterLogo } from "../logos/twitter-logo.svg";
import { ReactComponent as GithubLogo } from "../logos/github-logo.svg";
import { useCurvature } from "../hooks";

const Apps = () => {
  const { curvature } = useCurvature();

  return (
    <SquircleMask c={curvature} className="apps">
      <a href="https://www.figma.com/community/plugin/930173909910797614/Squircle">
        <SquircleMask c={curvature} className="app-icon">
          <FigmaLogo width={48} height={48} />
        </SquircleMask>
      </a>
      <a href="http://npmjs.com/package/@scotato/react-squircle">
        <SquircleMask c={curvature} className="app-icon">
          <ReactLogo width={48} height={48} />
        </SquircleMask>
      </a>
      <a href="http://twitter.com/scotato">
        <SquircleMask c={curvature} className="app-icon">
          <TwitterLogo width={48} height={48} />
        </SquircleMask>
      </a>
      <a href="http://github.com/scotato/club-squircle">
        <SquircleMask c={curvature} className="app-icon">
          <GithubLogo width={48} height={48} />
        </SquircleMask>
      </a>
    </SquircleMask>
  );
};

export default Apps;

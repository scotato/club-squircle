import React from "react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Actions from "./Actions";
import SquirclePreview from "./SquirclePreview";
import ModeConfig from "./ModeConfig";
import ImageConfig from "./ImageConfig";
import FillConfig from "./FillConfig";
import DownloadSquircle from "./DownloadSquircle";

function App() {
  return (
    <Layout>
      <Sidebar>
        <Introduction />
        <Navigation />
        <Actions />
      </Sidebar>

      <SquirclePreview />

      <Sidebar>
        <ModeConfig />
        <FillConfig />
        <ImageConfig />
        <DownloadSquircle />
      </Sidebar>
    </Layout>
  );
}

export default App;

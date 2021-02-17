import React from "react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Actions from "./Actions";
import SquirclePreview from "./SquirclePreview";
import SquircleConfig from "./SquircleConfig";
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
        <SquircleConfig />
        <DownloadSquircle />
      </Sidebar>
    </Layout>
  );
}

export default App;

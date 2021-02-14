import React from "react";
import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Grid
      minH="100vh"
      minW="100vw"
      gridTemplateColumns="256px 1fr 256px"
      children={children}
    />
  );
}

export default Layout;

import React from "react";
import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Grid
      p={6}
      minH="100vh"
      minW="100vw"
      gridTemplateColumns="280px 1fr 280px"
      children={children}
    />
  );
}

export default Layout;

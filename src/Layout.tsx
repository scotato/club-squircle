import React from "react";
import { Grid } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Grid
      minH="calc(100vh - 64px)"
      gridTemplateColumns="300px 1fr 300px"
      bg="gray.100"
      children={children}
    />
  );
}

export default Layout;

import React from "react";
import { Grid, useBreakpointValue } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const gridTemplateColumns = useBreakpointValue({
    md: "100vw",
    lg: "280px 1fr 280px",
  });
  const gridTemplateRows = useBreakpointValue({
    md: "auto auto auto",
    lg: "100vh",
  });

  return (
    <Grid
      minH="100vh"
      minW="100vw"
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
      children={children}
    />
  );
}

export default Layout;

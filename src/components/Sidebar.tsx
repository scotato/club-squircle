import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

const Sidebar = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <SquircleMask p1={8} p2={32}>
      <Box
        p={6}
        height="100%"
        display="flex"
        flexDirection="column"
        bg={bg}
        {...props}
      />
    </SquircleMask>
  );
};

export default Sidebar;

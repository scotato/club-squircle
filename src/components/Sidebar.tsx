import React from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

const Sidebar = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box
      p={6}
      display="flex"
      flexDirection="column"
      overflowY="auto"
      bg={bg}
      {...props}
    />
  );
};

export default Sidebar;

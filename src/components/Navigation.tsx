import React from "react";
import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as FigmaLogo } from "../logos/figma-logo.svg";
import { ReactComponent as ReactLogo } from "../logos/react-logo.svg";
import { LinkButton } from "./Button";

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "black");

  return (
    <Stack spacing={2} direction="column">
      <Text fontSize={24} fontWeight={700} mb={2} px={4}>
        Squircle
      </Text>
      <LinkButton
        leftIcon={<FigmaLogo width={24} height={24} />}
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        height={10}
        bg={bg}
        _hover={{ bg: bgHover }}
        to="https://www.figma.com/community/plugin/930173909910797614/Squircle"
      >
        Figma Plugin
      </LinkButton>
      <LinkButton
        leftIcon={<ReactLogo width={24} height={24} />}
        to="http://npmjs.com/package/@scotato/react-squircle"
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        bg={bg}
        _hover={{ bg: bgHover }}
        height={10}
      >
        React Component
      </LinkButton>
    </Stack>
  );
};

export default Navigation;

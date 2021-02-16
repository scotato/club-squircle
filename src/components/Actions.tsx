import React from "react";
import {
  Stack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactComponent as TwitterLogo } from "../logos/twitter-logo.svg";
import { ReactComponent as GithubLogo } from "../logos/github-logo.svg";

export const Actions = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const colorModeLabel = useColorModeValue("Dark Mode", "Light Mode");
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "black");
  const color = useColorModeValue("gray.300", "gray.600");

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      color={color}
      sx={{ path: { fill: "currentColor" } }}
      mt="auto"
    >
      <IconButton
        fontSize="20px"
        aria-label={colorModeLabel}
        icon={colorModeIcon}
        onClick={toggleColorMode}
        bg={bg}
        _hover={{ bg: bgHover }}
      />
      <IconButton
        as="a"
        href="https://github.com/scotato/club-squircle"
        target="_blank"
        aria-label="Source on GitHub"
        icon={<GithubLogo width={24} height={24} />}
        bg={bg}
        _hover={{ bg: bgHover }}
      />
      <IconButton
        as="a"
        href="https://twitter.com/scotato"
        target="_blank"
        aria-label="Follow @scotato"
        icon={<TwitterLogo width={24} height={24} />}
        bg={bg}
        _hover={{ bg: bgHover }}
      />
    </Stack>
  );
};

export default Actions;

import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

interface ConfigurationProps {
  label: string;
  value?: string | number;
  children: JSX.Element;
}

const Configuration = (props: ConfigurationProps) => {
  return (
    <Stack spacing={3}>
      <Flex justifyContent="space-between" color="gray.500" userSelect="none">
        <Text fontSize={12} fontWeight="700">
          {props.label}
        </Text>

        <Text fontSize={12} fontWeight="400">
          {props.value}
        </Text>
      </Flex>
      {props.children}
    </Stack>
  );
};

export default Configuration;

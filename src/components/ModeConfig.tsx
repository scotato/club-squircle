import React from "react";
import { useMode } from "../hooks";
import { SquircleMode } from "../squircle";
import { Stack, Select, Text } from "@chakra-ui/react";

const ModeConfig = () => {
  const { mode, setMode } = useMode();

  return (
    <Stack spacing={3}>
      <Text fontSize={12} fontWeight="700" color="gray.500" userSelect="none">
        Mode
      </Text>
      <Select
        value={mode}
        onChange={(e) => setMode(e.target.value as SquircleMode)}
        userSelect="none"
      >
        <option value="simple">Simple</option>
        <option value="relative">Advanced</option>
      </Select>
    </Stack>
  );
};

export default ModeConfig;

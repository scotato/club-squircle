import React from "react";
import { useSquircle } from "../hooks";
import { SquircleMode } from "../squircle";
import { Grid, Button, useColorModeValue } from "@chakra-ui/react";

const ModeConfig = () => {
  const { shape, setMode } = useSquircle();
  const bgGrid = useColorModeValue("gray.100", "gray.800");
  const bgActive = useColorModeValue("gray.300", "gray.700");
  const bgInactive = useColorModeValue("gray.100", "gray.800");
  const bgButton = (m: SquircleMode) =>
    m === shape.mode ? bgActive : bgInactive;
  const onClick = (m: SquircleMode) => () => setMode(m);

  return (
    <Grid
      p={2}
      bg={bgGrid}
      gridColumnGap={2}
      borderRadius={12}
      userSelect="none"
      direction="row"
      gridTemplateColumns="1fr 1fr"
    >
      <Button
        size="xs"
        children="Simple"
        bg={bgButton(SquircleMode.Simple)}
        onClick={onClick(SquircleMode.Simple)}
      />
      <Button
        size="xs"
        children="Advanced"
        bg={bgButton(SquircleMode.Relative)}
        onClick={onClick(SquircleMode.Relative)}
      />
    </Grid>
  );
};

export default ModeConfig;

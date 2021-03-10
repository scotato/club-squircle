import React from "react";
import { Grid, Button, useColorModeValue } from "@chakra-ui/react";

interface SegmentedControlProps {
  segments: string[];
  activeSegment: string;
  onSegmentClick: (segment: string) => void;
}

const SegmentedControl = (props: SegmentedControlProps) => {
  const { segments, activeSegment, onSegmentClick } = props;
  const bgGrid = useColorModeValue("gray.100", "gray.800");
  const bgActive = useColorModeValue("gray.300", "gray.700");
  const bgInactive = useColorModeValue("gray.100", "gray.800");
  const bgButton = (segment: string) =>
    segment === activeSegment ? bgActive : bgInactive;

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
      {segments.map((segment, index) => (
        <Button
          key={index}
          size="xs"
          children={segment}
          bg={bgButton(segment)}
          onClick={() => onSegmentClick(segment)}
        />
      ))}
    </Grid>
  );
};

export default SegmentedControl;

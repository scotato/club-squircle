import React, { useState } from "react";
import {
  Grid,
  Text,
  Button,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";
import { SquircleMode } from "../squircle";
import { useColors, useSquircle } from "../hooks";
import Configuration from "./Configuration";
import Squircle from "./Squircle";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ColorPalette = () => {
  const colors = useColors();
  const { fill, setFill } = useSquircle();
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Grid
      gridTemplateColumns="repeat(10, 24px)"
      gridRowGap={1}
      transform="translateX(-2px)"
    >
      {Object.keys(colors).map((fillKey) =>
        Object.keys(colors[fillKey]).map((scaleKey) => {
          const color = colors[fillKey][scaleKey];
          const isSelected = color === fill;

          return (
            <Button
              display="block"
              key={`${fillKey}.${scaleKey}`}
              p="1px"
              width="20px"
              height="20px"
              minWidth={0}
              bg="transparent"
              borderWidth={2}
              borderRadius={7}
              borderColor={isSelected ? "blue.500" : borderColor}
              onClick={() => setFill(color)}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              <Squircle
                width={18}
                height={18}
                fill={color}
                c={10}
                mode={SquircleMode.Simple}
              />
            </Button>
          );
        })
      )}
    </Grid>
  );
};

const ImageConfig = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { fill, fillName } = useSquircle();
  const borderColor = useColorModeValue("white", "gray.900");

  return (
    <Configuration label="Fill">
      <>
        <Button
          px={3}
          leftIcon={
            <Circle
              size="5"
              borderWidth={2}
              borderColor={borderColor}
              bg={fill}
            />
          }
          justifyContent="space-between"
          rightIcon={
            isEditMode ? <ChevronUpIcon mt={-1} /> : <ChevronDownIcon mt={-1} />
          }
          onClick={() => setIsEditMode(!isEditMode)}
          children={<Text mr="auto">{fillName}</Text>}
          fontWeight="400"
          color="gray.500"
          textTransform="capitalize"
          isFullWidth
        />
        {isEditMode && <ColorPalette />}
      </>
    </Configuration>
  );
};

export default ImageConfig;

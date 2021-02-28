import React, { useState } from "react";
import { Grid, Button, Circle, useColorModeValue } from "@chakra-ui/react";
import { useColors, useSquircle } from "../hooks";
import Configuration from "./Configuration";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ColorPalette = () => {
  const colors = useColors();
  const { fill, setFill } = useSquircle();
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Grid gridTemplateColumns="repeat(10, 1fr)" gridRowGap={1}>
      {Object.keys(colors).map((fillKey) =>
        Object.keys(colors[fillKey]).map((scaleKey) => {
          const color = colors[fillKey][scaleKey];
          const isSelected = color === fill;

          return (
            <Button
              key={`${fillKey}.${scaleKey}`}
              p={0}
              width={5}
              height={5}
              minWidth={0}
              style={{ aspectRatio: "1 / 1" }}
              bg={color}
              borderRadius={32}
              borderWidth={2}
              borderColor={isSelected ? "blue.500" : borderColor}
              onClick={() => setFill(color)}
              _hover={{ filter: "brightness(75%)" }}
            />
          );
        })
      )}
    </Grid>
  );
};

const ImageConfig = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { fill } = useSquircle();

  return (
    <Configuration label="Fill">
      <>
        <Button
          px={3}
          fontWeight="500"
          leftIcon={
            <Circle size="4" borderWidth={2} borderColor="white" bg={fill} />
          }
          justifyContent="space-between"
          rightIcon={
            isEditMode ? <ChevronUpIcon mt={-1} /> : <ChevronDownIcon mt={-1} />
          }
          onClick={() => setIsEditMode(!isEditMode)}
          children={fill}
          isFullWidth
        />
        {isEditMode && <ColorPalette />}
      </>
    </Configuration>
  );
};

export default ImageConfig;

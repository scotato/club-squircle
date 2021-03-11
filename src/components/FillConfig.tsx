import React, { useState } from "react";
import {
  AspectRatio,
  VStack,
  Grid,
  Text,
  Button,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColors, useSquircle } from "../hooks";
import Configuration from "./Configuration";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ColorPalette = () => {
  const colors = useColors();
  const { style, setFillColor } = useSquircle();
  const borderColor = useColorModeValue("gray.200", "black");

  return (
    <Grid gridTemplateColumns="repeat(10, 1fr)">
      {Object.keys(colors).map((fillKey) =>
        Object.keys(colors[fillKey]).map((scaleKey) => {
          const color = colors[fillKey][scaleKey];
          const isSelected = color === style.fillColor;

          return (
            <AspectRatio ratio={1} key={`${fillKey}.${scaleKey}`}>
              <Button
                aria-label={color}
                p={0}
                borderWidth={2}
                borderColor={borderColor}
                minWidth={0}
                borderRadius="100%"
                bg={color}
                position="absolute"
                width="85%"
                height="85%"
                boxShadow={isSelected ? "outline" : "none"}
                onClick={() => setFillColor(color)}
                _hover={{ filter: "brightness(80%)" }}
                _active={{ filter: "brightness(60%)" }}
              />
            </AspectRatio>
          );
        })
      )}
    </Grid>
  );
};

const ImageConfig = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { style, fillName } = useSquircle();
  const borderColor = useColorModeValue("white", "gray.900");

  return (
    <VStack p={6} spacing={6} alignItems="stretch">
      <Configuration label="Fill">
        <>
          <Button
            px={3}
            leftIcon={
              <Circle
                size="5"
                borderWidth={2}
                borderColor={borderColor}
                bg={style.fillColor}
              />
            }
            justifyContent="space-between"
            rightIcon={
              isEditMode ? (
                <ChevronUpIcon mt={-1} />
              ) : (
                <ChevronDownIcon mt={-1} />
              )
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
    </VStack>
  );
};

export default ImageConfig;

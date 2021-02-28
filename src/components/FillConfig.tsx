import React from "react";
import { Grid, Button, useColorModeValue } from "@chakra-ui/react";
import { useColors, useSquircle } from "../hooks";
import Configuration from "./Configuration";

const ImageConfig = () => {
  const colors = useColors();
  const { fill, setFill } = useSquircle();
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Configuration label="Fill">
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
    </Configuration>
  );
};

export default ImageConfig;

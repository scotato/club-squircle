import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { AttachmentIcon, DeleteIcon } from "@chakra-ui/icons";
import { useImage } from "../hooks";
import Configuration from "./Configuration";
import Slider from "./Slider";
import SegmentedControl from "./SegmentedControl";

const ImageConfig = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { filename, clip, scale, setClip, setScale, removeImage } = useImage();
  const hasImage = !!filename;
  const content = hasImage ? `"${filename}"` : `"Add an Image"`;

  return (
    <VStack p={6} spacing={6} alignItems="stretch">
      <Configuration label="Image">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AttachmentIcon color="gray.500" />}
          />
          <Input
            id="ImageInput"
            type="file"
            variant="filled"
            accept="image/*"
            ref={inputRef}
            _before={{ content }}
            _hover={{ cursor: "pointer" }}
          />
          {hasImage && (
            <InputRightElement
              children={
                <IconButton
                  aria-label="Delete Image"
                  icon={<DeleteIcon color="gray.500" />}
                  onClick={() => {
                    removeImage();
                    if (inputRef.current) inputRef.current.value = "";
                  }}
                />
              }
            />
          )}
        </InputGroup>
      </Configuration>
      {hasImage && (
        <>
          <Configuration label="Image Scale" value={`${scale}%`}>
            <Slider
              value={scale}
              onChange={setScale}
              min={50}
              max={100}
              step={1}
            />
          </Configuration>

          <Configuration label="Image Clip">
            <SegmentedControl
              segments={["Clip", "Don't Clip"]}
              activeSegment={clip ? "Clip" : "Don't Clip"}
              onSegmentClick={(segment) => setClip(segment === "Clip")}
            />
          </Configuration>
        </>
      )}
    </VStack>
  );
};

export default ImageConfig;

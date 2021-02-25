import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AttachmentIcon, DeleteIcon } from "@chakra-ui/icons";
import { useImage } from "../hooks";
import Configuration from "./Configuration";

const ImageConfig = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { filename, removeImage } = useImage();
  const content = filename ? `"${filename}"` : `"Add an Image"`;

  return (
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
        {filename && (
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
  );
};

export default ImageConfig;

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
  const { filename, setImage } = useImage();
  const content = filename ? `"${filename}"` : `"Add an Image"`;
  const removeImage = () => {
    setImage({ filename: "", src: "" });
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Configuration label="Image">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AttachmentIcon color="gray.500" />}
        />
        <Input
          type="file"
          variant="filled"
          onChange={(e) => {
            const file = e.target?.files?.[0] ?? null;
            if (file?.name) {
              var reader = new FileReader();
              reader.onload = (e) =>
                setImage({
                  filename: file.name,
                  src: e.target?.result as string,
                });
              reader.readAsDataURL(file); // convert to base64 string
            }
          }}
          accept="image/*"
          ref={inputRef}
          _before={{ content }}
        />
        {filename && (
          <InputRightElement
            children={
              <IconButton
                aria-label="Delete Image"
                icon={<DeleteIcon color="gray.500" />}
                onClick={removeImage}
              />
            }
          />
        )}
      </InputGroup>
    </Configuration>
  );
};

export default ImageConfig;

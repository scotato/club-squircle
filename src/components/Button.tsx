import React from "react";
import { SquircleMask } from "@scotato/react-squircle";
import { Button, ButtonProps } from "@chakra-ui/react";

function SquircleButton(props: ButtonProps) {
  return (
    <SquircleMask p1={4} p2={16}>
      <Button
        size="lg"
        borderRadius={0}
        colorScheme="blue"
        width="100%"
        {...props}
      />
    </SquircleMask>
  );
}

interface LinkButtonProps {
  to: string;
  download?: string;
}

export function LinkButton(props: ButtonProps & LinkButtonProps) {
  const { to, download, ...rest } = props;

  return (
    <SquircleMask p1={4} p2={16}>
      <Button
        as="a"
        borderRadius={0}
        width="100%"
        target="_blank"
        href={to}
        download={download}
        {...rest}
      />
    </SquircleMask>
  );
}

export default SquircleButton;

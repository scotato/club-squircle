import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("gray.200", "gray.900")(props),
      },
    }),
  },
})

export default theme

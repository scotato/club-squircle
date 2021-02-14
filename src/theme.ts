import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
})

export default theme

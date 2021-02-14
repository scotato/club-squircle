import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: `linear-gradient(
          323deg,
          rgba(131, 58, 180, 1) 0%,
          rgba(253, 29, 29, 1) 50%,
          rgba(252, 176, 69, 1) 100%
        )`
      },
      body: {
        p: 8
      }
        // background: "gray.500"
        // background: props.colorMode === "dark" ? "gray.200" : "gray.800"
        // lineHeight: "tall",
      // },
      // a: {
      //   color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      // },
    },
  },
})

export default theme

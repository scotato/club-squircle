import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("white", "gray.900")(props),
      },
      'input[type="file"]': {
        color: 'transparent'
      },
      'input[type="file"]::-webkit-file-upload-button': {
        visibility: 'hidden'
      },
      'input[type="file"]::before': {
        display: 'block',
        position: 'relative',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: 'gray.500',
        top: '5px',
      }
    }),
  },
})

export default theme

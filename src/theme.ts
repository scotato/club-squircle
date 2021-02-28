import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import colors from './colors.json'

const theme = extendTheme({
  colors,
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("gray.100", "gray.800")(props),
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

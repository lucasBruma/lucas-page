import {AbsoluteCenter, extendTheme, TagRightIcon} from "@chakra-ui/react";

const colors = {
    red: {
        light: "hsl(13, 100%, 96%)",
        hover: "#f99076",
        bright: "hsl(12, 88%, 59%)",
        veryDark: '#1d1b1b'
      },
    blue: {
      light: "hsl(227, 12%, 61%)",
      dark: "hsl(228, 39%, 23%)",
      veryDark: "hsl(233, 12%, 13%)",
    },
    gray:{
      veryDark: '#111'
    },
    white: "#fff",
    aquamarine: '#7fffd4',
    black:'#000'
}


export default extendTheme({
    styles: {
    global: {
      'html, body': {
        color: colors.white,
        fontSize: '18px'
      }
    }
  },
    fonts: {
      body: "'Montserrat', sans-serif"
    },
    colors: {
      red: {
        light: colors.red.light,
        bright: colors.red.bright,
        veryDark: colors.red.veryDark
      },
      blue: {
        light: colors.blue.light,
        dark: colors.blue.dark,
        veryDark: colors.blue.veryDark,
      },
      gray:{
        veryDark: colors.gray.veryDark
      },
    },
    layerStyles: {
        bgRed:{
            bg: colors.red.bright,
            color: colors.gray,
        },
      },
    components: {
      Button: {
        variants: {
          outline: {
            border: "0",
            fontWeight: "500",
            _hover:{
              bg:'none'
            }
          },
          solid: {
            borderRadius: "10px",
            bg: colors.aquamarine,
            padding: "1rem 1.4rem",
            boxShadow: "lg",
            color: colors.black,
            _hover: {
              bg: 'none',
              color: colors.aquamarine,
              outline: `1px solid ${colors.aquamarine}`
            }
          },
          bgLight:{
            bg: colors.gray,
            color: colors.red.bright,
            padding: "1.8rem 2rem",
            borderRadius: "40px",
            _hover: {
              color: colors.red.hover,
            }
          },
          footer:{
            border: "0",
            fontWeight: "200",
            color: colors.gray,
            _hover: {
              color: colors.red.bright,
            }
          },
          icon: {
            bg: 'auto',
          },
        },
      },
      Link:{
        baseStyle:{
          _hover: {
            textDecoration:'none',
          },
        },
        variants:{
          sidebar:{
            position:'relative',
            paddingBottom: '5px',
            '::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '1px',
              backgroundColor: colors.white,
              transform: 'scaleX(0)',
              transformOrigin: 'bottom right',
              transition:'transform 0.6s ease-out'
              },
          _hover:{
            '::after': {
              transform: 'scaleX(1)',
              transformOrigin: 'bottom left' 
            },
          }
          },
        }
      },
      Heading:{
        variants:{
          primary:{
              fontWeight: '700',
              letterSpacing: '2px',
              fontSize: '7xl',
          },
          section:{
            fontWeight:'extrabold',
            fontSize:'5xl',
            color: colors.aquamarine
          },
          card:{
            fontSize:'2xl',
            fontWeight:'bold'
          }
        }
      }, 
        },
      },
)

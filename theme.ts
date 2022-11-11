import { lighten, darken, readableColor } from 'polished';

const searchIcon = `
  <svg version="1.1" viewBox="0 0 15 16" width="15" height="16" xmlns="http://www.w3.org/2000/svg" fill="none"
       className="search-icon">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
          stroke="currentColor" stroke-width="2"></path>
    <path d="M7.5 5C6.11929 5 5 6.11929 5 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    <path d="M1 15L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`

export const theme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },
  colors: {
    // tonalOffset: 0.2,
    primary: {
      main: '#103426',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      // contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    lightGreen: {
      main: '#00D2B9',
      contrastText: '#000000',
    },
    lightBlue: {
      main: '#F1F5F8'
    },
    darkBlue: {
      main: '#D2DFE8'
    },
    // success: {
    //   main: '#00aa13',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 3, colors.success.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
    //   contrastText: ({ colors }) => readableColor(colors.success.main),
    // },
    // error: {
    //   main: '#e53935',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.error.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
    //   contrastText: ({ colors }) => readableColor(colors.error.main),
    // },
    // warning: {
    //   main: '#d4ad03',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.warning.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
    //   contrastText: ({ colors }) => readableColor(colors.warning.main),
    // },
    // info: {
    //   main: '#4782cb',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
    //   contrastText: ({ colors }) => readableColor(colors.info.main),
    // },
    text: {
      primary: '#000000',
      // secondary: '#4e566d',
    },
    // border: {
    //   dark: 'rgba(0,0,0, 0.15)',
    //   light: '#ffffff',
    // },
    // responses: {
    //   success: {
    //     color: ({ colors }) => colors.success.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
    //   },
    //   error: {
    //     color: ({ colors }) => colors.error.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
    //   },
    //   redirect: {
    //     color: ({ colors }) => colors.warning.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
    //   },
    //   info: {
    //     color: ({ colors }) => colors.info.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
    //   },
    // },
    http: {
      get: '#00D2B9',
      post: '#0D4AC2',
      put: '#916FEF',
      options: '#d3ca12',
      patch: '#B36526',
      delete: '#FF4635',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
    // navbar: {
    //   main: ({ colors }) => colors.primary.main,
    //   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
    //   contrastText: 'white'
    // },
    // footer: {
      // main: ({ colors }) => colors.primary.main,
      // contrastText: 'white'
    // },
  },

  sidebar: {
    backgroundColor: '#fafafa',
    width: '260px',
    fontFamily: '"Founders Grotesk", sans-serif',
    spacing: {
      offsetTop: '74px; padding-bottom: 74',
    }
  },
  // tocPanel: {
  //   width: '240px',
  // },

  components: {
    buttons: {
      borderRadius: '20px',
      secondary: '#00D2B9'
    },
    search: {
      iconColor:  ({ colors }) => colors.primary.main,
      icon: searchIcon
    }
  },
  typography: {
    fontSize: '16px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: '"Founders Grotesk Text", sans-serif',
    headings: {
      fontFamily: '"Founders Grotesk Medium", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      fontWeight: '600'
    },
    heading1: {
      color: '#000000'
    },
    heading2: {
      color: '#000000'
    },
    heading3: {
      color: '#000000'
    },
    heading4: {
      color: '#000000'
    },
    heading5: {
      color: '#000000'
    },
    heading6: {
      color: '#000000'
    },
    code: {
      fontSize: '13px',
      fontFamily: '"Source Code Pro", sans-serif',
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#e53935',
      backgroundColor: 'rgba(38, 50, 56, 0.04)',
      wrap: false,
    },
    links: {
      color: '#0d4ac2',
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '40%',
    // textColor: '#ffffff',
  },
  schema: {
    nestedBackground: '#fafafa',
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    typeNameColor: '#041B2E',
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  // codeBlock: {
  //   backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  //   tokens: {},
  // },
};
import textColours from "./textColours";
// const { brand } = window.pwaConfig;
const primary = `#912a2d`;
const secondary = `#d23e42`;
let text = textColours.light;

const theme = {
  palette: {
    primary: {
      main: primary || "#222"
    },
    secondary: {
      main: secondary || "#333"
    },
    text,
    background: {
      default: secondary,
      paper: primary,
      appBar: secondary,
      contentFrame: primary
    }
  },
  typography: {
    fontFamily: '"Helvetica", sans-serif'
  }
};

export default theme;

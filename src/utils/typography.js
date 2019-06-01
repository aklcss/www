import Typography from "typography";
import lincolnTheme from "typography-theme-lincoln";

lincolnTheme.baseFontSize = "22";
lincolnTheme.baseLineHeight = "1.58";
lincolnTheme.scaleRatio = "1.6";
lincolnTheme.headerFontFamily = [
  "Fira Sans",
  "sans-serif"
];
lincolnTheme.bodyFontFamily = [
  "Fira Sans",
  "sans-serif"
];
lincolnTheme.googleFonts = [
  {
    name: "Fira Sans",
    styles: [
      "400",
      "900"
    ]
  },
];
  lincolnTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    'h1,h2': {
      fontWeight: 900,
    },
    "a": {
      textShadow: 0
    }
  });
const typography = new Typography(lincolnTheme);

export default typography;
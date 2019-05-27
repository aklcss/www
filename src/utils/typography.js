import Typography from "typography";
import lincolnTheme from "typography-theme-lincoln";

lincolnTheme.baseFontSize = "15px";
lincolnTheme.baseLineHeight = "1.58";
lincolnTheme.scaleRatio = "1.6";
lincolnTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  "a": {
    textShadow: 0
  }
});
const typography = new Typography(lincolnTheme);

export default typography;
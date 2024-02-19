import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/site";

export default function ThemeRegistry({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

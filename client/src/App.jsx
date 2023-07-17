import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.global.mode); // chú ý
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  console.log(theme);
  console.log(mode);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        App Here
      </ThemeProvider>
    </div>
  );
}

export default App;

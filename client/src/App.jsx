import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./scenes/Dashboard";
import Layout from "./scenes/Layout";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.global.mode); // chú ý
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  console.log(theme);
  console.log(mode);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
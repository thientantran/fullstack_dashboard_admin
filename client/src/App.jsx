import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Customers from "./scenes/Customers";
import Dashboard from "./scenes/Dashboard";
import Layout from "./scenes/Layout";
import Products from "./scenes/Products";
import Transactions from "./scenes/Transactions";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.global.mode); // chú ý
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

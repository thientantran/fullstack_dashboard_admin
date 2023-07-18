import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar isNonMobile={isNonMobile} drawerWidth="250px" />
      <Box width="100%">
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

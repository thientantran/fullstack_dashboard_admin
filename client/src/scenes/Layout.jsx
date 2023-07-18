import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useGetUserQuery } from "../api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data } = useGetUserQuery("63701cc1f03239c72c000187");
  console.log("data query", data);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

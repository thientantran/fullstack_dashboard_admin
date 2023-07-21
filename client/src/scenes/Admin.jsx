import { Box, useTheme } from "@mui/material";
import React from "react";

import { useGetAdminsQuery } from "../api";
import Header from "../components/Header";

export default function Admin() {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Managing admins and list of admins" />
    </Box>
  );
}

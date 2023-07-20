import { Box } from "@mui/material";
import React from "react";

import { useGetOverviewQuery } from "../api";
import Header from "../components/Header";

export default function Overview() {
  const { data, isLoading } = useGetOverviewQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
    </Box>
  );
}

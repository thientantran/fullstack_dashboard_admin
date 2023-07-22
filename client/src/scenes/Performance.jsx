import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { useGetUserPerformanceQuery } from "../api";
import Header from "../components/Header";

export default function Performance() {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance Here"
      />
    </Box>
  );
}

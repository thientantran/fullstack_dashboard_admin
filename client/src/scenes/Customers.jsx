import { Box } from "@mui/material";
import React from "react";

import { useGetCustomersQuery } from "../api";
import Header from "../components/Header";
export default function Customers() {
  const { data, isLoading } = useGetCustomersQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOEMERS" subtitle="List of Customer" />
    </Box>
  );
}

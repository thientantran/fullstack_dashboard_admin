import { Box } from "@mui/material";
import React from "react";

import { useGetGeographyQuery } from "../api";
import Header from "../components/Header";
export default function Geography() {
  const { data } = useGetGeographyQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
    </Box>
  );
}

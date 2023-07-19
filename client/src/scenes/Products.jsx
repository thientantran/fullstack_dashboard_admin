import { Box } from "@mui/material";
import React from "react";

import { useGetProductsQuery } from "../api";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Products() {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header subtitle="See your list of products" title="PRODUCTS" />
      <Box mt="20px">
        <Product />
        <Product />
        <Product />
      </Box>
    </Box>
  );
}

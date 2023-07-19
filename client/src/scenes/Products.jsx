import { Box, useMediaQuery } from "@mui/material";
import React from "react";

import { useGetProductsQuery } from "../api";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Products() {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header subtitle="See your list of products" title="PRODUCTS" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0,1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {data || !isLoading ? (
          data.map((product) => <Product key={product._id} data={product} />)
        ) : (
          <div>...Loading</div>
        )}
      </Box>
    </Box>
  );
}

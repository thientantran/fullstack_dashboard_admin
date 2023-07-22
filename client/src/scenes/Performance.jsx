import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";

import { useGetUserPerformanceQuery } from "../api";
import Header from "../components/Header";

export default function Performance() {
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sorttable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance Here"
      />
      <Box mt="40px" height="75vh">
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

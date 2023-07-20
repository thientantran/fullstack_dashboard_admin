import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

import { useGetTransactionsQuery } from "../api";
import DataGridCustomToolbar from "../components/DataGridCustomToolbar";
import Header from "../components/Header";

export default function Transactions() {
  // const [page, setPage] = useState(0);
  // const [pageSize, setPageSize] = useState(20);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const { page, pageSize } = paginationModel;
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  // chỗ này nên tạo vậy khi nhập input thì nó onchange, rồi khi bấm submit thì mới setSearch, chứ để search vào thì mỗi lần onCHange nó sẽ gọi API tiếp
  // ==> BÀI TOÁN: KO LÀM VẬY, GÕ VÀO ONCHANGE SEARCH NHƯNG SAU KHOẢNG 1 THỜI GIAN NGỪNG TYPING MỚI GỌI API
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  const theme = useTheme();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      // sortable: false,
      renderCell: (params) => params.value.length,
      // chỗ này có thể lấy params.row.products.length => nhưng value có thể tự hiểu mình đang dùng products nên nó get lun value cho mình
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `${Number(params.value)}`,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="80vh"
        // chỉnh chỗ này để nó cho chiều dài của cái table
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.data) || []}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 100]}
          rowCount={(data && data.total) || 0}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
        {/* <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.data) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pageSizeOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        /> */}
      </Box>
    </Box>
  );
}

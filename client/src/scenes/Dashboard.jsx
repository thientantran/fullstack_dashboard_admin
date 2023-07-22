import { Box } from "@mui/material";

import { useGetDashboardQuery } from "../api";
import Header from "../components/Header";
export default function Dashboard() {
  const { data, isLoading } = useGetDashboardQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  );
}

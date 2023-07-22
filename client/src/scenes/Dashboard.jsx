import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";

import { useGetDashboardQuery } from "../api";
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
export default function Dashboard() {
  const { data, isLoading } = useGetDashboardQuery();
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download reports
          </Button>
        </Box>
      </FlexBetween>
    </Box>
  );
}

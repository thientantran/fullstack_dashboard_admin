import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

import { useGetDashboardQuery } from "../api";
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
import OverviewChart from "../components/OverviewChart";
import StatBox from "../components/StatBox";
export default function Dashboard() {
  const { data, isLoading } = useGetDashboardQuery();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
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
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <StatBox />
        <StatBox />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" isDashboard />
        </Box>
        <StatBox />
        <StatBox />
      </Box>
    </Box>
  );
}

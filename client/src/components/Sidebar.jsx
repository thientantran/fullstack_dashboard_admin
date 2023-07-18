import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FlexBetween from "./FlexBetween";
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

// eslint-disable-next-line react/prop-types
export default function Sidebar({ isNonMobile, drawerWidth }) {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  const { pathname } = useLocation();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            // cái class này là link tới cái gì?
            color: theme.palette.secondary[700],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
          },
        }}
      >
        <Box width="100%">
          {/* HEADER OF SIDEBAR */}
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  ECOMVISION
                </Typography>
              </Box>

              {!isNonMobile && (
                <IconButton>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
        </Box>

        <List>
          {navItems.map(({ text, icon }) => {
            // binding các tiêu đề
            if (!icon) {
              return (
                <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                  {text}
                </Typography>
              );
            }
            // binding các link
            const lcText = text.toLowerCase();
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/${lcText}`);
                    setActive(lcText);
                  }}
                  sx={{
                    backgroundColor:
                      active === lcText
                        ? theme.palette.secondary[300]
                        : "transparent",
                    color:
                      active === lcText
                        ? theme.palette.primary[600]
                        : theme.palette.secondary[200],
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: "2rem",
                      color:
                        active === lcText
                          ? theme.palette.primary[600]
                          : theme.palette.primary[200],
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {active === lcText && (
                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

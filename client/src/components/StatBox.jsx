import { Email } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

import { default as FletBetween, default as FlexBetween } from "./FlexBetween";
export default function StatBox() {
  const theme = useTheme();

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      // 2 cai nay` do o the cha su dung grid
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      bgcolor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FletBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          Title
        </Typography>
        <Email sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />
      </FletBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        value
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          Increase
        </Typography>
        <Typography>Description</Typography>
      </FlexBetween>
    </Box>
  );
}

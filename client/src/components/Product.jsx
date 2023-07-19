import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

export default function Product() {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          Category
        </Typography>
        <Typography variant="h5" component="div">
          NAME
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          Price
        </Typography>
        <Rating value="4.3" readOnly />
        <Typography>description</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>

      <Collapse
        in={isExpanded}
        timeout="auto"
        sx={{ color: theme.palette.neutral[300] }}
        unmountOnExit
      >
        <CardContent>
          <Typography>id:</Typography>
          <Typography>Supply left:</Typography>
          <Typography>Yearly sales this year:</Typography>
          <Typography>Yearly Units Sold This Year:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

/* eslint-disable react/prop-types */
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

export default function Product({ data }) {
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
          {data.category}
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(data.price.toFixed(2))}
        </Typography>
        <Rating value={data.rating} readOnly />
        <Typography>{data.description}</Typography>
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
          <Typography>id: {data._id}</Typography>
          <Typography>Supply left: {data.supply}</Typography>
          <Typography>
            Yearly sales this year: {data.stat[0].yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year:{data.stat[0].yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

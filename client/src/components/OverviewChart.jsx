import React from "react";

import { useGetOverviewQuery } from "../api";

// eslint-disable-next-line react/prop-types
export default function OverviewChart({ view }) {
  const { data, isLoading } = useGetOverviewQuery();
  console.log(view);
  return <div>OverviewChart</div>;
}

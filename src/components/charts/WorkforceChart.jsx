import React from "react";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { formatNumber } from "../ui/formatters";

export function WorkforceChart({ data, height = 400, className }) {
  return (
    <HorizontalBarChart
      data={data}
      dataKey="workforce"
      fill="#22d3ee"
      height={height}
      formatter={formatNumber}
      className={className}
    />
  );
}
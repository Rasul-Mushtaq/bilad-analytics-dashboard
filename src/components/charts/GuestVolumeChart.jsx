import React from "react";
import { HorizontalBarChart } from "./HorizontalBarChart";
import { formatNumber } from "../ui/formatters";

export function GuestVolumeChart({ data, height = 420, className }) {
  return (
    <HorizontalBarChart
      data={data}
      dataKey="total_guests"
      fill="#38bdf8"
      height={height}
      formatter={formatNumber}
      className={className}
    />
  );
}
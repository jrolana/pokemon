"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PropsInterface {
  chartData: { stat_name: string; base_stat: number }[];
}

const chartConfig = {
  base_stat: {
    label: "Base Stat",
    color: "hsl(var(--chart-1))",
  },

  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export default function Chart(props: PropsInterface) {
  const { chartData } = props;

  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          right: 16,
        }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="stat_name"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          hide
        />
        <XAxis dataKey="base_stat" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="base_stat"
          layout="vertical"
          fill="var(--color-base_stat)"
          radius={4}
        >
          <LabelList
            dataKey="stat_name"
            position="insideLeft"
            offset={8}
            className="fill-white"
            fontSize={12}
          />
          <LabelList
            dataKey="base_stat"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A linear line chart"

// const chartData = [
//   { date: "2026-04-01", level: 200 },
//   { date: "2026-04-02", level: 250 },
//   { date: "2026-04-03", level: 275 },
//   { date: "2026-04-04", level: 300 },
// ]
export type ExpSummaryChartData = {
  expSummaryChartData: Array<{
    date: string,
    level: number
  }>
}



const chartConfig = {
  level: {
    label: "level",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartDateLevel({expSummaryChartData}: ExpSummaryChartData) {

  const levelTicks = (() => {
  const values = expSummaryChartData.map((item) => item.level)
  const min = Math.floor(Math.min(...values) / 5) * 5
  const max = Math.ceil(Math.max(...values) / 5) * 5
  const ticks = []

  for (let value = min; value <= max; value += 5) {
    ticks.push(value)
  }

  return ticks
})()

  return (
    <Card>
      <CardHeader>
        <CardTitle>レベル推移</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <LineChart
            accessibilityLayer
            data={expSummaryChartData}
            margin={{
              left: 12,
              right: 60,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={levelTicks}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="level"
              type="linear"
              stroke="var(--color-level)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

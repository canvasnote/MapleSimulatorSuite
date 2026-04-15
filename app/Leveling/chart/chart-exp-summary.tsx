"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { content: "全体", "デイリー（5次）": 9, "デイリー（6次）": 7, "ウィークリー（5次）": 6, "ウィークリー（6次）": 5 },
  { content: "詳細", daily_arc1: 1, daily_arc2: 1, daily_arc3: 1, daily_arc4: 1, daily_arc5: 1, daily_arc6 :1, daily_arc7: 1, daily_arc8:1, daily_arc9:1, daily_aut1: 1, daily_aut2: 1, daily_aut3: 1, daily_aut4: 1, daily_aut5: 1, daily_aut6 :1, daily_aut7: 1, weekly_arc1: 1, weekly_arc2: 1, weekly_arc3: 1, weekly_arc4: 1, weekly_arc5: 1, weekly_arc6 :1,weekly_monpaex: 1,weekly_akatsuki: 1, weekly_epic1: 1, weekly_epic2: 1, weekly_epic3: 1 },
]

const chartConfig = {
  daily_arc: {
    label: "デイリー（5次）",
    color: "RGB(52, 199, 89)",
  },
  daily_aut: {
    label: "デイリー（6次）",
    color: "RGB(175, 82, 222)",
  },
  weekly_arc: {
    label: "ウィークリー（5次）",
    color: "RGB(255, 149, 0)",
  },
  weekly_aut: {
    label: "ウィークリー（6次）",
    color: "RGB(0, 122, 255)",
  },

  
  daily_arc1: {
    label: "消滅の旅路",
    color: "RGB(232, 252, 236)",
  },
  daily_arc2: {
    label: "チューチューアイランド",
    color: "RGB(187, 247, 208)",
  },
  daily_arc3: {
    label: "レヘルン",
    color: "RGB(134, 239, 172)",
  },
  daily_arc4: {
    label: "アルカナ",
    color: "RGB(74, 222, 128)",
  },
  daily_arc5: {
    label: "モラス",
    color: "RGB(34, 197, 94)",
  },
  daily_arc6: {
    label: "エスフェラ",
    color: "RGB(22, 163, 74)",
  },
  daily_arc7: {
    label: "ムーンブリッジ",
    color: "RGB(21, 128, 61)",
  },
  daily_arc8: {
    label: "苦痛の迷宮",
    color: "RGB(22, 163, 74)",
  },
  daily_arc9: {
    label: "リメン",
    color: "RGB(20, 83, 45)",
  },

  daily_aut1: {
    label: "セルニウム",
    color: "RGB(245, 235, 255)",
  },
  daily_aut2: {
    label: "ホテルアルクス",
    color: "RGB(233, 213, 255)",
  },
  daily_aut3: {
    label: "オーディウム",
    color: "RGB(216, 180, 254)",
  },
  daily_aut4: {
    label: "桃源郷",
    color: "RGB(192, 132, 252)",
  },
  daily_aut5: {
    label: "アルテリア",
    color: "RGB(147, 51, 234)",
  },
  daily_aut6: {
    label: "カルシオン",
    color: "RGB(126, 34, 206)",
  },
  daily_aut7: {
    label: "タラハート",
    color: "RGB(107, 33, 168)",
  },
  daily_aut8: {
    label: "ギアドラク",
    color: "RGB(22, 163, 74)",
  },

  weekly_arc1: {
    label: "エルダスペクトラム",
    color: "RGB(255, 247, 230)",
  },
  weekly_arc2: {
    label: "腹ペコのムト",
    color: "RGB(254, 235, 200)",
  },
  weekly_arc3: {
    label: "ミッドナイトチェイサー",
    color: "RGB(253, 216, 150)",
  },
  weekly_arc4: {
    label: "スピリットセイヴァー",
    color: "RGB(251, 191, 90)",
  },
  weekly_arc5: {
    label: "エンハイムディフェンス",
    color: "RGB(251, 165, 40)",
  },
  weekly_arc6: {
    label: "プロテクトエスフェラ",
    color: "RGB(234, 88, 12)",
  },

  
  weekly_monpaex: {
    label: "EXモンパ",
    color: "RGB(230, 242, 255)",
  },
  weekly_akatsuki: {
    label: "赤い月の森",
    color: "RGB(191, 219, 254)",
  },
  weekly_epic1: {
    label: "ハイマウンテン",
    color: "RGB(147, 197, 253)",
  },
  weekly_epic2: {
    label: "アングラーカンパニー",
    color: "RGB(96, 165, 250)",
  },
  weekly_epic3: {
    label: "悪夢仙境",
    color: "RGB(59, 130, 246)",
  },
} satisfies ChartConfig

export function ChartExpSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>経験値内訳</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-128 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="content" hide />
            <YAxis
              dataKey="content"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {/* <ChartLegend
              verticalAlign="bottom"
              content={<ChartLegendContent />}
            /> */}
            <Bar dataKey="デイリー（5次）" fill="var(--color-daily_arc)" radius={1} stackId="a" />
            <Bar dataKey="デイリー（6次）" fill="var(--color-daily_aut)" radius={1} stackId="a" />
            <Bar dataKey="ウィークリー（5次）" fill="var(--color-weekly_arc)" radius={1} stackId="a" />
            <Bar dataKey="ウィークリー（6次）" fill="var(--color-weekly_aut)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc1" fill="var(--color-daily_arc1)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc2" fill="var(--color-daily_arc2)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc3" fill="var(--color-daily_arc3)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc4" fill="var(--color-daily_arc4)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc5" fill="var(--color-daily_arc5)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc6" fill="var(--color-daily_arc6)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc7" fill="var(--color-daily_arc7)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc8" fill="var(--color-daily_arc8)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc9" fill="var(--color-daily_arc9)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut1" fill="var(--color-daily_aut1)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut2" fill="var(--color-daily_aut2)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut3" fill="var(--color-daily_aut3)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut4" fill="var(--color-daily_aut4)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut5" fill="var(--color-daily_aut5)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut6" fill="var(--color-daily_aut6)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut7" fill="var(--color-daily_aut7)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc1" fill="var(--color-weekly_arc1)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc2" fill="var(--color-weekly_arc2)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc3" fill="var(--color-weekly_arc3)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc4" fill="var(--color-weekly_arc4)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc5" fill="var(--color-weekly_arc5)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc6" fill="var(--color-weekly_arc6)" radius={1} stackId="a" />
            <Bar dataKey="weekly_monpaex" fill="var(--color-weekly_monpaex)" radius={1} stackId="a" />
            <Bar dataKey="weekly_akatsuki" fill="var(--color-weekly_akatsuki)" radius={1} stackId="a" />
            <Bar dataKey="weekly_epic1" fill="var(--color-weekly_epic1)" radius={1} stackId="a" />
            <Bar dataKey="weekly_epic2" fill="var(--color-weekly_epic2)" radius={1} stackId="a" />
            <Bar dataKey="weekly_epic3" fill="var(--color-weekly_epic3)" radius={1} stackId="a" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

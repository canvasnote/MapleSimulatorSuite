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

// const chartData = [
//   { content: "全体", "デイリー（5次）": 9, "デイリー（6次）": 7, "ウィークリー（5次）": 6, "ウィークリー（6次）": 5 },
//   { content: "詳細", daily_arc1: 1, daily_arc2: 1, daily_arc3: 1, daily_arc4: 1, daily_arc5: 1, daily_arc6 :1, daily_arc7: 1, daily_arc8:1, daily_arc9:1, daily_aut1: 1, daily_aut2: 1, daily_aut3: 1, daily_aut4: 1, daily_aut5: 1, daily_aut6 :1, daily_aut7: 1, weekly_arc1: 1, weekly_arc2: 1, weekly_arc3: 1, weekly_arc4: 1, weekly_arc5: 1, weekly_arc6 :1,weekly_monpaex: 1,weekly_akatsuki: 1, weekly_epic1: 1, weekly_epic2: 1, weekly_epic3: 1 },
// ]

export type ExpSummaryChartData = {
  expSummaryChartData: Array<{
    content: string,
    "デイリー（5次）"?: number, 
    "デイリー（6次）"?: number, 
    "ウィークリー（5次）"?: number, 
    "ウィークリー（6次）"?: number,
    daily_arc_1?: number,
    daily_arc_2?: number,
    daily_arc_3?: number,
    daily_arc_4?: number,
    daily_arc_5?: number,
    daily_arc_6?: number,
    daily_arc_7?: number,
    daily_arc_8?: number,
    daily_arc_9?: number,
    daily_monpa_arc_1?: number,
    daily_monpa_arc_2?: number,
    daily_monpa_arc_3?: number,
    daily_monpa_arc_4?: number,
    daily_monpa_arc_5?: number,
    daily_monpa_arc_6?: number,
    daily_monpa_arc_7?: number,
    daily_monpa_arc_8?: number,
    daily_monpa_arc_9?: number,
    daily_aut_1?: number,
    daily_aut_2?: number,
    daily_aut_3?: number,
    daily_aut_4?: number,
    daily_aut_5?: number,
    daily_aut_6?: number,
    daily_aut_7?: number,
    daily_monpa_aut_1?: number,
    daily_monpa_aut_2?: number,
    daily_monpa_aut_3?: number,
    daily_monpa_aut_4?: number,
    daily_monpa_aut_5?: number,
    daily_monpa_aut_6?: number,
    daily_monpa_aut_7?: number,
    daily_monpa_aut_8?: number,
    daily_monpa_aut_9?: number,
    weekly_arc1_?: number,
    weekly_arc2_?: number,
    weekly_arc3_?: number,
    weekly_arc4_?: number,
    weekly_arc5_?: number,
    weekly_arc6_?: number,
    weekly_monpaex?: number,
    weekly_akatsuki?: number,
    weekly_epic1?: number,
    weekly_epic2?: number,
    weekly_epic3?: number,
  }>
}

const chartConfig = {
  daily_arc: {
    label: "デイリー（5次）",
    color: "RGB(52, 199, 89)",
  },
  daily_monpa_arc: {
    label: "モンパ（5次）",
    color: "RGB(255, 105, 135)",
  },
  daily_aut: {
    label: "デイリー（6次）",
    color: "RGB(175, 82, 222)",
  },
  daily_monpa_aut: {
    label: "モンパ（6次）",
    color: "RGB(255, 175, 185)",
  },
  weekly_arc: {
    label: "ウィークリー（5次）",
    color: "RGB(255, 149, 0)",
  },
  weekly_aut: {
    label: "ウィークリー（6次）",
    color: "RGB(0, 122, 255)",
  },
  weekly_epic: {
    label: "エピックダンジョン",
    color: "RGB(96, 165, 250)",
  },

  
  daily_arc_1: {
    label: "デイリー(消滅の旅路)",
    color: "RGB(232, 252, 236)",
  },
  daily_arc_2: {
    label: "デイリー(チューチューアイランド)",
    color: "RGB(187, 247, 208)",
  },
  daily_arc_3: {
    label: "デイリー(レヘルン)",
    color: "RGB(134, 239, 172)",
  },
  daily_arc_4: {
    label: "デイリー(アルカナ)",
    color: "RGB(74, 222, 128)",
  },
  daily_arc_5: {
    label: "デイリー(モラス)",
    color: "RGB(34, 197, 94)",
  },
  daily_arc_6: {
    label: "デイリー(エスフェラ)",
    color: "RGB(22, 163, 74)",
  },
  daily_arc_7: {
    label: "デイリー(ムーンブリッジ)",
    color: "RGB(21, 128, 61)",
  },
  daily_arc_8: {
    label: "デイリー(苦痛の迷宮)",
    color: "RGB(22, 163, 74)",
  },
  daily_arc_9: {
    label: "デイリー(リメン)",
    color: "RGB(20, 83, 45)",
  },

  daily_aut_1: {
    label: "デイリー(セルニウム)",
    color: "RGB(245, 235, 255)",
  },
  daily_aut_2: {
    label: "デイリー(ホテルアルクス)",
    color: "RGB(233, 213, 255)",
  },
  daily_aut_3: {
    label: "デイリー(オーディウム)",
    color: "RGB(216, 180, 254)",
  },
  daily_aut_4: {
    label: "デイリー(桃源郷)",
    color: "RGB(192, 132, 252)",
  },
  daily_aut_5: {
    label: "デイリー(アルテリア)",
    color: "RGB(147, 51, 234)",
  },
  daily_aut_6: {
    label: "デイリー(カルシオン)",
    color: "RGB(126, 34, 206)",
  },
  daily_aut_7: {
    label: "デイリー(タラハート)",
    color: "RGB(107, 33, 168)",
  },
  daily_aut_8: {
    label: "デイリー(ギアドラク)",
    color: "RGB(22, 163, 74)",
  },

  daily_monpa_arc_1: {
    label: "モンパ(消滅の旅路)",
    color: "RGB(255, 235, 238)",
  },
  daily_monpa_arc_2: {
    label: "モンパ(チューチューアイランド)",
    color: "RGB(255, 205, 210)",
  },
  daily_monpa_arc_3: {
    label: "モンパ(レヘルン)",
    color: "RGB(255, 175, 185)",
  },
  daily_monpa_arc_4: {
    label: "モンパ(アルカナ)",
    color: "RGB(255, 145, 160)",
  },
  daily_monpa_arc_5: {
    label: "モンパ(モラス)",
    color: "RGB(255, 105, 135)",
  },
  daily_monpa_arc_6: {
    label: "モンパ(エスフェラ)",
    color: "RGB(255, 65, 110)",
  },
  daily_monpa_arc_7: {
    label: "モンパ(ムーンブリッジ)",
    color: "RGB(240, 40, 100)",
  },
  daily_monpa_arc_8: {
    label: "モンパ(苦痛の迷宮)",
    color: "RGB(220, 20, 80)",
  },
  daily_monpa_arc_9: {
    label: "モンパ(リメン)",
    color: "RGB(200, 0, 60)",
  },

  daily_monpa_aut_1: {
    label: "モンパ(セルニウム)",
    color: "RGB(255, 235, 238)",
  },
  daily_monpa_aut_2: {
    label: "モンパ(ホテルアルクス)",
    color: "RGB(255, 205, 210)",
  },
  daily_monpa_aut_3: {
    label: "モンパ(オーディウム)",
    color: "RGB(255, 175, 185)",
  },
  daily_monpa_aut_4: {
    label: "モンパ(桃源郷)",
    color: "RGB(255, 145, 160)",
  },
  daily_monpa_aut_5: {
    label: "モンパ(アルテリア)",
    color: "RGB(255, 105, 135)",
  },
  daily_monpa_aut_6: {
    label: "モンパ(カルシオン)",
    color: "RGB(255, 65, 110)",
  },
  daily_monpa_aut_7: {
    label: "モンパ(タラハート)",
    color: "RGB(240, 40, 100)",
  },
  daily_monpa_aut_8: {
    label: "モンパ(ギアドラク)",
    color: "RGB(220, 20, 80)",
  },

  weekly_arc_1: {
    label: "エルダスペクトラム",
    color: "RGB(255, 247, 230)",
  },
  weekly_arc_2: {
    label: "腹ペコのムト",
    color: "RGB(254, 235, 200)",
  },
  weekly_arc_3: {
    label: "ミッドナイトチェイサー",
    color: "RGB(253, 216, 150)",
  },
  weekly_arc_4: {
    label: "スピリットセイヴァー",
    color: "RGB(251, 191, 90)",
  },
  weekly_arc_5: {
    label: "エンハイムディフェンス",
    color: "RGB(251, 165, 40)",
  },
  weekly_arc_6: {
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
  weekly_epic_1: {
    label: "ハイマウンテン",
    color: "RGB(147, 197, 253)",
  },
  weekly_epic_2: {
    label: "アングラーカンパニー",
    color: "RGB(96, 165, 250)",
  },
  weekly_epic_3: {
    label: "悪夢仙境",
    color: "RGB(59, 130, 246)",
  },
} satisfies ChartConfig

export function ChartExpSummary({expSummaryChartData}: ExpSummaryChartData) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>経験値内訳</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-128 w-full">
          <BarChart
            accessibilityLayer
            data={expSummaryChartData}
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
            <Bar dataKey="モンパ（5次）" fill="var(--color-daily_monpa_arc)" radius={1} stackId="a" />
            <Bar dataKey="デイリー（6次）" fill="var(--color-daily_aut)" radius={1} stackId="a" />
            <Bar dataKey="モンパ（6次）" fill="var(--color-daily_monpa_aut)" radius={1} stackId="a" />
            <Bar dataKey="ウィークリー（5次）" fill="var(--color-weekly_arc)" radius={1} stackId="a" />
            <Bar dataKey="ウィークリー（6次）" fill="var(--color-weekly_aut)" radius={1} stackId="a" />
            <Bar dataKey="モンパEX" fill="var(--color-weekly_monpaex)" radius={1} stackId="a" />
            <Bar dataKey="エピックダンジョン" fill="var(--color-weekly_epic)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_1" fill="var(--color-daily_arc_1)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_2" fill="var(--color-daily_arc_2)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_3" fill="var(--color-daily_arc_3)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_4" fill="var(--color-daily_arc_4)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_5" fill="var(--color-daily_arc_5)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_6" fill="var(--color-daily_arc_6)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_7" fill="var(--color-daily_arc_7)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_8" fill="var(--color-daily_arc_8)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_9" fill="var(--color-daily_arc_9)" radius={1} stackId="a" />
            <Bar dataKey="daily_arc_10" fill="var(--color-daily_arc_10)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_1" fill="var(--color-daily_monpa_arc_1)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_2" fill="var(--color-daily_monpa_arc_2)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_3" fill="var(--color-daily_monpa_arc_3)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_4" fill="var(--color-daily_monpa_arc_4)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_5" fill="var(--color-daily_monpa_arc_5)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_6" fill="var(--color-daily_monpa_arc_6)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_7" fill="var(--color-daily_monpa_arc_7)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_8" fill="var(--color-daily_monpa_arc_8)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_9" fill="var(--color-daily_monpa_arc_9)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_arc_10" fill="var(--color-daily_monpa_arc_10)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_1" fill="var(--color-daily_aut_1)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_2" fill="var(--color-daily_aut_2)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_3" fill="var(--color-daily_aut_3)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_4" fill="var(--color-daily_aut_4)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_5" fill="var(--color-daily_aut_5)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_6" fill="var(--color-daily_aut_6)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_7" fill="var(--color-daily_aut_7)" radius={1} stackId="a" />
            <Bar dataKey="daily_aut_8" fill="var(--color-daily_aut_8)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_1" fill="var(--color-daily_monpa_aut_1)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_2" fill="var(--color-daily_monpa_aut_2)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_3" fill="var(--color-daily_monpa_aut_3)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_4" fill="var(--color-daily_monpa_aut_4)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_5" fill="var(--color-daily_monpa_aut_5)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_6" fill="var(--color-daily_monpa_aut_6)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_7" fill="var(--color-daily_monpa_aut_7)" radius={1} stackId="a" />
            <Bar dataKey="daily_monpa_aut_8" fill="var(--color-daily_monpa_aut_8)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_1" fill="var(--color-weekly_arc_1)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_2" fill="var(--color-weekly_arc_2)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_3" fill="var(--color-weekly_arc_3)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_4" fill="var(--color-weekly_arc_4)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_5" fill="var(--color-weekly_arc_5)" radius={1} stackId="a" />
            <Bar dataKey="weekly_arc_6" fill="var(--color-weekly_arc_6)" radius={1} stackId="a" />
            <Bar dataKey="weekly_monpaex" fill="var(--color-weekly_monpaex)" radius={1} stackId="a" />
            <Bar dataKey="weekly_akatsuki" fill="var(--color-weekly_akatsuki)" radius={1} stackId="a" />
            <Bar dataKey="High_Mountain" fill="var(--color-weekly_epic_1)" radius={1} stackId="a" />
            <Bar dataKey="Angular_Company" fill="var(--color-weekly_epic_2)" radius={1} stackId="a" />
            <Bar dataKey="Nightmare_Paradice" fill="var(--color-weekly_epic_3)" radius={1} stackId="a" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

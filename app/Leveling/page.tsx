"use client"

import { useState, type ChangeEvent } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"

import { DatePickerDemo } from "./datepicker"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChartExpSummary } from "@/app/Leveling/chart/chart-exp-summary"
import { ChartDateLevel,  } from "@/app/Leveling/chart/chart-date-level"
import type {ExpSummaryChartData} from "@/app/Leveling/chart/chart-date-level"

import simulator, { LevelSimulatorResult } from "@/app/Leveling/simulator"

import SimulatorRecord from "@/app/Leveling/simulator"

export type FormState = {
  startDate?: Date
  endDate?: Date
  startLevel: string
  startPercent: string
  hyperburning: boolean
  burningBeyond: boolean
  dailyArcane1: boolean
  dailyArcane2: boolean
  dailyArcane3: boolean
  dailyArcane4: boolean
  dailyArcane5: boolean
  dailyArcane6: boolean
  dailyArcane7: boolean
  dailyArcane8: boolean
  dailyArcane9: boolean
  dailyAuthentic1: boolean
  dailyAuthentic2: boolean
  dailyAuthentic3: boolean
  dailyAuthentic4: boolean
  dailyAuthentic5: boolean
  dailyAuthentic6: boolean
  dailyAuthentic7: boolean
  dailyAuthentic8: boolean
  dailyAuthentic9: boolean
  dailyMonpa: string
  weeklyArcane1: string
  weeklyArcane2: string
  weeklyArcane3: string
  weeklyArcane4: string
  weeklyArcane5: string
  weeklyArcane6: string
  weeklyMonpaEx: boolean
  weeklyAkatsuki: boolean
  weeklyEpicDungeonKind: string
  weeklyEpicDungeonBonus: string
}

export default function Page() {
  const [form, setForm] = useState<FormState>({
    startDate: undefined,
    endDate: undefined,
    startLevel: "200",
    startPercent: "0",
    hyperburning: false,
    burningBeyond: false,
    dailyArcane1: false,
    dailyArcane2: false,
    dailyArcane3: false,
    dailyArcane4: false,
    dailyArcane5: false,
    dailyArcane6: false,
    dailyArcane7: false,
    dailyArcane8: false,
    dailyArcane9: false,
    dailyAuthentic1: false,
    dailyAuthentic2: false,
    dailyAuthentic3: false,
    dailyAuthentic4: false,
    dailyAuthentic5: false,
    dailyAuthentic6: false,
    dailyAuthentic7: false,
    dailyAuthentic8: false,
    dailyAuthentic9: false,
    dailyMonpa: "0",
    weeklyArcane1: "0",
    weeklyArcane2: "0",
    weeklyArcane3: "0",
    weeklyArcane4: "0",
    weeklyArcane5: "0",
    weeklyArcane6: "0",
    weeklyMonpaEx: false,
    weeklyAkatsuki: false,
    weeklyEpicDungeonKind: "なし",
    weeklyEpicDungeonBonus: "0",
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: keyof FormState) => (checked: boolean | "indeterminate") => {
    setForm((prev) => ({ ...prev, [name]: checked === true }))
  }

  const [finalLevel, setFinalLevel] = useState(Number)
  const [finalLevelPercent, setFinalLevelPercent] = useState(Number)
  const [levelSimulatorResult, setLevelSimulatorResult] = useState<LevelSimulatorResult>(new LevelSimulatorResult([]))
  // const [levelTransition, setLevelTransition] = useState(typeof ExpSummaryChartData)

  const toLevelTransition = (levelSimulatorResult: LevelSimulatorResult) => {
    return levelSimulatorResult.records.map( (record)  => {return { "date": record.date.toLocaleDateString(), "level": record.currentLevel + record.currentExpPercent} })
  }

  const toExpSummary = (levelSimulatorResult: LevelSimulatorResult) => {
    return [
      {
        'content': '全体',
        'デイリー（5次）' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  
            accumulator 
          + currentValue.daily_arc_1 
          + currentValue.daily_arc_2 
          + currentValue.daily_arc_3 
          + currentValue.daily_arc_4 
          + currentValue.daily_arc_5 
          + currentValue.daily_arc_6 
          + currentValue.daily_arc_7 
          + currentValue.daily_arc_8 
          + currentValue.daily_arc_9 
          , 0),
        'モンパ（5次）' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  
            accumulator 
          + currentValue.daily_monpa_arc_1 
          + currentValue.daily_monpa_arc_2 
          + currentValue.daily_monpa_arc_3 
          + currentValue.daily_monpa_arc_4 
          + currentValue.daily_monpa_arc_5 
          + currentValue.daily_monpa_arc_6 
          + currentValue.daily_monpa_arc_7 
          + currentValue.daily_monpa_arc_8 
          + currentValue.daily_monpa_arc_9 
          , 0),
        'デイリー（6次）' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  
            accumulator 
          + currentValue.daily_aut_1 
          + currentValue.daily_aut_2 
          + currentValue.daily_aut_3 
          + currentValue.daily_aut_4 
          + currentValue.daily_aut_5 
          + currentValue.daily_aut_6 
          + currentValue.daily_aut_7 
          + currentValue.daily_aut_8 
          + currentValue.daily_aut_9 
          , 0),
        'モンパ（6次）' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  
            accumulator 
          + currentValue.daily_monpa_aut_1 
          + currentValue.daily_monpa_aut_2 
          + currentValue.daily_monpa_aut_3 
          + currentValue.daily_monpa_aut_4 
          + currentValue.daily_monpa_aut_5 
          + currentValue.daily_monpa_aut_6 
          + currentValue.daily_monpa_aut_7 
          + currentValue.daily_monpa_aut_8 
          , 0),
      },
      {
        'content': '詳細',
        'daily_arc_1' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_1, 0),
        'daily_arc_2' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_2, 0),
        'daily_arc_3' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_3, 0),
        'daily_arc_4' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_4, 0),
        'daily_arc_5' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_5, 0),
        'daily_arc_6' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_6, 0),
        'daily_arc_7' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_7, 0),
        'daily_arc_8' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_8, 0),
        'daily_arc_9' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_arc_9, 0),
        
        'daily_monpa_arc_1' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_1, 0),
        'daily_monpa_arc_2' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_2, 0),
        'daily_monpa_arc_3' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_3, 0),
        'daily_monpa_arc_4' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_4, 0),
        'daily_monpa_arc_5' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_5, 0),
        'daily_monpa_arc_6' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_6, 0),
        'daily_monpa_arc_7' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_7, 0),
        'daily_monpa_arc_8' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_8, 0),
        'daily_monpa_arc_9' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_arc_9, 0),

        'daily_aut_1' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_1, 0),
        'daily_aut_2' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_2, 0),
        'daily_aut_3' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_3, 0),
        'daily_aut_4' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_4, 0),
        'daily_aut_5' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_5, 0),
        'daily_aut_6' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_6, 0),
        'daily_aut_7' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_7, 0),
        'daily_aut_8' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_8, 0),
        'daily_aut_9' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_aut_9, 0),
        
        'daily_monpa_aut_1' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_1, 0),
        'daily_monpa_aut_2' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_2, 0),
        'daily_monpa_aut_3' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_3, 0),
        'daily_monpa_aut_4' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_4, 0),
        'daily_monpa_aut_5' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_5, 0),
        'daily_monpa_aut_6' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_6, 0),
        'daily_monpa_aut_7' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_7, 0),
        'daily_monpa_aut_8' : levelSimulatorResult.records.reduce( (accumulator, currentValue) =>  accumulator + currentValue.daily_monpa_aut_8, 0),
    }]
  }

  const simulate = () => {
    const result = simulator(form)
    // alert(JSON.stringify(result.records.findLast( (item) => item)))

    const finalLevel = result.records.findLast( (item) => item )?.currentLevel
    const finalLevelPercent = result.records.findLast( (item) => item )?.currentExpPercent
    setFinalLevel(finalLevel ? finalLevel : 0)
    if (finalLevelPercent !== undefined){
      setFinalLevelPercent(finalLevelPercent)
    }

    setLevelSimulatorResult(result)

    // setLevelTransition(toLevelTransition(result))

  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Character
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>レベリング</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="rounded-xl">
              <Card>
                <CardHeader>
                  <CardTitle>日付指定</CardTitle>
                  {/* <CardDescription>Card Description</CardDescription> */}
                  {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                  <p>開始日</p>
                  <DatePickerDemo
                    value={form.startDate}
                    onChange={(date) => setForm((prev) => ({ ...prev, startDate: date }))}
                  />
                  <p>終了日</p>
                  <DatePickerDemo
                    value={form.endDate}
                    onChange={(date) => setForm((prev) => ({ ...prev, endDate: date }))}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>開始レベル</CardTitle>
                  {/* <CardDescription>Card Description</CardDescription> */}
                  {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                  <Field orientation="horizontal">
                    <Input
                      type="number"
                      name="startLevel"
                      className="w-30"
                      value={form.startLevel}
                      onChange={handleInputChange}
                    />
                    <Label htmlFor="開始レベル">開始レベル</Label>
                  </Field>
                  <Field orientation="horizontal">
                    <Input
                      type="number"
                      name="startPercent"
                      className="w-30"
                      value={form.startPercent}
                      onChange={handleInputChange}
                    />
                    <Label htmlFor="経験値％">経験値％</Label>
                  </Field>
                </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>バーニング</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    {/* <CardAction>Card Action</CardAction> */}
                  </CardHeader>
                <CardContent>
                  <FieldGroup className="max-w-sm">
                    <Field orientation="horizontal">
                      <Checkbox
                        id="hyperburning"
                        name="hyperburning"
                        checked={form.hyperburning}
                        onCheckedChange={handleCheckboxChange("hyperburning")}
                      />
                      <Label htmlFor="ハイパーバーニング">ハイパーバーニング</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="burningbeyond"
                        name="burningBeyond"
                        checked={form.burningBeyond}
                        onCheckedChange={handleCheckboxChange("burningBeyond")}
                      />
                      <Label htmlFor="バーニングBEYOND">バーニングBEYOND</Label>
                    </Field>
                    </FieldGroup>
                </CardContent>
              </Card>
            </div>
            
            <div className="rounded-xl">
              <Card>
                <CardHeader>
                  <CardTitle>デイリー</CardTitle>
                </CardHeader>
                <CardContent>
                  <FieldGroup className="max-w-sm">
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-1"
                        name="dailyArcane1"
                        checked={form.dailyArcane1}
                        onCheckedChange={handleCheckboxChange("dailyArcane1")}
                      />
                      <Label htmlFor="消滅の旅路">消滅の旅路</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-2"
                        name="dailyArcane2"
                        checked={form.dailyArcane2}
                        onCheckedChange={handleCheckboxChange("dailyArcane2")}
                      />
                      <Label htmlFor="チューチューアイランド">チューチューアイランド</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-3"
                        name="dailyArcane3"
                        checked={form.dailyArcane3}
                        onCheckedChange={handleCheckboxChange("dailyArcane3")}
                      />
                      <Label htmlFor="レヘルン">レヘルン</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-4"
                        name="dailyArcane4"
                        checked={form.dailyArcane4}
                        onCheckedChange={handleCheckboxChange("dailyArcane4")}
                      />
                      <Label htmlFor="アルカナ">アルカナ</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-5"
                        name="dailyArcane5"
                        checked={form.dailyArcane5}
                        onCheckedChange={handleCheckboxChange("dailyArcane5")}
                      />
                      <Label htmlFor="モラス">モラス</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-6"
                        name="dailyArcane6"
                        checked={form.dailyArcane6}
                        onCheckedChange={handleCheckboxChange("dailyArcane6")}
                      />
                      <Label htmlFor="エスフェラ">エスフェラ</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-7"
                        name="dailyArcane7"
                        checked={form.dailyArcane7}
                        onCheckedChange={handleCheckboxChange("dailyArcane7")}
                      />
                      <Label htmlFor="ムーンブリッジ">ムーンブリッジ</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-8"
                        name="dailyArcane8"
                        checked={form.dailyArcane8}
                        onCheckedChange={handleCheckboxChange("dailyArcane8")}
                      />
                      <Label htmlFor="苦痛の迷宮">苦痛の迷宮</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-arcane-9"
                        name="dailyArcane9"
                        checked={form.dailyArcane9}
                        onCheckedChange={handleCheckboxChange("dailyArcane9")}
                      />
                      <Label htmlFor="リメン">リメン</Label>
                    </Field>

                    <Separator />
                    
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-1"
                        name="dailyAuthentic1"
                        checked={form.dailyAuthentic1}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic1")}
                      />
                      <Label htmlFor="セルニウム">セルニウム</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-2"
                        name="dailyAuthentic2"
                        checked={form.dailyAuthentic2}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic2")}
                      />
                      <Label htmlFor="ホテルアルクス">ホテルアルクス</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-3"
                        name="dailyAuthentic3"
                        checked={form.dailyAuthentic3}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic3")}
                      />
                      <Label htmlFor="オーディウム">オーディウム</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-4"
                        name="dailyAuthentic4"
                        checked={form.dailyAuthentic4}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic4")}
                      />
                      <Label htmlFor="桃源郷">桃源郷</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-5"
                        name="dailyAuthentic5"
                        checked={form.dailyAuthentic5}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic5")}
                      />
                      <Label htmlFor="アルテリア">アルテリア</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-6"
                        name="dailyAuthentic6"
                        checked={form.dailyAuthentic6}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic6")}
                      />
                      <Label htmlFor="カルシオン">カルシオン</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="daily-authentic-7"
                        name="dailyAuthentic7"
                        checked={form.dailyAuthentic7}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic7")}
                      />
                      <Label htmlFor="タラハート">タラハート</Label>
                    </Field>
                    <Field orientation="horizontal" hidden>
                      <Checkbox
                        id="daily-authentic-8"
                        name="dailyAuthentic8"
                        checked={form.dailyAuthentic8}
                        onCheckedChange={handleCheckboxChange("dailyAuthentic8")}
                      />
                      <Label htmlFor="ギアドラク">ギアドラク</Label>
                    </Field>

                    <Separator />

                    <Field orientation="horizontal">
                      <Select
                      value={form.dailyMonpa}
                      onValueChange={(value) => setForm((prev) => ({ ...prev, dailyMonpa: value }))}
                      name="daily-monpa"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Label htmlFor="モンスターパーク">モンスターパーク</Label>
                    </Field>
                  </FieldGroup>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-xl">
              <Card>
                <CardHeader>
                  <CardTitle>ウィークリー</CardTitle>
                </CardHeader>
                <CardContent>
                  <FieldGroup className="max-w-sm">
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane1}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane1: value }))}
                        name="weekly-arcane-1"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="エルダスペクトラム">エルダスペクトラム</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane2}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane2: value }))}
                        name="weekly-arcane-2"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="腹ペコのムト">腹ペコのムト</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane3}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane3: value }))}
                        name="weekly-arcane-3"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="ミッドナイトチェイサー">ミッドナイトチェイサー</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane4}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane4: value }))}
                        name="weekly-arcane-4"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="スピリットセイヴァー">スピリットセイヴァー</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane5}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane5: value }))}
                        name="weekly-arcane-5"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="エンハイムディフェンス">エンハイムディフェンス</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyArcane6}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyArcane6: value }))}
                        name="weekly-arcane-6"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="プロテクトエスフェラ">プロテクトエスフェラ</Label>
                    </Field>
                    
                    <Separator />

                    <Field orientation="horizontal">
                      <Checkbox
                        id="weekly-monpaex"
                        name="weeklyMonpaEx"
                        checked={form.weeklyMonpaEx}
                        onCheckedChange={handleCheckboxChange("weeklyMonpaEx")}
                      />
                      <Label htmlFor="EXモンパ">EXモンパ</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox
                        id="weekly-akatsuki"
                        name="weeklyAkatsuki"
                        checked={form.weeklyAkatsuki}
                        onCheckedChange={handleCheckboxChange("weeklyAkatsuki")}
                      />
                      <Label htmlFor="赤い月の森">赤い月の森</Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Select
                        value={form.weeklyEpicDungeonKind}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyEpicDungeonKind: value }))}
                        name="weekly-epicdungeon-kind"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="なし">なし</SelectItem>
                            <SelectItem value="適正レベル">適正レベル</SelectItem>
                            <SelectItem value="ハイマウンテン">ハイマウンテン</SelectItem>
                            <SelectItem value="アングラーカンパニー">アングラーカンパニー</SelectItem>
                            <SelectItem value="悪夢仙境">悪夢仙境</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select
                        value={form.weeklyEpicDungeonBonus}
                        onValueChange={(value) => setForm((prev) => ({ ...prev, weeklyEpicDungeonBonus: value }))}
                        name="weekly-epicdungeon-bonus"
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">ボーナス0回</SelectItem>
                            <SelectItem value="5">ボーナス5回</SelectItem>
                            <SelectItem value="10">ボーナス10回</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label htmlFor="エピックダンジョン">エピックダンジョン</Label>
                    </Field>
                  </FieldGroup>
                  
                </CardContent>
              </Card>
            </div>
          </div>
          <div >
            <div  className="object-center">
              <Button onClick={simulate}>計算</Button>
              <p>実行可能なレベル帯におけるデイリー/ウィークリーのみを実行します。</p>
              <p>ウィークリーは適正レベルになった日、または木曜日に実行します。</p>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            {/* <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card"> */}
              <Card className="@container/card">
                <CardHeader>
                  <CardDescription>到達レベル</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {finalLevel}({Intl.NumberFormat('ja-JP', {style: "percent", maximumFractionDigits: 3}).format(finalLevelPercent)})
                  </CardTitle>
                </CardHeader>
              </Card>
              <ChartExpSummary expSummaryChartData={toExpSummary(levelSimulatorResult)} />
              <ChartDateLevel expSummaryChartData={toLevelTransition(levelSimulatorResult)} />
            {/* </div> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

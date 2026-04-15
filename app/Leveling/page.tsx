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
import { ChartDateLevel } from "@/app/Leveling/chart/chart-date-level"

type FormState = {
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

  const simulate = () => {
    console.log("aaaaa")
    console.log(form)
    alert(JSON.stringify(form))
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
                    275(12.34%)
                  </CardTitle>
                </CardHeader>
              </Card>
              <ChartExpSummary />
              <ChartDateLevel />
            {/* </div> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

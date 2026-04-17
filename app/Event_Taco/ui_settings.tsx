import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DatePickerDemo } from "../Leveling/datepicker"
import { Field } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { FormState } from "./page"
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { ItemActions, ItemContent } from "@/components/ui/item"

type UiSettingsProps = {
  form: FormState
  setForm: Dispatch<SetStateAction<FormState>>
}

export default function UiSettings({ form, setForm }: UiSettingsProps) {
    return (
    <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="rounded-xl">
                <Card>
                    <CardHeader>
                        <CardTitle>設定</CardTitle>
                        {/* <CardDescription>Card Description</CardDescription> */}
                        {/* <CardAction>Card Action</CardAction> */}
                    </CardHeader>
                    <CardContent>
                        <Field orientation="horizontal">
                            <Select
                            value={form.targerLevel}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, targerLevel: value }))}
                            name="targerLevel"
                            >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="9">9</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            <Label htmlFor="レベルになったら報酬受領">レベルになったら撤退して報酬受領</Label>
                        </Field>
                            <Field orientation="horizontal">
                            <Select
                            value={form.simulationExec}
                            onValueChange={(value) => setForm((prev) => ({ ...prev, simulationExec: value }))}
                            name="simulationExec"
                            >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="1000">1,000</SelectItem>
                                <SelectItem value="10000">10,000</SelectItem>
                                <SelectItem value="100000">100,000</SelectItem>
                                <SelectItem value="1000000">100,0000</SelectItem>
                                <SelectItem value="10000000">1,000,0000</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            <Label htmlFor="回シミュレーション実行">回シミュレーション実行</Label>
                        </Field>
                    </CardContent>
                </Card>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>注意事項</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>確率と報酬は
                          <a
                            href="https://maplestory.nexon.co.jp/notice/view/?alias=1c9d2eb74a8a4aa8a3591f9193865ded"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                          >JMS公式サイト</a>
                          基準です。
                        </p>
                        <p>えさやりの結果には大成功が存在することが確認されていますが、公式サイトに確率の記載がないためシミュレーションには反映されていません。</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
)}
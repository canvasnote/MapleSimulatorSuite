import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DatePickerDemo } from "../Leveling/datepicker"
import { Field } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { FormState } from "./page"
import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { SimulatorRecord } from "../Leveling/simulator"
import { record } from "zod"
import { ResultSumamry } from "./chart/result_summary"

type UiSettingsProps = {
  form: FormState
  setForm: Dispatch<SetStateAction<FormState>>
}

class SimulationResult {
    records: SimulationRecord[] = []
    toSummary: () => SimulationSummary 

    constructor(records: SimulationRecord[]){
        this.records = records
        this.toSummary = () => {
            const eachLevel = [
                { level: 0, 'AdvancedEXPTicket': 0,    'SolErdaAura': 0,     'SolErdaFragment': 0    , achivedCount: this.records.filter((record) => record.achievedLevel===0).length },
                { level: 1, 'AdvancedEXPTicket': 0,    'SolErdaAura': 0,     'SolErdaFragment': 0    , achivedCount: this.records.filter((record) => record.achievedLevel===1).length },
                { level: 2, 'AdvancedEXPTicket': 20,   'SolErdaAura': 40,    'SolErdaFragment': 1    , achivedCount: this.records.filter((record) => record.achievedLevel===2).length },
                { level: 3, 'AdvancedEXPTicket': 60,   'SolErdaAura': 120,   'SolErdaFragment': 3    , achivedCount: this.records.filter((record) => record.achievedLevel===3).length },
                { level: 4, 'AdvancedEXPTicket': 120,  'SolErdaAura': 240,   'SolErdaFragment': 6    , achivedCount: this.records.filter((record) => record.achievedLevel===4).length },
                { level: 5, 'AdvancedEXPTicket': 200,  'SolErdaAura': 400,   'SolErdaFragment': 10   , achivedCount: this.records.filter((record) => record.achievedLevel===5).length },
                { level: 6, 'AdvancedEXPTicket': 300,  'SolErdaAura': 600,   'SolErdaFragment': 15   , achivedCount: this.records.filter((record) => record.achievedLevel===6).length },
                { level: 7, 'AdvancedEXPTicket': 1000, 'SolErdaAura': 2000,  'SolErdaFragment': 50   , achivedCount: this.records.filter((record) => record.achievedLevel===7).length },
                { level: 8, 'AdvancedEXPTicket': 3000, 'SolErdaAura': 6000,  'SolErdaFragment': 150  , achivedCount: this.records.filter((record) => record.achievedLevel===8).length },
                { level: 9, 'AdvancedEXPTicket': 6000, 'SolErdaAura': 12000, 'SolErdaFragment': 300  , achivedCount: this.records.filter((record) => record.achievedLevel===9).length },
            ]

            const averageSolErdaAura         = eachLevel.reduce((accumulator, item) => accumulator + item.SolErdaAura * item.achivedCount, 0)       / records.length
            const averageSolErdaFragment     = eachLevel.reduce((accumulator, item) => accumulator + item.SolErdaFragment * item.achivedCount, 0)   / records.length
            const averageAdvancedEXPTicket   = eachLevel.reduce((accumulator, item) => accumulator + item.AdvancedEXPTicket * item.achivedCount, 0) / records.length
            const rewardedCount              = records.filter((record) => record.tacoEscaped === false).length
            const escapedCount               = records.filter((record) => record.tacoEscaped === true ).length
            const averageMobDefeat           = records.reduce((accumulator, item) => accumulator + item.huntedMobCount, 0) / records.length

            return {
                eachLevel: eachLevel,
                averageSolErda: averageSolErdaAura / 1000,
                averageSolErdaAura: averageSolErdaAura,
                averageSolErdaFragment: averageSolErdaFragment,
                averageAdvancedEXPTicket: averageAdvancedEXPTicket,
                rewardedCount: rewardedCount,
                escapedCount: escapedCount,
                averageMobDefeat: averageMobDefeat,
            }
        }
    }
}

type SimulationRecord = {
    huntedMobCount: number,
    achievedLevel: number,
    tacoEscaped: boolean
}

export type SimulationSummary = {
    eachLevel: 
        {
            level: number
            achivedCount: number
        }[]
    ,
    averageSolErda: number,
    averageSolErdaAura: number,
    averageSolErdaFragment: number,
    averageAdvancedEXPTicket: number,
    rewardedCount: number,
    escapedCount: number,
    averageMobDefeat: number,
}

let execSimulation = (form: FormState, setSimulationResult: Dispatch<SetStateAction<SimulationResult>>): SimulationResult => {
    let result = new SimulationResult([])

    const levelUpTable = [
            { 'currentLevel': 1, 'nextLevel': 2, 'success': 1000, 'fail':   0, 'escape':    0 },
            { 'currentLevel': 2, 'nextLevel': 3, 'success':  200, 'fail': 800, 'escape':    0 },
            { 'currentLevel': 3, 'nextLevel': 4, 'success':  100, 'fail': 900, 'escape':    0 },
            { 'currentLevel': 4, 'nextLevel': 5, 'success':   50, 'fail': 950, 'escape':    0 },
            { 'currentLevel': 5, 'nextLevel': 6, 'success':   30, 'fail': 970, 'escape':    0 },
            { 'currentLevel': 6, 'nextLevel': 7, 'success':   25, 'fail': 975, 'escape':    0 },
            { 'currentLevel': 7, 'nextLevel': 8, 'success':   10, 'fail': 965, 'escape':   25 },
            { 'currentLevel': 8, 'nextLevel': 9, 'success':    5, 'fail': 965, 'escape':   30 },
    ]
    const levelUpBox = levelUpTable.map((record) => {
        // 箱の中に成功、失敗、逃亡のくじを入れる
        let box = {currentLevel: record.currentLevel, nextLevel: record.nextLevel, result: Array(0)}
        let i = 0
        while(i < record.success){
            i++
            box.result.push('s')
        }
        i = 0
        while(i < record.fail){
            i++
            box.result.push('f')
        }
        i = 0
        while(i < record.escape){
            i++
            box.result.push('e')
        }
        return box
    })
    const rewardTable = [
        { 'level': 1, 'AdvancedEXPTicket': 0,    'SolErdaAura': 0,     'SolErdaFragment': 0   },
        { 'level': 2, 'AdvancedEXPTicket': 20,   'SolErdaAura': 40,    'SolErdaFragment': 1   },
        { 'level': 3, 'AdvancedEXPTicket': 60,   'SolErdaAura': 120,   'SolErdaFragment': 3   },
        { 'level': 4, 'AdvancedEXPTicket': 120,  'SolErdaAura': 240,   'SolErdaFragment': 6   },
        { 'level': 5, 'AdvancedEXPTicket': 200,  'SolErdaAura': 400,   'SolErdaFragment': 10  },
        { 'level': 6, 'AdvancedEXPTicket': 300,  'SolErdaAura': 600,   'SolErdaFragment': 15  },
        { 'level': 7, 'AdvancedEXPTicket': 1000, 'SolErdaAura': 2000,  'SolErdaFragment': 50  },
        { 'level': 8, 'AdvancedEXPTicket': 3000, 'SolErdaAura': 6000,  'SolErdaFragment': 150 },
        { 'level': 9, 'AdvancedEXPTicket': 6000, 'SolErdaAura': 12000, 'SolErdaFragment': 300 }
    ]
    
    // 設定読み取り
    const execute_count = Number(form.simulationExec)
    const target_level = Number(form.targerLevel)

    
    // シミュレーション実行
    ;
    [...Array(execute_count).keys()].forEach(() => {
        
    //for (let i = 0; i < execute_count; i++ ){
        // 最初の1000体狩り
        let huntedMobCount = 1000
        let currentLevel = 1
        let currentFeedCount = 1
        let tacoEscaped = false

        while(true) {
            huntedMobCount += 300
            currentFeedCount += 1

            // くじが入った箱を取ってくる
            // [0番目に1レベルに挑戦する箱], [1番目に2レベルに挑戦する箱], [2番目に3レベルに挑戦する箱], ... が並んでいる
            // 例) 今が2LV => 3LVに挑戦 => インデックス2の箱を取ってくる
            const box = levelUpBox.filter((box) => box.currentLevel === currentLevel)[0]
            // 1個引いて結果を適用
            const choosedResult = box.result[Math.floor(Math.random() * box.result.length)];
            switch(choosedResult){
                case 's':
                    // 成功
                    currentLevel += 1
                    // alert('s');
                    break;
                case 'f':
                    // 失敗
                    // alert('f');
                    break;
                case 'e':
                    // 逃亡
                    tacoEscaped = true
                    currentLevel = 0
                    break;
                default:
                    throw new Error('抽選結果がおかしいです')
            }
            // 目標レベルを達成したら終了
            if(currentLevel === target_level) { break; }
            // タコが逃げたら終了
            if(tacoEscaped) { break; }
            // 100回えさやりしたら終了
            if(currentFeedCount === 100) { break; }
        } // while(currentLevel !== target_level && currentFeedCount <= 100 && tacoEscaped === false)

        // alert(currentLevel);
        result.records.push(
            {
                huntedMobCount: huntedMobCount,
                achievedLevel: currentLevel,
                tacoEscaped: tacoEscaped
            }
        )
    })

    setSimulationResult(result)
    return result
}



export default function Simulation({ form, setForm }: UiSettingsProps) {
    
    const [simulationResult, setSimulationResult] = useState<SimulationResult>(new SimulationResult([]))

    return (
    <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-1">
            <div className="rounded-xl">
                <Card>
                    <CardHeader>
                        <CardTitle>シミュレーション実行</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => execSimulation(form, setSimulationResult)}>実行</Button>
                        <ResultSumamry 
                            eachLevel={simulationResult.toSummary().eachLevel} 
                            averageAdvancedEXPTicket={simulationResult.toSummary().averageAdvancedEXPTicket} 
                            averageSolErdaAura={simulationResult.toSummary().averageSolErdaAura} 
                            averageSolErda={simulationResult.toSummary().averageSolErda} 
                            averageSolErdaFragment={simulationResult.toSummary().averageSolErdaFragment} 
                            rewardedCount={simulationResult.toSummary().rewardedCount} 
                            escapedCount={simulationResult.toSummary().escapedCount} 
                            averageMobDefeat={simulationResult.toSummary().averageMobDefeat} 
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
    )}
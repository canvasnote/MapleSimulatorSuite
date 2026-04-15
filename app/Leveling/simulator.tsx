import next_level_exp from "@/app/Leveling/next_level_exp.json"
import fixed_exp_reward from "@/app/Leveling/fixed_exp_reward.json"

import type { FormState } from "@/app/Leveling/page"
import { settings } from "node:cluster"

export class SimulatorRecord {
    date: Date
    currentLevel: number
    currentExp: number
    currentExpPercent: number
    daily_arc_1: number
    daily_arc_2: number
    daily_arc_3: number
    daily_arc_4: number
    daily_arc_5: number
    daily_arc_6: number
    daily_arc_7: number
    daily_arc_8: number
    daily_arc_9: number
    daily_monpa_arc_1: number
    daily_monpa_arc_2: number
    daily_monpa_arc_3: number
    daily_monpa_arc_4: number
    daily_monpa_arc_5: number
    daily_monpa_arc_6: number
    daily_monpa_arc_7: number
    daily_monpa_arc_8: number
    daily_monpa_arc_9: number
    daily_monpa_arc_10: number
    daily_aut_1: number
    daily_aut_2: number
    daily_aut_3: number
    daily_aut_4: number
    daily_aut_5: number
    daily_aut_6: number
    daily_aut_7: number
    daily_aut_8: number
    daily_aut_9: number
    daily_monpa_aut_1: number
    daily_monpa_aut_2: number
    daily_monpa_aut_3: number
    daily_monpa_aut_4: number
    daily_monpa_aut_5: number
    daily_monpa_aut_6: number
    daily_monpa_aut_7: number
    daily_monpa_aut_8: number
    weekly_arc_1: number
    weekly_arc_2: number
    weekly_arc_3: number
    weekly_arc_4: number
    weekly_arc_5: number
    weekly_arc_6: number
    weeklyMonpaEx: number
    weeklyAkatsuki: number
    weeklyEpicDungeon: number

    constructor(
        date: Date,
        currentLevel: number,
        currentExp: number,
        currentExpPercent: number,
        daily_arc_1: number,
        daily_arc_2: number,
        daily_arc_3: number,
        daily_arc_4: number,
        daily_arc_5: number,
        daily_arc_6: number,
        daily_arc_7: number,
        daily_arc_8: number,
        daily_arc_9: number,
        daily_monpa_arc_1: number,
        daily_monpa_arc_2: number,
        daily_monpa_arc_3: number,
        daily_monpa_arc_4: number,
        daily_monpa_arc_5: number,
        daily_monpa_arc_6: number,
        daily_monpa_arc_7: number,
        daily_monpa_arc_8: number,
        daily_monpa_arc_9: number,
        daily_monpa_arc_10: number,
        daily_aut_1: number,
        daily_aut_2: number,
        daily_aut_3: number,
        daily_aut_4: number,
        daily_aut_5: number,
        daily_aut_6: number,
        daily_aut_7: number,
        daily_aut_8: number,
        daily_aut_9: number,
        daily_monpa_aut_1: number,
        daily_monpa_aut_2: number,
        daily_monpa_aut_3: number,
        daily_monpa_aut_4: number,
        daily_monpa_aut_5: number,
        daily_monpa_aut_6: number,
        daily_monpa_aut_7: number,
        daily_monpa_aut_8: number,
        weekly_arc_1: number,
        weekly_arc_2: number,
        weekly_arc_3: number,
        weekly_arc_4: number,
        weekly_arc_5: number,
        weekly_arc_6: number,
        weeklyMonpaEx: number,
        weeklyAkatsuki: number,
        weeklyEpicDungeon: number
    ) {
        this.date = date
        this.currentLevel = currentLevel
        this.currentExp = currentExp
        this.currentExpPercent = currentExpPercent
        this.daily_arc_1 = daily_arc_1
        this.daily_arc_2 = daily_arc_2
        this.daily_arc_3 = daily_arc_3
        this.daily_arc_4 = daily_arc_4
        this.daily_arc_5 = daily_arc_5
        this.daily_arc_6 = daily_arc_6
        this.daily_arc_7 = daily_arc_7
        this.daily_arc_8 = daily_arc_8
        this.daily_arc_9 = daily_arc_9
        this.daily_monpa_arc_1 = daily_monpa_arc_1
        this.daily_monpa_arc_2 = daily_monpa_arc_2
        this.daily_monpa_arc_3 = daily_monpa_arc_3
        this.daily_monpa_arc_4 = daily_monpa_arc_4
        this.daily_monpa_arc_5 = daily_monpa_arc_5
        this.daily_monpa_arc_6 = daily_monpa_arc_6
        this.daily_monpa_arc_7 = daily_monpa_arc_7
        this.daily_monpa_arc_8 = daily_monpa_arc_8
        this.daily_monpa_arc_9 = daily_monpa_arc_9
        this.daily_monpa_arc_10 = daily_monpa_arc_10
        this.daily_aut_1 = daily_aut_1
        this.daily_aut_2 = daily_aut_2
        this.daily_aut_3 = daily_aut_3
        this.daily_aut_4 = daily_aut_4
        this.daily_aut_5 = daily_aut_5
        this.daily_aut_6 = daily_aut_6
        this.daily_aut_7 = daily_aut_7
        this.daily_aut_8 = daily_aut_8
        this.daily_aut_9 = daily_aut_9
        this.daily_monpa_aut_1 = daily_monpa_aut_1
        this.daily_monpa_aut_2 = daily_monpa_aut_2
        this.daily_monpa_aut_3 = daily_monpa_aut_3
        this.daily_monpa_aut_4 = daily_monpa_aut_4
        this.daily_monpa_aut_5 = daily_monpa_aut_5
        this.daily_monpa_aut_6 = daily_monpa_aut_6
        this.daily_monpa_aut_7 = daily_monpa_aut_7
        this.daily_monpa_aut_8 = daily_monpa_aut_8
        this.weekly_arc_1 = weekly_arc_1
        this.weekly_arc_2 = weekly_arc_2
        this.weekly_arc_3 = weekly_arc_3
        this.weekly_arc_4 = weekly_arc_4
        this.weekly_arc_5 = weekly_arc_5
        this.weekly_arc_6 = weekly_arc_6
        this.weeklyMonpaEx = weeklyMonpaEx
        this.weeklyAkatsuki = weeklyAkatsuki
        this.weeklyEpicDungeon = weeklyEpicDungeon
    }
}

export class LevelSimulatorResult {
    records: SimulatorRecord[]

    constructor(result: SimulatorRecord[]) {
        this.records = result
    }
}

export default function simulate(settings: FormState): LevelSimulatorResult {
    let result = new LevelSimulatorResult([])

    const startDate = settings.startDate
    const endDate = settings.endDate
    let currentLevel = Number(settings.startLevel)
    const currentLevel_nextExp = next_level_exp.findLast( (item) => item.currentlevel === currentLevel)?.nextexp
    let currentExp = Number(settings.startPercent) * (currentLevel_nextExp ? currentLevel_nextExp : 0)
    let currentExpPercent = currentLevel_nextExp ? currentExp / currentLevel_nextExp : 0

    if (startDate && endDate) {
        let currentDate = new Date(startDate)
        while (currentDate <= endDate) {

            const lastExecutedRecord = result.records.findLast( item => item )
            // SimulatorRecord を作成（昨日のレコードがあるなら引き継ぎ、そうでないなら初期化）
            let record = new SimulatorRecord(
                new Date(currentDate),
                currentLevel, // currentLevel
                currentExp, // currentExp
                currentExpPercent, // currentExpPercent

                lastExecutedRecord?.daily_arc_1 ? lastExecutedRecord.daily_arc_1 : 0, // dailyArcane1
                lastExecutedRecord?.daily_arc_2 ? lastExecutedRecord.daily_arc_2 : 0, // dailyArcane2
                lastExecutedRecord?.daily_arc_3 ? lastExecutedRecord.daily_arc_3 : 0, // dailyArcane3
                lastExecutedRecord?.daily_arc_4 ? lastExecutedRecord.daily_arc_4 : 0, // dailyArcane4
                lastExecutedRecord?.daily_arc_5 ? lastExecutedRecord.daily_arc_5 : 0, // dailyArcane5
                lastExecutedRecord?.daily_arc_6 ? lastExecutedRecord.daily_arc_6 : 0, // dailyArcane6
                lastExecutedRecord?.daily_arc_7 ? lastExecutedRecord.daily_arc_7 : 0, // dailyArcane7
                lastExecutedRecord?.daily_arc_8 ? lastExecutedRecord.daily_arc_8 : 0, // dailyArcane8
                lastExecutedRecord?.daily_arc_9 ? lastExecutedRecord.daily_arc_9 : 0, // dailyArcane9
                lastExecutedRecord?.daily_monpa_arc_1 ? lastExecutedRecord?.daily_monpa_arc_1 : 0, // daily_monpa_arc_1
                lastExecutedRecord?.daily_monpa_arc_2 ? lastExecutedRecord?.daily_monpa_arc_2 : 0, // daily_monpa_arc_2
                lastExecutedRecord?.daily_monpa_arc_3 ? lastExecutedRecord?.daily_monpa_arc_3 : 0, // daily_monpa_arc_3
                lastExecutedRecord?.daily_monpa_arc_4 ? lastExecutedRecord?.daily_monpa_arc_4 : 0, // daily_monpa_arc_4
                lastExecutedRecord?.daily_monpa_arc_5 ? lastExecutedRecord?.daily_monpa_arc_5 : 0, // daily_monpa_arc_5
                lastExecutedRecord?.daily_monpa_arc_6 ? lastExecutedRecord?.daily_monpa_arc_6 : 0, // daily_monpa_arc_6
                lastExecutedRecord?.daily_monpa_arc_7 ? lastExecutedRecord?.daily_monpa_arc_7 : 0, // daily_monpa_arc_7
                lastExecutedRecord?.daily_monpa_arc_8 ? lastExecutedRecord?.daily_monpa_arc_8 : 0, // daily_monpa_arc_8
                lastExecutedRecord?.daily_monpa_arc_9 ? lastExecutedRecord?.daily_monpa_arc_9 : 0, // daily_monpa_arc_9
                lastExecutedRecord?.daily_monpa_arc_10 ? lastExecutedRecord?.daily_monpa_arc_10 : 0, // daily_monpa_arc_10
                lastExecutedRecord?.daily_aut_1 ? lastExecutedRecord.daily_aut_1 : 0, // dailyAuthentic1
                lastExecutedRecord?.daily_aut_2 ? lastExecutedRecord.daily_aut_2 : 0, // dailyAuthentic2
                lastExecutedRecord?.daily_aut_3 ? lastExecutedRecord.daily_aut_3 : 0, // dailyAuthentic3
                lastExecutedRecord?.daily_aut_4 ? lastExecutedRecord.daily_aut_4 : 0, // dailyAuthentic4
                lastExecutedRecord?.daily_aut_5 ? lastExecutedRecord.daily_aut_5 : 0, // dailyAuthentic5
                lastExecutedRecord?.daily_aut_6 ? lastExecutedRecord.daily_aut_6 : 0, // dailyAuthentic6
                lastExecutedRecord?.daily_aut_7 ? lastExecutedRecord.daily_aut_7 : 0, // dailyAuthentic7
                lastExecutedRecord?.daily_aut_8 ? lastExecutedRecord.daily_aut_8 : 0, // dailyAuthentic8
                lastExecutedRecord?.daily_aut_9 ? lastExecutedRecord.daily_aut_9 : 0, // dailyAuthentic9
                lastExecutedRecord?.daily_monpa_aut_1 ? lastExecutedRecord?.daily_monpa_aut_1 : 0, // daily_monpa_aut_1
                lastExecutedRecord?.daily_monpa_aut_2 ? lastExecutedRecord?.daily_monpa_aut_2 : 0, // daily_monpa_aut_2
                lastExecutedRecord?.daily_monpa_aut_3 ? lastExecutedRecord?.daily_monpa_aut_3 : 0, // daily_monpa_aut_3
                lastExecutedRecord?.daily_monpa_aut_4 ? lastExecutedRecord?.daily_monpa_aut_4 : 0, // daily_monpa_aut_4
                lastExecutedRecord?.daily_monpa_aut_5 ? lastExecutedRecord?.daily_monpa_aut_5 : 0, // daily_monpa_aut_5
                lastExecutedRecord?.daily_monpa_aut_6 ? lastExecutedRecord?.daily_monpa_aut_6 : 0, // daily_monpa_aut_6
                lastExecutedRecord?.daily_monpa_aut_7 ? lastExecutedRecord?.daily_monpa_aut_7 : 0, // daily_monpa_aut_7
                lastExecutedRecord?.daily_monpa_aut_8 ? lastExecutedRecord?.daily_monpa_aut_8 : 0, // daily_monpa_aut_8
                0, // weeklyArcane1
                0, // weeklyArcane2
                0, // weeklyArcane3
                0, // weeklyArcane4
                0, // weeklyArcane5
                0, // weeklyArcane6
                0, // weeklyMonpaEx
                0, // weeklyAkatsuki
                0  // weeklyEpicDungeon
            )

            // レベルに応じたコンテンツを実行する(デイリー)
            const daily_contents = [
                    {reqLvl: 200, id: 'daily_arc_1', name: '消滅の旅路' },
                    {reqLvl: 210, id: 'daily_arc_2', name: 'チューチューアイランド' },
                    {reqLvl: 220, id: 'daily_arc_3', name: 'レヘルン' },
                    {reqLvl: 225, id: 'daily_arc_4', name: 'アルカナ' },
                    {reqLvl: 230, id: 'daily_arc_5', name: 'モラス' },
                    {reqLvl: 235, id: 'daily_arc_6', name: 'エスフェラ' },
                    {reqLvl: 245, id: 'daily_arc_7', name: 'ムーンブリッジ' },
                    {reqLvl: 250, id: 'daily_arc_8', name: '苦痛の迷宮' },
                    {reqLvl: 255, id: 'daily_arc_9', name: 'リメン' },
                    {reqLvl: 260, id: 'daily_aut_1', name: 'セルニウム' },
                    {reqLvl: 265, id: 'daily_aut_2', name: 'ホテルアルクス' },
                    {reqLvl: 270, id: 'daily_aut_3', name: 'オーディウム' },
                    {reqLvl: 275, id: 'daily_aut_4', name: '桃源郷' },
                    {reqLvl: 280, id: 'daily_aut_5', name: 'アルテリア' },
                    {reqLvl: 285, id: 'daily_aut_6', name: 'カルシオン' },
                    {reqLvl: 290, id: 'daily_aut_7', name: 'タラハート' },
                    {reqLvl: 295, id: 'daily_aut_8', name: 'ギアドラク' },
                ]
            daily_contents.forEach(content => {
                let execute_content = false
                switch(content.id){
                    case 'daily_arc_1': { execute_content = settings.dailyArcane1; break; }
                    case 'daily_arc_2': { execute_content = settings.dailyArcane2; break; }
                    case 'daily_arc_3': { execute_content = settings.dailyArcane3; break; }
                    case 'daily_arc_4': { execute_content = settings.dailyArcane4; break; }
                    case 'daily_arc_5': { execute_content = settings.dailyArcane5; break; }
                    case 'daily_arc_6': { execute_content = settings.dailyArcane6; break; }
                    case 'daily_arc_7': { execute_content = settings.dailyArcane7; break; }
                    case 'daily_arc_8': { execute_content = settings.dailyArcane8; break; }
                    case 'daily_arc_9': { execute_content = settings.dailyArcane9; break; }
                    case 'daily_aut_1': { execute_content = settings.dailyAuthentic1; break; }
                    case 'daily_aut_2': { execute_content = settings.dailyAuthentic2; break; }
                    case 'daily_aut_3': { execute_content = settings.dailyAuthentic3; break; }
                    case 'daily_aut_4': { execute_content = settings.dailyAuthentic4; break; }
                    case 'daily_aut_5': { execute_content = settings.dailyAuthentic5; break; }
                    case 'daily_aut_6': { execute_content = settings.dailyAuthentic6; break; }
                    case 'daily_aut_7': { execute_content = settings.dailyAuthentic7; break; }
                    case 'daily_aut_8': { execute_content = settings.dailyAuthentic8; break; }
                    case 'daily_aut_9': { execute_content = settings.dailyAuthentic9; break; }
                    default: throw new Error("コンテンツ検索に関するエラーです: " + content.id)
                }
                if ((execute_content) && (record.currentLevel >= content.reqLvl)){
                    record = executeContent(record, content.id, settings.hyperburning, settings.burningBeyond)
                }
            });

            // レベルに応じたコンテンツを実行する(通常モンパ)
            const daily_monpa = [
                    {reqLvl: 200, id: 'daily_monpa_arc_1', name: '消滅の旅路' },
                    {reqLvl: 205, id: 'daily_monpa_arc_2', name: 'リバースシティ' },
                    {reqLvl: 210, id: 'daily_monpa_arc_3', name: 'チューチューアイランド' },
                    {reqLvl: 215, id: 'daily_monpa_arc_4', name: 'ヤムヤムアイランド' },
                    {reqLvl: 220, id: 'daily_monpa_arc_5', name: 'レヘルン' },
                    {reqLvl: 225, id: 'daily_monpa_arc_6', name: 'アルカナ' },
                    {reqLvl: 230, id: 'daily_monpa_arc_7', name: 'モラス' },
                    {reqLvl: 235, id: 'daily_monpa_arc_8', name: 'エスフェラ' },
                    {reqLvl: 245, id: 'daily_monpa_arc_9', name: 'ムーンブリッジ' },
                    {reqLvl: 250, id: 'daily_monpa_arc_10', name: '苦痛の迷宮' },
                    {reqLvl: 255, id: 'daily_monpa_arc_9', name: 'リメン' },
                    {reqLvl: 260, id: 'daily_monpa_aut_1', name: 'セルニウム' },
                    {reqLvl: 265, id: 'daily_monpa_aut_2', name: 'ホテルアルクス' },
                    {reqLvl: 270, id: 'daily_monpa_aut_3', name: 'オーディウム' },
                    {reqLvl: 275, id: 'daily_monpa_aut_4', name: '桃源郷' },
                    {reqLvl: 280, id: 'daily_monpa_aut_5', name: 'アルテリア' },
                    {reqLvl: 285, id: 'daily_monpa_aut_6', name: 'カルシオン' },
                    {reqLvl: 290, id: 'daily_monpa_aut_7', name: 'タラハート' },
                    // {reqLvl: 295, id: 'daily_monpa_aut_8', name: 'ギアドラク' },
                ]
            let monpa_enter_setting = Number(settings.dailyMonpa)
            let monpa_enter_count = 0
            while (monpa_enter_count < monpa_enter_setting) {
                let monpa_enter_switch = 'null'
                daily_monpa.forEach(content => {
                    if (record.currentLevel >= content.reqLvl){
                        monpa_enter_switch = content.id
                    }
                });
                if (monpa_enter_switch !== 'null') { 
                    record = executeContent(record, monpa_enter_switch, settings.hyperburning, settings.burningBeyond)
                }
                monpa_enter_count += 1
            }

            
            // 一通りやることが済んだらその日の結果を格納
            currentLevel = record.currentLevel
            currentExp = record.currentExp
            const currentLevel_nextExp = next_level_exp.findLast( (item) => item.currentlevel === currentLevel)?.nextexp
            currentExpPercent = currentLevel_nextExp ? record.currentExp / currentLevel_nextExp : 0
            result.records.push(record)
            currentDate.setDate(currentDate.getDate() + 1)
        }
    }

    return result
}

function executeContent(record: SimulatorRecord, contentKind: string, hyperburning: boolean, burningBeyond: boolean) {
    // console.log("wtf")
    // 実行するコンテンツの経験値を取得
    const content =  fixed_exp_reward.findLast( (item) => item.content === contentKind )
    if (content === undefined){
        throw new Error("コンテンツ経験値に関するエラーです: " + contentKind)
    }
    const accumulated_exp = content.exp

    // コンテンツの経験値を得る
    record.currentExp += accumulated_exp
    // alert(record.currentExp)
    // コンテンツごとの経験値を記録
    record = {...record, [contentKind]: accumulated_exp}
    // alert(JSON.stringify(record))

    // レベルアップ処理
    let exp_to_next_level = next_level_exp.findLast( (item) => item.currentlevel === record.currentLevel)?.nextexp
    if (exp_to_next_level === undefined){
        throw new Error("次レベル経験値に関するエラーです: " + record.currentLevel)
    }
    // alert("curr => " + record.currentExp + "\nnext => " + exp_to_next_level)
    while(record.currentExp >= exp_to_next_level) {
        
        if(hyperburning  && record.currentLevel < 260){
            record.currentLevel += 5
            if (record.currentLevel > 260) { record.currentLevel = 260 }
            record.currentExp -= exp_to_next_level
        }
        else if(burningBeyond && record.currentLevel >= 260 && record.currentLevel < 270){
            record.currentLevel += 2
            if (record.currentLevel > 270) { record.currentLevel = 270 }
            record.currentExp -= exp_to_next_level
        }
        else{
            record.currentLevel += 1
            record.currentExp -= exp_to_next_level
        }

        // alert("LEVEL UP!!!" + record.currentLevel + "." + record.currentExpPercent + " lv")
    }
    // 次レベルまでの経験値を計算
    exp_to_next_level = next_level_exp.findLast((item) => item.currentlevel === record.currentLevel)?.nextexp
    if (exp_to_next_level === undefined){
        throw new Error("次レベル経験値に関するエラーです: " + record.currentLevel)
    }
    record.currentExpPercent = record.currentExp / exp_to_next_level
    // alert(record.currentExp)
    // alert(record.currentLevel + record.currentExpPercent + " lv")
    
    return record
}

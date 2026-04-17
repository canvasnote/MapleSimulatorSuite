import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { SimulationSummary } from "@/app/Event_Taco/simulation"

export function ResultSumamry({eachLevel, averageSolErda, averageSolErdaAura, averageSolErdaFragment, averageAdvancedEXPTicket, rewardedCount, escapedCount}: SimulationSummary) {
    return (<div  className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-1">
            <Table  className="w-[300px]">
                <TableHeader>
                    <TableRow>
                    <TableHead>平均上級EXP交換券</TableHead>
                    <TableHead>平均ソルエルダ</TableHead>
                    <TableHead>平均ソルエルダの欠片</TableHead>
                    
                    <TableHead>報酬受領回数</TableHead>
                    <TableHead>逃走回数</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="text-right">{Intl.NumberFormat('ja-JP', {style: "decimal", maximumFractionDigits: 2}).format(averageAdvancedEXPTicket)}</TableCell>
                    <TableCell className="text-right">{Intl.NumberFormat('ja-JP', {style: "decimal", maximumFractionDigits: 2}).format(averageSolErda)}</TableCell>
                    <TableCell className="text-right">{Intl.NumberFormat('ja-JP', {style: "decimal", maximumFractionDigits: 2}).format(averageSolErdaFragment)}</TableCell>

                    <TableCell className="text-right">{rewardedCount}</TableCell>
                    <TableCell className="text-right">{escapedCount}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-1">
            <Table className="w-[300px]">
                <TableHeader>
                    <TableRow>
                    <TableHead>到達レベル(0は逃走)</TableHead>
                    <TableHead>回数</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                    eachLevel.map((level) => { return (
                        <TableRow>
                            <TableCell className="text-right">{level.level}</TableCell>
                            <TableCell className="text-right">{level.achivedCount}</TableCell>
                        </TableRow>)}
                    )}
                </TableBody>
            </Table>
        </div>
    </div>)
}
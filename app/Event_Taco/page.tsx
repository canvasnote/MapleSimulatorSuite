"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from "react"

import { Separator } from "@/components/ui/separator"
import UiSettings from "./ui_settings"
import { settings } from "node:cluster"
import Simulation from "./simulation"

export type FormState = {
    targerLevel: string,
    simulationExec: string
}

export default function Page() {
    const [form, setForm] = useState<FormState>({
        targerLevel: "7",
        simulationExec: "1000"
    })

    return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <p>黄金タコシミュレーター</p>
          </div>
        </header>
        <UiSettings form={form} setForm={setForm} />
        <Simulation form={form} setForm={setForm} />
      </SidebarInset>
    </SidebarProvider>

    
)}
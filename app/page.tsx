import { AppSidebar } from "@/components/app-sidebar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Leveling from "@/app/Thumbnail/Leveling.jpg"
import Taco from "@/app/Thumbnail/Taco.jpg"

type Contents = {
    category: string,
    contents: Array<ContentDescription>,
}[]

type ContentDescription = {
  img: string,
  badge: string,
  title: string,
  description: string,
  link: string,
}

const contents: Contents = [
  // {
  //   category: "キャラクター",
  //   contents: [
  //     {
  //       img: Leveling.src,
  //       badge: "デイリー＆ウィークリー",
  //       title: "レベリング",
  //       description: "デイリー・ウィークリーでのレベリング結果をシミュレーションします。",
  //       link: "/Leveling"
  //     },
  //   ]
  // },
  {
    category: "イベント",
    contents: [
      {
        img: Taco.src,
        badge: "オクトフェスタ",
        title: "黄金タコシミュレーター",
        description: "カルシオンオクトフェスタの黄金タコ育成の結果をシミュレーションします。",
        link: "/Event_Taco"
      },
    ]
  },
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <p>Maple Simulator Suite</p>
            </div>
          </header>
          <ContentList contents={contents}/>
      </SidebarInset>
  </SidebarProvider>
  )
}

function ContentList({contents}: {contents: Contents}){
  return(
    <>
      {contents.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle>
              {category.category}
            </CardTitle>
          </CardHeader>
          <div className="grid gap-4">
            {category.contents.map((item) => (
              <Content content={item} key={item.title}></Content>
            ))}
          </div>
        </Card>
      ))}
    </>
  )
}

function Content({content}: {content: ContentDescription}) {
  return(
    <a href={content.link}>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={content.img}
          alt={content.title}
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">{content.badge}</Badge>
          </CardAction>
          <CardTitle>
            {content.title}
          </CardTitle>
          <CardDescription>
            {content.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}
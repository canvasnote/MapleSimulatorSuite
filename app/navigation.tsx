import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export default function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/Leveling">レベリング</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/Event_Taco">黄金タコ</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
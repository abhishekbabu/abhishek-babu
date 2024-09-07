"use client"

import { geistSans} from "../app/fonts";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function NavigationBar() {
    return (
        <NavigationMenu className={`${geistSans.variable} font-sans flex m-auto`}>
            <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Vinyls</NavigationMenuLink>
            </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}
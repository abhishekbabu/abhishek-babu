"use client";

import { geistSans } from "../app/fonts";

import { ReactElement } from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiHomeLine } from "react-icons/ri";
import { TbVinyl } from "react-icons/tb";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function NavigationBar(): ReactElement {
  return (
    <NavigationMenu
      className={`${geistSans.variable} font-sans md:flex m-auto pt-12`}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <RiHomeLine />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <TbVinyl />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LiaLaptopCodeSolid />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

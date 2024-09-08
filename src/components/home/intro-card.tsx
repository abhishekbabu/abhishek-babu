"use client";

import Image from "next/image";
import { ReactElement } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function IntroCard(): ReactElement {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-2 sm:gap-4 items-center flex-row">
            <Image
              className="rounded-full border-solid"
              src="/avatars/me.jpg"
              alt="Next.js logo"
              width={60}
              height={60}
              sizes="100vw"
              priority
            />
            <div className="flex sm:flex-wrap gap-1 sm:gap-2 text-xl sm:text-4xl ">
              <p className="font-light">I&apos;m</p>
              <p className="flex font-bold underline decoration-red-400">
                Abhishek Babu
              </p>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="font-mono pt-4 text-sm sm:text-base">
          I like to code.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

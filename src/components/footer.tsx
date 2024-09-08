"use client";

import { geistSans } from "../app/fonts";

import { ReactElement } from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailSendFill,
  RiTwitterXFill,
} from "react-icons/ri";

export function Footer(): ReactElement {
  return (
    <footer
      className={`${geistSans.variable} font-sans flex gap-6 flex-wrap items-center justify-center sticky top-[90vh]`}
    >
      <a
        href="https://x.com/abhishekbabu04"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXFill />
      </a>
      <a
        href="https://www.linkedin.com/in/abhishek-babu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinFill />
      </a>
      <a
        href="https://github.com/abhishekbabu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubFill />
      </a>
      <a
        href="mailto:abbabu0411@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiMailSendFill />
      </a>
    </footer>
  );
}

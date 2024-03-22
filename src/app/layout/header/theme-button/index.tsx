"use client";

import { useRef, useState } from "react";

import { useTheme } from "next-themes";

import Icon from "@/app/shared/icon";
import Button from "@/app/shared/button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";

const ThemeButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useOutsideClick({
    ref: buttonRef,
    action: () => setOpenMenu(false),
  });

  return (
    <div ref={buttonRef}>
      <Button className="md:pt-1" onClick={() => setOpenMenu((prev) => !prev)}>
        <Icon
          name="light_mode"
          className="w-auto dark:w-0 rotate-0 scale-100 transition-all duration-1000 dark:-rotate-90 dark:scale-0"
        />
        <Icon
          name="dark_mode"
          className="w-0 dark:w-auto rotate-90 scale-0 transition-all duration-1000 dark:rotate-0 dark:scale-100"
        />
        {openMenu && (
          <ul className="min-w-max p-4 text-center rounded-lg border-2 border-red-500 bg-bg-secondary absolute top-14 right-14 md:right-2 flex-col space-y-3 overflow-hidden">
            <li
              data-current={theme === "light"}
              className="pb-1 border-b-2 border-red-500 border-opacity-30 data-[current=true]:border-opacity-100 hover:border-opacity-100"
              onClick={() => setTheme("light")}
            >
              Light
            </li>
            <li
              data-current={theme === "dark"}
              className="pb-1 border-b-2 border-red-500 border-opacity-30 data-[current=true]:border-opacity-100 hover:border-opacity-100"
              onClick={() => setTheme("dark")}
            >
              Dark
            </li>
            <li
              data-current={theme === "system"}
              className="pb-1 border-b-2 border-red-500 border-opacity-30 data-[current=true]:border-opacity-100 hover:border-opacity-100"
              onClick={() => setTheme("system")}
            >
              System
            </li>
          </ul>
        )}
      </Button>
    </div>
  );
};

export default ThemeButton;

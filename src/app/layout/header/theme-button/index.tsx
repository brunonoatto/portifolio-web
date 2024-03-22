"use client";

import { useTheme } from "next-themes";

import Icon from "@/app/shared/icon";
import MenuContent from "@/app/shared/menu-content";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <MenuContent
      items={[
        {
          content: "Light",
          isCurrent: theme === "light",
          onClick: () => setTheme("light"),
        },
        {
          content: "Dark",
          isCurrent: theme === "dark",
          onClick: () => setTheme("dark"),
        },
        {
          content: "System",
          isCurrent: theme === "system",
          onClick: () => setTheme("system"),
        },
      ]}
    >
      <Icon
        name="light_mode"
        className="w-auto dark:w-0 rotate-0 scale-100 transition-all duration-1000 dark:-rotate-90 dark:scale-0"
      />
      <Icon
        name="dark_mode"
        className="w-0 dark:w-auto rotate-90 scale-0 transition-all duration-1000 dark:rotate-0 dark:scale-100"
      />
    </MenuContent>
  );
}

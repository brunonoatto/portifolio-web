"use client";

import { usePathname } from "next/navigation";

import { menuList } from "../const";

export default function MenuDesktop() {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-block space-x-5">
      {menuList.map((menu) => {
        if (menu.key === "curriculum") {
          return menu;
        }

        return {
          ...menu,
          props: {
            ...menu.props,
            isCurrent: menu.props.href === pathname,
            withBorder: true,
          },
        };
      })}
    </div>
  );
}

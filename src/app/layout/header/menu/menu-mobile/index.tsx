"use client";

import { usePathname } from "next/navigation";

import MenuContent, { TMenuItem } from "@/app/shared/menu-content";
import Icon from "@/app/shared/icon";
import { menuList } from "../const";

export default function MenuMobile() {
  const pathname = usePathname();

  return (
    <MenuContent
      className="inline md:hidden"
      menuClassName="right-3"
      items={menuList.map(
        (menu) =>
          ({
            content: menu,
            isCurrent: menu.props.href === pathname,
          } as TMenuItem)
      )}
    >
      <Icon name="menu" />
    </MenuContent>
  );
}

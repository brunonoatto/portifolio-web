"use client";

import { useRef } from "react";

import IconButton from "@/app/shared/icon-button";
import useOutsideClick from "@/app/shared/helpers/useOutsideClick";
import MenuList from "../menu-list";

export default function MenuMobile() {
  const menuListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    menuListRef.current?.classList.toggle("hidden");
    menuListRef.current?.classList.toggle("flex");
  };

  useOutsideClick({ ref: containerRef, action: handleMenuClick });

  return (
    <div ref={containerRef}>
      <IconButton icon="menu" className="md:hidden" onClick={handleMenuClick} />
      <div
        ref={menuListRef}
        className="hidden p-4 text-center rounded-lg bg-neutral-900 absolute top-14 right-4 flex-col md:space-x-5 space-y-3"
      >
        <MenuList onMenuClick={handleMenuClick} />
      </div>
    </div>
  );
}

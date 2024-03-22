"use client";

import { useRef, useState } from "react";

import IconButton from "@/app/shared/icon-button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";
import MenuList from "../menu-list";

export default function MenuMobile() {
  const menuListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
    menuListRef.current?.classList.toggle("hidden");
    menuListRef.current?.classList.toggle("flex");
  };

  useOutsideClick({
    ref: containerRef,
    action: handleMenuClick,
    active: isOpen,
  });

  return (
    <div ref={containerRef}>
      <IconButton icon="menu" className="md:hidden" onClick={handleMenuClick} />
      <div
        ref={menuListRef}
        className="hidden p-4 text-center rounded-lg border-2 border-red-500 bg-bg-secondary absolute top-14 right-4 flex-col md:space-x-5 space-y-3"
      >
        <MenuList onMenuClick={handleMenuClick} />
      </div>
    </div>
  );
}

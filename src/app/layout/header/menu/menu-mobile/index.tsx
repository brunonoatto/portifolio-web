"use client";

import { useRef } from "react";
import IconButton from "@/app/shared/icon-button";
import MenuList from "../menu-list";

export default function MenuMobile() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    ref.current?.classList.toggle("hidden");
    ref.current?.classList.toggle("flex");
  };

  return (
    <>
      <IconButton icon="menu" className="md:hidden" onClick={handleMenuClick} />
      <div
        ref={ref}
        className="hidden absolute top-14 right-4 flex-col md:space-x-5 space-y-3"
      >
        <MenuList onMenuClick={handleMenuClick} />
      </div>
    </>
  );
}

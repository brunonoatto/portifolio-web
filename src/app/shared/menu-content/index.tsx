"use client";

import { useRef, useState } from "react";

import Button from "@/app/shared/button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";

export type TMenuItem = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  content: React.ReactNode | JSX.Element;
  "data-current"?: boolean;
};

type TMenuContent = {
  children: React.ReactNode;
  items: TMenuItem[];
};

export default function MenuContent({ children, items }: TMenuContent) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useOutsideClick({
    ref: containerRef,
    action: () => setIsOpenMenu(false),
    active: isOpenMenu,
  });

  return (
    <div ref={containerRef}>
      <Button
        className="md:pt-1"
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        {children}
        <ul
          data-open={isOpenMenu}
          className="hidden data-[open=true]:inline min-w-max p-4 text-center rounded-lg border-2 border-red-500 bg-bg-secondary absolute top-14 right-14 md:right-2 flex-col space-y-3 overflow-hidden"
        >
          {(items as TMenuItem[])?.map(({ content, ...liProps }, index) => (
            <li
              key={index}
              {...liProps}
              className="pb-1 border-b-2 border-red-500 border-opacity-30 data-[current=true]:border-opacity-100 hover:border-opacity-100"
            >
              {content}
            </li>
          ))}
        </ul>
      </Button>
    </div>
  );
}

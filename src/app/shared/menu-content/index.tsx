"use client";

import { useRef, useState } from "react";

import { tv, type VariantProps } from "tailwind-variants";

import Button from "@/app/shared/button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";

const menuContentVariants = tv({
  base: "min-w-max p-4 text-center rounded-lg border-2 border-red-500 bg-bg-secondary absolute top-14 right-14 md:right-2 flex-col space-y-3 overflow-hidden",
  variants: {
    isOpen: {
      true: "inline",
      false: "hidden",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

const menuItemVariants = tv({
  base: "pb-1 border-b-2 border-red-500 hover:border-opacity-100",
  variants: {
    isCurrent: {
      true: "border-opacity-100",
      false: "border-opacity-30",
    },
  },
  defaultVariants: {
    isCurrent: false,
  },
});

export type TMenuItem = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> &
  VariantProps<typeof menuItemVariants> & {
    content: React.ReactNode | JSX.Element;
  };

type TMenuContent = {
  className?: string;
  menuClassName?: string;
  children: React.ReactNode;
  items: TMenuItem[];
};

export default function MenuContent({
  className = "",
  menuClassName = "",
  children,
  items,
}: TMenuContent) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOutsideClick({
    ref: containerRef,
    action: () => setIsOpen(false),
    active: isOpen,
  });

  return (
    <div ref={containerRef} className={className}>
      <Button className="md:pt-1" onClick={() => setIsOpen((prev) => !prev)}>
        {children}
        <ul
          className={menuContentVariants({ isOpen, className: menuClassName })}
        >
          {items.map(({ content, isCurrent = false, ...menuProps }, index) => {
            return (
              <li
                {...menuProps}
                key={index}
                className={menuItemVariants({ isCurrent })}
              >
                {content}
              </li>
            );
          })}
        </ul>
      </Button>
    </div>
  );
}

"use client";

import { useEffect, RefObject } from "react";

type TUseOutsideClickProps = {
  ref: RefObject<HTMLElement>;
  action: () => void;
  active?: boolean;
};
export default function useOutsideClick({
  ref,
  action,
  active = true,
}: TUseOutsideClickProps) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        active &&
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        action();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [action, ref, active]);
}

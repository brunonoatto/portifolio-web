"use client";

import { useEffect, RefObject } from "react";

type TUseOutsideClickProps = {
  ref: RefObject<HTMLDivElement>;
  action: () => void;
};
export default function useOutsideClick({
  ref,
  action,
}: TUseOutsideClickProps) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
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
  }, [action, ref]);
}

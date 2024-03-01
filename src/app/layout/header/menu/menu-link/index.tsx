"use client";

import Link, { type InternalLinkProps } from "next/link";
import { usePathname } from "next/navigation";

type TMenuLinkProps = InternalLinkProps & { children: React.ReactNode };

export default function MenuLink({ children, ...props }: TMenuLinkProps) {
  const pathname = usePathname();

  const selectedClass =
    pathname == props.href ? "border-opacity-80" : "border-opacity-30";

  return (
    <Link
      {...props}
      className={`pb-1 border-b-2 border-red-500 ${selectedClass} hover:border-opacity-100`}
    >
      {children}
    </Link>
  );
}

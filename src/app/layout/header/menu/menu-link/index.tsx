"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type TMenuLinkProps = LinkProps & { children: React.ReactNode };

export default function MenuLink({ children, ...props }: TMenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-current={pathname == props.href}
      className={`pb-1 border-b-2 border-red-500 border-opacity-30 data-[current=true]:border-opacity-100 hover:border-opacity-100`}
    >
      {children}
    </Link>
  );
}

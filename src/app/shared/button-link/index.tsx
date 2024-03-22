import { ComponentProps } from "react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

type TMenuLinkProps = ComponentProps<typeof Link>;

export default function ButtonLink({
  className,
  ...otherProps
}: TMenuLinkProps) {
  return (
    <Link
      {...otherProps}
      className={twMerge(
        "inline-flex space-x-2 px-2 py-1 border-2 border-red-500 border-opacity-50 hover:border-opacity-80 rounded-md align-middle",
        className
      )}
    />
  );
}

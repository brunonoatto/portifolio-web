import Link, { type LinkProps } from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const menuVariants = tv({
  base: "pb-1",
  variants: {
    withBorder: {
      true: "border-b-2 border-red-500 border-opacity-30 hover:border-opacity-100",
    },
    isCurrent: {
      true: "border-opacity-100",
    },
  },
  defaultVariants: {
    withBorder: false,
    isCurrent: false,
  },
});

type TMenuLinkProps = LinkProps &
  VariantProps<typeof menuVariants> & {
    children: React.ReactNode;
  };

export default function MenuLink({
  children,
  isCurrent,
  withBorder,
  ...props
}: TMenuLinkProps) {
  return (
    <Link {...props} className={menuVariants({ isCurrent, withBorder })}>
      {children}
    </Link>
  );
}

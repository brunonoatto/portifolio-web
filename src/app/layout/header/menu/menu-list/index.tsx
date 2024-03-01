import Link from "next/link";

import Icon from "@/app/shared/icon";
import MenuLink from "../menu-link";

type TMenuListProps = { onMenuClick?: () => void };

export default function MenuList({ onMenuClick }: TMenuListProps) {
  return (
    <>
      <MenuLink href="/" onClick={onMenuClick}>
        Home
      </MenuLink>
      <MenuLink href="/career" onClick={onMenuClick}>
        Carreira
      </MenuLink>
      <MenuLink href="/skills" onClick={onMenuClick}>
        Habilidades
      </MenuLink>
      <MenuLink href="/contacts" onClick={onMenuClick}>
        Contatos
      </MenuLink>
      <Link
        className="inline-flex space-x-2 px-2 py-1 border-2 border-red-500 border-opacity-50 hover:border-opacity-80 rounded-md align-middle"
        href="https://docs.google.com/document/d/1uBzcTcJ3uuiF5Uq4e0O5MF5qq_P6WUzFom3phFGZjzE/edit?usp=drive_link"
        target="_blank"
      >
        <Icon name="visibility" />
        <span className="m-auto">Currículo</span>
      </Link>
    </>
  );
}

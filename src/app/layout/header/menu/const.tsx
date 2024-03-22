import Link from "next/link";

import Icon from "@/app/shared/icon";
import MenuLink from "./menu-link";

export const menuList = [
  <MenuLink key="/" href="/">
    Home
  </MenuLink>,
  <MenuLink key="career" href="/career">
    Carreira
  </MenuLink>,
  <MenuLink key="skills" href="/skills">
    Habilidades
  </MenuLink>,
  <MenuLink key="contacts" href="/contacts">
    Contatos
  </MenuLink>,
  <Link
    key="curriculum"
    className="inline-flex space-x-2 px-2 py-1 border-2 border-red-500 border-opacity-50 hover:border-opacity-80 rounded-md align-middle"
    href="https://docs.google.com/document/d/1uBzcTcJ3uuiF5Uq4e0O5MF5qq_P6WUzFom3phFGZjzE/edit?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon name="visibility" />
    <span className="m-auto">Currículo</span>
  </Link>,
];

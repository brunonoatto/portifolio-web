import MenuMobile from "./menu-mobile";
import MenuDesktop from "./menu-desktop";

export default function Menu() {
  return (
    <nav>
      <MenuMobile />
      <MenuDesktop />
    </nav>
  );
}

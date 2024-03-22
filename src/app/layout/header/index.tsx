import Menu from "./menu";
import ThemeButton from "./theme-button";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between p-4 rounded-lg shadow-md shadow-red-500">
      <div>
        <div className="text-xl font-bold">Portifólio</div>
        <div>Bruno Noatto Iserhardt</div>
      </div>

      <div className="flex gap-4 flex-row-reverse md:flex-row">
        <Menu />
        <ThemeButton />
      </div>
    </header>
  );
}

import Menu from "./menu";

export default function Header() {
  return (
    <header className="border border-white sticky top-0 flex items-center justify-between p-4">
      <div className="text-2xl font-bold">Portifólio</div>
      <Menu />
    </header>
  );
}

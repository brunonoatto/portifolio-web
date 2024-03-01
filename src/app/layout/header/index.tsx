import Menu from "./menu";

export default function Header() {
  return (
    <header className=" sticky top-0 flex items-center justify-between p-4 rounded-lg shadow-md shadow-red-500">
      <div className="text-2xl font-bold">Portifólio</div>
      <Menu />
    </header>
  );
}

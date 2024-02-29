import Link from "next/link";

type TMenuListProps = { onMenuClick?: () => void };

export default function MenuList({ onMenuClick }: TMenuListProps) {
  return (
    // <div className="hidden md:inline-block md:space-x-5">
    <>
      <Link href="/" onClick={onMenuClick}>
        Home
      </Link>
      <Link href="/career" onClick={onMenuClick}>
        Carreira
      </Link>
      <Link href="/skills" onClick={onMenuClick}>
        Habilidades
      </Link>
      <Link href="/contacts" onClick={onMenuClick}>
        Contatos
      </Link>
      <Link href="/" onClick={onMenuClick}>
        Currículo
      </Link>
    </>
    // </div>
  );
}

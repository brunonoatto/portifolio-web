import Image from "next/image";
import Link from "next/link";

type TSkillItemProps = {
  src: string;
  alt: string;
  href: string;
};

export default function ContactItem({ src, alt, href }: TSkillItemProps) {
  return (
    <Link
      className="flex flex-col gap-8 h-40 items-center"
      href={href}
      target="_blank"
    >
      <Image src={src} width={100} height={100} alt={alt} />
    </Link>
  );
}

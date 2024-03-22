import InfoContainer from "@/app/shared/info-container";
import Image from "next/image";
import Link from "next/link";

type TSkillItemProps = {
  src: string;
  alt: string;
  href: string;
  title?: string;
};

export default function ContactItem({
  src,
  alt,
  href,
  title,
}: TSkillItemProps) {
  return (
    <InfoContainer>
      <Link
        className="inline-flex flex-col gap-2 items-center justify-between py-4"
        href={href}
        target="_blank"
        rel="noopener noreferre"
      >
        <Image src={src} width={100} height={100} alt={alt} />
        {title || href}
      </Link>
    </InfoContainer>
  );
}

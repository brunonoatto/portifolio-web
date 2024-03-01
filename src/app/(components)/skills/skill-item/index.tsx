import Image from "next/image";

type TSkillItemProps = {
  src: string;
  alt: string;
};

export default function SkillItem({ src, alt }: TSkillItemProps) {
  return (
    <div className="flex flex-col justify-between h-[130px]">
      <Image className="m-auto" src={src} width={100} height={100} alt={alt} />
      {alt}
    </div>
  );
}

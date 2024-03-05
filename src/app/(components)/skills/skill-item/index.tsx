import Image from "next/image";

import SkillContainer from "../skill-container";

type TSkillItemProps = {
  src: string;
  alt: string;
};

export default function SkillItem({ src, alt }: TSkillItemProps) {
  return (
    <SkillContainer>
      <Image className="m-auto" src={src} width={100} height={100} alt={alt} />
      {alt}
    </SkillContainer>
  );
}

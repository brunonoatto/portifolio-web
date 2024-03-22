import Image from "next/image";

import InfoContainer from "@/app/shared/info-container";

type TSkillItemProps = {
  src?: string;
  alt: string;
};

export default function SkillItem({ src, alt }: TSkillItemProps) {
  return (
    <InfoContainer className="py-4 px-2">
      {src && (
        <Image
          className="m-auto"
          src={src}
          width={100}
          height={100}
          alt={alt}
        />
      )}
      {alt}
    </InfoContainer>
  );
}

import Image from "next/image";
import SkillItem from "./skill-item";

export default function Skills() {
  return (
    <>
      <div className="text-3xl text-center">Habilidades profissionais:</div>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
        <SkillItem src="/logos/html5.svg" alt="HTML5" />
        <SkillItem src="/logos/css3.svg" alt="CSS3" />
        <SkillItem src="/logos/react.svg" alt="React" />
        <div className="flex flex-col justify-between">
          <div className="bg-white w-[110px] rounded-sm m-auto">
            <Image
              className="m-auto"
              src="/logos/nextjs.svg"
              width={100}
              height={100}
              alt="NextJs"
            />
          </div>
          NextJs
        </div>
        <SkillItem src="/logos/js.svg" alt="Javascript" />
        <SkillItem src="/logos/ts.svg" alt="Typescript" />
        <SkillItem src="/logos/jest.svg" alt="Jest" />
        <SkillItem src="/logos/playwright.svg" alt="Playwright" />
        <SkillItem src="/logos/redux.svg" alt="Redux" />
        <SkillItem src="/logos/zustand.png" alt="Zustand" />
        <SkillItem src="/logos/react-router.svg" alt="React Router" />
        <SkillItem src="/logos/react-query.svg" alt="React Query" />
        <SkillItem src="/logos/storybook.svg" alt="Storybook" />
        <SkillItem src="/logos/tailwind.svg" alt="Tailwind" />
        <SkillItem src="/logos/git.svg" alt="Git" />
        <SkillItem src="/logos/github.svg" alt="GitHub" />
      </div>
    </>
  );
}

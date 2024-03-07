import SkillItem from "../skill-item";

export default function SoftSkills() {
  return (
    <>
      <div className="text-3xl text-center">Habilidades pessoais:</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
        <SkillItem alt="Trabalho em equipe" />
        <SkillItem alt="Colaborativo" />
        <SkillItem alt="Disseminação de conhecimento " />
        <SkillItem alt="Facilidade de comunicação " />
        <SkillItem alt="Censo de urgência" />
        <SkillItem alt="Resolução de problemas complexos " />
        <SkillItem alt="Ética" />
        <SkillItem alt="Foco no usuário e no produto" />
        <SkillItem alt="Proatividade" />
      </div>
    </>
  );
}

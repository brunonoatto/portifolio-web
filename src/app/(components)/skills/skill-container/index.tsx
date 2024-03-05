type TSkillContainerProps = {
  children: React.ReactNodeNode;
};

export default function SkillContainer({ children }: TSkillContainerProps) {
  return (
    <div className="mx-auto transition duration-500 py-4 flex flex-col justify-between gap-2 rounded-lg bg-zinc-800 ring-2 ring-zinc-600 hover:ring-red-500 w-5/6">
      {children}
    </div>
  );
}

type TInfoContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function InfoContainer({
  className = "",
  children,
}: TInfoContainerProps) {
  return (
    <div
      className={`${className} w-full mx-auto flex flex-col justify-between gap-2 rounded-lg bg-bg-secondary ring-4 ring-red-400 hover:ring-red-500 transition ease-in-out hover:-translate-y-1 hover:scale-110`}
    >
      {children}
    </div>
  );
}

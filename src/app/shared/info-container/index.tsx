type TInfoContainerProps = {
  children: React.ReactNodeNode;
  className?: string;
};

export default function InfoContainer({
  className = "",
  children,
}: TInfoContainerProps) {
  return (
    <div
      className={`${className} mx-auto transition duration-500 flex flex-col justify-between gap-2 rounded-lg bg-zinc-800 ring-2 ring-zinc-600 hover:ring-red-500 w-5/6`}
    >
      {children}
    </div>
  );
}

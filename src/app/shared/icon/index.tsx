type TIcon = "menu" | "";

export type TIconProps = { name: TIcon };

export default function Icon({ name }: TIconProps) {
  return <span className="material-symbols-outlined">{name}</span>;
}

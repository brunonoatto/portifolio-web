type TIcon = "menu" | "visibility" | "light_mode" | "dark_mode";

export type TIconProps = React.HTMLAttributes<HTMLSpanElement> & {
  name: TIcon;
};

export default function Icon({ name, className, ...otherProps }: TIconProps) {
  return (
    <div className={`material-symbols-outlined ${className}`} {...otherProps}>
      {name}
    </div>
  );
}

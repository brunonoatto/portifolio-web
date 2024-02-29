import Icon, { type TIconProps } from "../icon";

type TIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: TIconProps["name"];
};

export default function IconButton({ icon, ...otherProps }: TIconButtonProps) {
  return (
    <button type="button" {...otherProps}>
      <Icon name={icon} />
    </button>
  );
}

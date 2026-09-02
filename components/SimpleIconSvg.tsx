import type { SimpleIcon } from "simple-icons";

type SimpleIconSvgProps = {
  className?: string;
  icon: SimpleIcon;
  size?: number;
};

export default function SimpleIconSvg({
  icon,
  size = 24,
  className = "",
}: SimpleIconSvgProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-[#852e4e] text-white hover:bg-[#6f2641]"
      : "border border-[#852e4e] text-[#852e4e] hover:bg-[#852e4e]/10";
  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
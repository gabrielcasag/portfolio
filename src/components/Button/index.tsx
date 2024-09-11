import "./styles.css";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "accent" | "shine";
  label: string;
}

const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <a
      role="button"
      className={`button ${variant}`}
      aria-label={label}
      {...rest}
    >
      {label}
    </a>
  );
};

export default Button;

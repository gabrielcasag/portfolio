import "./styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "accent" | "shine";
  label: string;
}

const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button ${variant}`}
      aria-label={label}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

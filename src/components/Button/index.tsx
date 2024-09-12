import "./styles.css";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "accent" | "shine" | "default";
  // label: string;
}

const Button = ({ variant = "default", children, ...rest }: ButtonProps) => {
  return (
    <a role="button" className={`button ${variant}`} {...rest}>
      {children}
    </a>
  );
};

export default Button;

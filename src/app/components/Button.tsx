type ButtonProps = {
  label: string;
  handleOnClick: () => void;
  variant: "primary" | "destructive";
};

const Button = ({ label, handleOnClick, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={`text-white w-full rounded p-2 text-sm ${variant === "primary" ? "bg-blue-700" : "bg-red-700"}`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export default Button;

import { cn } from "@/lib/utils";

const Button = ({
  children = "Button",
  className,
  variant = "primary",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}) => {
  const buttonVariant = {
    primary: "bg-white text-[#1c6758] hover:bg-white/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
    outline:
      "border bg-background text-foreground hover:bg-secondary border-border",
  };

  return (
    <button
      className={cn(
        "anim flex items-center rounded-sm border px-6 py-2 font-bold",
        className,
        buttonVariant[variant]
      )}
    >
      {children}
    </button>
  );
};

export default Button;

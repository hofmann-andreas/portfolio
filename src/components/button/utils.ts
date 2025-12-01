export const buttonVariants = ["primary", "secondary", "text"] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export function getButtonVariantClasses(variant: ButtonVariant) {
  const buttonVariants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors",
    secondary:
      "px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all",
    text: "text-foreground hover:text-primary transition-colors",
  };

  return buttonVariants[variant];
}

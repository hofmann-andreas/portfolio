import clsx from "clsx";

export const buttonVariants = ["primary", "secondary", "text"] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

interface ButtonBaseClassnamesProps {
  isFullWidth?: boolean;
  hasMinWidthFromMD?: boolean;
}

export function getButtonBaseClassnames({
  isFullWidth,
  hasMinWidthFromMD,
}: ButtonBaseClassnamesProps) {
  return clsx("items-center justify-center", {
    "w-full": isFullWidth,
    "md:w-min": hasMinWidthFromMD,
  });
}

interface ButtonVariantClassesProps {
  variant: ButtonVariant;
}

export function getButtonVariantClasses({ variant }: ButtonVariantClassesProps) {
  const buttonVariants: Record<ButtonVariant, string> = {
    primary: clsx(
      "text-foreground bg-primary rounded-lg hover:bg-primary/70 transition-colors px-8 py-3"
    ),
    secondary: clsx(
      "px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
    ),
    text: clsx("hover:text-primary transition-colors"),
  };

  return buttonVariants[variant];
}

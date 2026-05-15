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
  return clsx(
    "cursor-pointer items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    {
      "w-full": isFullWidth,
      "md:w-min": hasMinWidthFromMD,
    }
  );
}

interface ButtonVariantClassesProps {
  variant: ButtonVariant;
}

export function getButtonVariantClasses({ variant }: ButtonVariantClassesProps) {
  const buttonVariants: Record<ButtonVariant, string> = {
    primary: clsx(
      "text-primary-foreground bg-primary rounded-lg hover:bg-primary/70 transition-colors px-8 py-3"
    ),
    secondary: clsx(
      "px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
    ),
    text: clsx(
      "relative transition-colors hover:text-primary",
      "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    ),
  };

  return buttonVariants[variant];
}

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
      "bg-primary text-primary-foreground dark:bg-[#2563eb] dark:text-white rounded px-6 py-2.5 text-sm font-medium tracking-wide transition-opacity hover:opacity-85"
    ),
    secondary: clsx(
      "rounded border border-foreground/25 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/60 hover:bg-foreground/5"
    ),
    text: clsx(
      "relative transition-colors hover:text-primary",
      "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    ),
  };

  return buttonVariants[variant];
}

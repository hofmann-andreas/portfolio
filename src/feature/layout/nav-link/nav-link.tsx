import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  isDownload?: boolean;
}

export function NavLink(props: NavLinkProps) {
  const { href, label, isDownload } = props;

  const className = clsx("font-semibold", { "rounded border": isDownload });

  return (
    <Link href={href} className={className} download={isDownload}>
      {label}
    </Link>
  );
}

import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}

export function Card(props: CardProps) {
  const { children, image } = props;

  return (
    <div className="rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {image && (
        <Image
          src={image?.src || ""}
          alt={image?.alt || ""}
          className="w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-110"
          width={1000}
          height={10}
        />
      )}
      <div className="p-5 md:p-8">{children}</div>
    </div>
  );
}

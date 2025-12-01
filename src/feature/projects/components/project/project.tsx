import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/heading";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubLink?: string;
  liveLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function Project(props: ProjectProps) {
  const { id, title, description, stack, githubLink, liveLink, imageSrc, imageAlt } = props;
  return (
    <div id={id}>
      <div>
        <div className={clsx({ "flex justify-between": githubLink })}>
          <Heading type="h3">{title}</Heading>
          {githubLink && <Link href={githubLink}>GitHub</Link>}
        </div>
        <p>{description}</p>
        <div className="flex flex-row">
          {stack.map((stack) => (
            <span key={`${id}-${stack}`}>{stack}</span>
          ))}
        </div>
        {liveLink && <Link href={liveLink}>Go to {title}</Link>}
      </div>
      <div>
        <Image src={imageSrc || ""} alt={imageAlt || ""} width={500} height={300} />
      </div>
    </div>
  );
}

import { Heading } from "@/components/heading";

export interface ExperienceProps {
  role: string;
  location: string;
  period: string;
  description: string;
  stack: string[];
  company: string;
}

export function Experience(props: ExperienceProps) {
  const { role, location, period, description, stack } = props;

  return (
    <div className="flex flex-col">
      <Heading type="h3">{role}</Heading>
      <div>
        <p>{location}</p> - <p>{period}</p>
        <p>{description}</p>
        <div>
          {stack.map((stackItem) => (
            <span key={stackItem}>{stackItem}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const techStack = [
  {
    category: "Frontend",
    hue: 220,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SWR",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    hue: 158,
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL"],
  },
  {
    category: "Tooling",
    hue: 38,
    technologies: ["Git", "ArgoCD", "Vercel", "Playwright", "Jest", "Firebase"],
  },
] as const;

export const NODE_W = 72;
export const NODE_H = 22;
export const NODE_R = 5;
export const HUB_R = 30;

export const hubs = [
  {
    label: "Frontend",
    hue: 220,
    x: 200,
    y: 178,
    nodes: [
      { x: 78, y: 62, label: "Next.js" },
      { x: 178, y: 40, label: "React" },
      { x: 272, y: 50, label: "TypeScript" },
      { x: 320, y: 134, label: "JavaScript" },
      { x: 302, y: 222, label: "Tailwind CSS" },
      { x: 50, y: 158, label: "SWR" },
      { x: 44, y: 262, label: "HTML" },
      { x: 132, y: 304, label: "CSS" },
    ],
  },
  {
    label: "Backend",
    hue: 158,
    x: 510,
    y: 362,
    nodes: [
      { x: 366, y: 430, label: "Node.js" },
      { x: 472, y: 450, label: "Express.js" },
      { x: 582, y: 432, label: "Sequelize" },
      { x: 628, y: 362, label: "MySQL" },
    ],
  },
  {
    label: "Tooling",
    hue: 38,
    x: 680,
    y: 168,
    nodes: [
      { x: 762, y: 66, label: "Git" },
      { x: 772, y: 150, label: "ArgoCD" },
      { x: 772, y: 238, label: "Vercel" },
      { x: 650, y: 36, label: "Playwright" },
      { x: 546, y: 44, label: "Jest" },
      { x: 526, y: 118, label: "Firebase" },
    ],
  },
] as const;

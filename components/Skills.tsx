import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiPython, SiDjango, SiPhp, SiLaravel, SiMongodb,
  SiPostgresql, SiMysql, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiDocker, SiFigma, SiFirebase,
  SiRedux, SiGraphql, SiAmazonwebservices, SiHtml5,
  SiCss3, SiExpress, SiPostman, SiVercel
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const languages = [
  { icon: <SiJavascript size={32} />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript size={32} />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiPython size={32} />, name: "Python", color: "#3776AB" },
  { icon: <SiPhp size={32} />, name: "PHP", color: "#777BB4" },
  { icon: <SiHtml5 size={32} />, name: "HTML5", color: "#E34F26" },
  { icon: <SiCss3 size={32} />, name: "CSS3", color: "#1572B6" },
];

const frameworks = [
  { icon: <SiReact size={32} />, name: "React.js", color: "#61DAFB" },
  { icon: <SiNextdotjs size={32} />, name: "Next.js", color: "#000000" },
  { icon: <SiReact size={32} />, name: "React Native", color: "#61DAFB" },
  { icon: <SiNodedotjs size={32} />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress size={32} />, name: "Express.js", color: "#000000" },
  { icon: <SiDjango size={32} />, name: "Django", color: "#092E20" },
  { icon: <SiLaravel size={32} />, name: "Laravel", color: "#FF2D20" },
  { icon: <SiTailwindcss size={32} />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <SiBootstrap size={32} />, name: "Bootstrap", color: "#7952B3" },
  { icon: <SiRedux size={32} />, name: "Redux", color: "#764ABC" },
];

const tools = [
  { icon: <SiGit size={32} />, name: "Git", color: "#F05032" },
  { icon: <SiGithub size={32} />, name: "GitHub", color: "#181717" },
  { icon: <SiDocker size={32} />, name: "Docker", color: "#2496ED" },
  { icon: <SiFigma size={32} />, name: "Figma", color: "#F24E1E" },
  { icon: <SiFirebase size={32} />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiMongodb size={32} />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql size={32} />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMysql size={32} />, name: "MySQL", color: "#4479A1" },
  { icon: <SiGraphql size={32} />, name: "GraphQL", color: "#E10098" },
  { icon: <SiAmazonwebservices size={32} />, name: "AWS", color: "#FF9900" },
  { icon: <SiPostman size={32} />, name: "Postman", color: "#FF6C37" },
  { icon: <SiVercel size={32} />, name: "Vercel", color: "#000000" },
  { icon: <VscCode size={32} />, name: "VS Code", color: "#007ACC" },
];

function SkillGrid({ items, title }: { items: typeof languages; title: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#6C63FF]" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#1E293B] card-hover cursor-default"
          >
            <div
              className="transition-all group-hover:scale-125 duration-300"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">My Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Technologies & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            The technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <SkillGrid items={languages} title="Programming Languages" />
        <SkillGrid items={frameworks} title="Frameworks & Libraries" />
        <SkillGrid items={tools} title="Tools & Databases" />
      </div>
    </section>
  );
}

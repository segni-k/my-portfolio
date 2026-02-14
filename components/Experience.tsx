import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

const experiences = [
  {
    title: "Full-Stack Developer",
    subtitle: "MERN / React Native / Next.js",
    duration: "2023 - Present",
    company: "Freelance",
    points: [
      "Built TrackBite, a meal tracking app with AI-powered food recognition, Firebase auth, and AWS S3.",
      "Developed a Hotel & Restaurant Management System with Next.js and Laravel featuring reservation, POS, and food ordering.",
      "Created a Movie Streaming App using React Native with smooth mobile UI and performance optimization.",
    ],
  },
  {
    title: "MERN Stack Developer",
    duration: "2021 - 2023",
    subtitle: "React / Node.js / MongoDB",
    company: "Freelance",
    points: [
      "Developed business management systems for small businesses with inventory, POS, and staff management.",
      "Delivered modern, responsive UIs using React and Tailwind CSS with robust Node.js backends.",
    ],
  },
  {
    title: "Web Developer",
    subtitle: "Self-Learning & Growth",
    duration: "2019 - 2021",
    company: "Personal Projects",
    points: [
      "Built websites and small-scale apps using HTML, CSS, JavaScript, and later React.",
      "Focused on fundamentals of responsive design, APIs, and deployment workflows.",
    ],
  },
];

const education = [
  {
    title: "Software Engineering",
    subtitle: "Self-Learning Path",
    duration: "Ongoing",
    institution: "Independent Study",
    points: [
      "Full-stack web and mobile development, databases, cloud computing, and app security.",
      "Applying knowledge in real-world freelance and personal projects.",
    ],
  },
  {
    title: "Continuous Learning",
    subtitle: "Professional Growth",
    duration: "Ongoing",
    institution: "Online Platforms",
    points: [
      "Hands-on with React Native, Next.js, Laravel, Firebase, and AWS.",
      "Exploring security best practices, optimization, and scalable architectures.",
    ],
  },
];

interface TimelineData {
  title: string;
  subtitle: string;
  duration: string;
  points: string[];
  company?: string;
  institution?: string;
}

function TimelineItem({
  item,
  isLast,
}: {
  item: TimelineData;
  isLast: boolean;
}) {
  return (
    <div className="relative pl-8 pb-10">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[9px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#6C63FF] to-transparent" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#6C63FF] border-4 border-white dark:border-[#0F172A] shadow-md shadow-[#6C63FF]/30" />

      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1E293B] shadow-sm hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
            <p className="text-sm text-[#6C63FF]">{item.subtitle}</p>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] self-start sm:self-auto whitespace-nowrap">
            {item.duration}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
          {item.company || item.institution}
        </p>
        <ul className="space-y-2">
          {item.points.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D4AA] flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase">Resume</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4AA] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF]">
                <HiOutlineBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            {experiences.map((exp, i) => (
              <TimelineItem key={i} item={exp} isLast={i === experiences.length - 1} />
            ))}
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center text-[#00D4AA]">
                <HiOutlineAcademicCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            {education.map((edu, i) => (
              <TimelineItem key={i} item={edu} isLast={i === education.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

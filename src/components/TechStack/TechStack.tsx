import { useLanguage } from "../../context/useLanguage";
import { FaAws, FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop, { type LogoItem } from "../LogoLoop/LogoLoop";

const techLogos: LogoItem[] = [
  { node: <FaReact size={40} />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiNextdotjs size={40} />, title: "Next.js", href: "https://nextjs.org", hoverColor: "#000000" },
  { node: <SiTypescript size={40} />, title: "TypeScript", href: "https://www.typescriptlang.org", hoverColor: "#3178c6" },
  { node: <SiJavascript size={40} />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript", hoverColor: "#f7df1e" },
  { node: <SiTailwindcss size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#06b6d4" },
  { node: <FaHtml5 size={40} />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML", hoverColor: "#e34f26" },
  { node: <FaCss3Alt size={40} />, title: "CSS3", href: "https://developer.mozilla.org/docs/Web/CSS", hoverColor: "#1572b6" },
  { node: <FaPython size={40} />, title: "Python", href: "https://www.python.org", hoverColor: "#3776ab" },
  { node: <SiMysql size={40} />, title: "SQL", href: "https://www.mysql.com", hoverColor: "#4479a1" },
  { node: <FaAws size={40} />, title: "AWS", href: "https://aws.amazon.com", hoverColor: "#ff9900" },
];

const TechStack = () => {
  const { t } = useLanguage();
  return (
    <div className="border-y border-gray-200/60 bg-white/40 py-6 backdrop-blur dark:border-gray-800/60 dark:bg-gray-950/40">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel={t("techStack.ariaLabel")}
      />
    </div>
  );
};

export default TechStack;

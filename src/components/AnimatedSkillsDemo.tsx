import { AnimatedList } from "@/components/ui/animated-list";
import { SkillCard } from "./SkillCard";
import { cn } from "@/lib/utils";

let skills = [
  {
    name: "Trabajo en equipo",
    description: "Capacidad para colaborar de manera efectiva con personas de diferentes perfiles, promoviendo un ambiente de respeto y apoyo mutuo.",
    time: "Experiencia acumulada",
    icon: "🤝",
    color: "#001f3f",
  },
  {
    name: "Responsabilidad",
    description: "Compromiso con la puntualidad, el cumplimiento de tareas y la toma de decisiones responsables en proyectos y actividades.",
    time: "Día a día",
    icon: "✔️",
    color: "#001f3f",
  },
  {
    name: "Amabilidad",
    description: "Habilidad para interactuar de forma cordial y empática, generando conexiones positivas en el trabajo en equipo.",
    time: "Siempre presente",
    icon: "😊",
    color: "#001f3f",
  },
  {
    name: "Resolución de problemas",
    description: "Enfoque analítico para identificar desafíos y proponer soluciones creativas y efectivas.",
    time: "En cada reto",
    icon: "🛠️",
    color: "#001f3f",
  },
  {
    name: "Gestión de proyectos",
    description: "Planificación, organización y seguimiento de actividades para alcanzar los objetivos de manera eficiente.",
    time: "Práctica constante",
    icon: "📋",
    color: "#001f3f",
  },
];

export const AnimatedSkillsDemo = ({ className }: { className?: string }) => {
  return (
    <div className={cn( className)}>
      <AnimatedList>
        {skills.map((skill, idx) => (
          <SkillCard {...skill} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

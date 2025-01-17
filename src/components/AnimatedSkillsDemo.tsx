import { AnimatedList } from "@/components/ui/animated-list";
import { SkillCard } from "./SkillCard";
import { cn } from "@/lib/utils";

let skills = [
  {
    name: "Trabajo en equipo",
    description: "Capacidad para colaborar de manera efectiva con personas de diferentes perfiles, promoviendo un ambiente de respeto y apoyo mutuo.",
    time: "Experiencia acumulada",
    icon: "🤝",
    color: "#4CAF50",
  },
  {
    name: "Responsabilidad",
    description: "Compromiso con la puntualidad, el cumplimiento de tareas y la toma de decisiones responsables en proyectos y actividades.",
    time: "Día a día",
    icon: "✔️",
    color: "#FF9800",
  },
  {
    name: "Amabilidad",
    description: "Habilidad para interactuar de forma cordial y empática, generando conexiones positivas en el trabajo en equipo.",
    time: "Siempre presente",
    icon: "😊",
    color: "#2196F3",
  },
  {
    name: "Resolución de problemas",
    description: "Enfoque analítico para identificar desafíos y proponer soluciones creativas y efectivas.",
    time: "En cada reto",
    icon: "🛠️",
    color: "#673AB7",
  },
  {
    name: "Gestión de proyectos",
    description: "Planificación, organización y seguimiento de actividades para alcanzar los objetivos de manera eficiente.",
    time: "Práctica constante",
    icon: "📋",
    color: "#E91E63",
  },
];

export const AnimatedSkillsDemo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl", className)}>
      <AnimatedList>
        {skills.map((skill, idx) => (
          <SkillCard {...skill} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

export const MagicCardDemo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row ; ">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-normal text-1xl shadow-2xl p-4 m-4 rounded-lg overflow-hidden ;"
        gradientColor={theme === "dark" ? "#262626" : "#3734eb"}
      >
        <span className="text-xl font-bold">SOBRE MI</span>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-normal text-xs shadow-2xl p-4 m-4 rounded-lg overflow-hidden ;"
        gradientColor={theme === "dark" ? "#3734eb" : "#3734eb"}
      >
        <span className="text-base font-roboto">
          Soy un programador principiante y freelance, apasionado por aprender y desarrollar soluciones innovadoras.
          Estudiante del ITCG, como ingeniero en sitemas compoutacionales, apacionado por el desarrollo e incorporacion de nuevas tecnologias
        </span>
      </MagicCard>
    </div>
  );
};

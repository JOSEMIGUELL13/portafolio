import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

export const MagicCardDemo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-normal text-1xl shadow-2xl p-4 m-4 rounded-lg overflow-hidden"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <span className="text-xl font-bold">SOBRE MI</span>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-normal text-xs shadow-2xl p-4 m-4 rounded-lg overflow-hidden"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <span className="text-base">
          Soy un programador principiante y freelance, apasionado por aprender y desarrollar soluciones innovadoras...
        </span>
      </MagicCard>
    </div>
  );
};

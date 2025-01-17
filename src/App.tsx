import './App.css';
import { IconCloudDemo } from './IconCloudDemo';
import TypingAnimation from "@/components/ui/typing-animation"; // Asegúrate de que este componente existe o implementarlo
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";

// Componente que muestra las tarjetas mágicas
export function MagicCardDemo() {
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
          Soy un programador principiante y freelance, apasionado por aprender y
          desarrollar soluciones innovadoras. Me especializo en lenguajes modernos y
          herramientas avanzadas para el desarrollo de software y aplicaciones.
        </span>
      </MagicCard>
    </div>
  );
}



// Componente para la animación de texto
export function TypingAnimationDemo() {
  return <TypingAnimation>Gudiño Galindo Jose Miguel Angel</TypingAnimation>;
}

function App() {
  return (
    <div>
      <header>
        <img
          src="src/foto.jpg"
          alt="Foto de perfil"
        />
        <h1>
          <TypingAnimationDemo />
        </h1>
      </header>
      <section>
        {/* Aquí se agregan las cartas mágicas sobre la sección "Sobre mí" */}
        <MagicCardDemo />
      </section>
      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>Trabajo en equipo</li>
          <li>Responsabilidad</li>
          <li>Amabilidad</li>
          <li>Resolución de problemas</li>
          <li>Gestión de proyectos</li>
        </ul>
      </section>
      <section>
        <h2>Lenguajes y herramientas</h2>
        <IconCloudDemo />
      </section>
      <section>
        <h2>Proyectos Desarrollados</h2>
        <ul>
          <li>Sistema de ingreso y administración de gimnasio.</li>
          <li>ERP Consultora agrícola</li>
          <li>Carrito remoto por movimiento de manos</li>
        </ul>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>Teléfono: 3312521635</p>
        <p>Email: pablojuangg27@gmail.com</p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/jose-miguel-angel-gudi%C3%B1o-galindo-1b25b3329/">
            Gudiño Galindo Miguel
          </a>
        </p>
      </section>
      <footer>
        <p>&copy; 2025 Gudiño Galindo José Miguel Ángel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

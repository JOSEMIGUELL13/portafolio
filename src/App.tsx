import './App.css';
import { useState } from "react";
import { AnimatedSkillsDemo } from '@/components/AnimatedSkillsDemo';
import { MagicCardDemo } from '@/components/MagicCardDemo';
import { TypingAnimationDemo } from '@/components/TypingAnimationDemo';
import { IconCloudDemo } from './IconCloudDemo';
import { InteractiveHoverButtonDemo } from '@/components/buttonCvDemo';
import { InteractiveHoverButtonMas } from '@/components/buttonMas';
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: "gim",
      title: "Sistema de gestión de gimnasio",
      description:
        "Un sistema completo para la gestión de membresías, acceso y control administrativo y contable de gimnasio.",
      img: "/img/gim.jpg",

    },
    {
      id: "erp",
      title: "ERP Agrícola",
      description:
        "Software diseñado para la gestión y planificación de recursos en entornos agrícolas, optimizando la producción y logística.",
      img: "/img/erp2.png",
    },
    {
      id: "car",
      title: "Carrito controlado por gestos",
      description:
        "Un innovador proyecto donde un carrito se controla a través de gestos, utilizando sensores avanzados. Principalemnte combinado con OpenCv libreria de python.",
      img: "/img/car.png",
    },
  ];

  return (
    <div>
      {/* Fondo Interactivo */}
      <InteractiveGridPattern className="opacity-100" />

      {/* Contenido principal */}
      <div className="relative z-10">
        <div className="flex-1 p-6 mt-16">
          <header className="mb-8">
            <img src="/img/foto.JPEG" alt="Foto de perfil" />
            <h1>
              <TypingAnimationDemo />
              <InteractiveHoverButtonDemo />
            </h1>
          </header>

          <section className="mb-8">
            <MagicCardDemo />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue">Habilidades</h2>
            <div className="backdrop-blur-sm bg-background/30 rounded-lg p-4">
              <div className="h-full overflow-y-auto scrollbar-hide">
                <AnimatedSkillsDemo className="p-4" />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue">Lenguajes y herramientas</h2>
            <div className="backdrop-blur-sm bg-background/30 rounded-lg p-4">
              <IconCloudDemo />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue text-center">
              Proyectos Desarrollados
            </h2>
            <ul className="space-y-8 px-4">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="rounded-lg flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 shadow-md border border-gray-300"
                >
                  {/* Imagen grande */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full md:w-1/3 h-auto rounded-lg object-cover"
                  />

                  {/* Información del proyecto */}
                  <div className="flex-1">
                    <h3 className="titleH text-2xl font-bold text-navy mb-2 ">
                      {project.title}
                    </h3>
                    {activeProject === project.id && (
                      <p className="text-gray-700 mb-4">{project.description}</p>
                    )}
                    <div
                      onClick={() =>
                        setActiveProject(activeProject === project.id ? null : project.id)
                      }
                    >
                      <InteractiveHoverButtonMas

                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue">Contacto</h2>
            <div className="space-y-4 px-4 text-lg text-white backdrop-blur-sm bg-background/30 rounded-lg p-4">
              <p className="flex items-center gap-2">
                <Phone className="text-white w-6 h-6" />
                Teléfono:
                <a
                  href="https://wa.me/qr/VFJFSRQOJDZ3P1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold"
                >
                  3312521635
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-white w-6 h-6" />
                Email: <span className="font-bold">pablojuangg27@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin className="text-white w-6 h-6" />
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/jose-miguel-angel-gudi%C3%B1o-galindo-1b25b3329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold"
                >
                  Gudiño Galindo Miguel
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Github className="text-white w-6 h-6" />
                GitHub:
                <a
                  href="https://github.com/JOSEMIGUELL13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold"
                >
                  JOSEMIGUELL13
                </a>
              </p>
            </div>
          </section>

          <footer className="mt-auto py-4 text-white">
            <p>&copy; 2025 Gudiño Galindo José Miguel Ángel. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

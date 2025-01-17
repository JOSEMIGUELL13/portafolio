
import './App.css';
import { IconCloudDemo } from './IconCloudDemo';
import { AnimatedSkillsDemo } from '@/components/AnimatedSkillsDemo';
import { MagicCardDemo } from '@/components/MagicCardDemo';
import { MorphingTextDemo } from '@/components/MorphingTextDemo';
import { TypingAnimationDemo } from '@/components/TypingAnimationDemo';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sección de MorphingTextDemo */}
      <div className="w-full py-16 mb-48">
        <MorphingTextDemo />
      </div>

      {/* Contenido principal con más espacio arriba */}
      <div className="flex-1 p-6 mt-48">
        <header className="mb-8">
          <img src="src/foto.jpg" alt="Foto de perfil" />
          <h1>
            <TypingAnimationDemo />
          </h1>
        </header>

        <section className="mb-8">
          <MagicCardDemo />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Habilidades</h2>
          <div className="relative max-w-[1200px] w-full mx-auto h-[400px] rounded-lg bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-xl">
            <div className="h-full overflow-y-auto scrollbar-hide">
              <AnimatedSkillsDemo className="p-4" />
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Proyectos Desarrollados</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <li className="bg-gray-100 p-6 rounded-2xl shadow-lg text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out text-lg text-center">
              Sistema de ingreso y administración de gimnasio
            </li>
            <li className="bg-gray-100 p-6 rounded-2xl shadow-lg text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out text-lg text-center">
              ERP Consultora agrícola
            </li>
            <li className="bg-gray-100 p-6 rounded-2xl shadow-lg text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out text-lg text-center">
              Carrito remoto por movimiento de manos
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Contacto</h2>
          <div className="space-y-4 px-4 text-lg">
            <p>Teléfono: <span className="font-bold">3312521635</span></p>
            <p>Email: <span className="font-bold">pablojuangg27@gmail.com</span></p>
            <p>
              LinkedIn:   
              <a 
                href="https://www.linkedin.com/in/jose-miguel-angel-gudi%C3%B1o-galindo-1b25b3329/" 
                className="text-blue-600 hover:underline font-bold"
              >

                Gudiño Galindo Miguel
              </a>
            </p>
          </div>
        </section>
        {/* Otros componentes como IconCloudDemo */}
        <footer className="mt-auto py-4">
          <p>&copy; 2025 Gudiño Galindo José Miguel Ángel. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { IconCloudDemo } from './IconCloudDemo'; 


function App() {
  return (
    <div>
      <header>
        <img
          src="src\foto.jpg"
          alt="Foto de perfil"
        />
        <h1>Gudiño Galindo José Miguel Ángel</h1>
        <p>Estudiante de Ingeniería en Sistemas Computacionales, 
          apasionado por la programación y el desarrollo tecnológico.</p>
      </header>
      <section>
        <h2>Sobre mí</h2>
        <p>Soy un programador principiante y freelance, apasionado por aprender 
          y desarrollar soluciones innovadoras. Me especializo en lenguajes modernos 
          y herramientas avanzadas para el desarrollo de software y aplicaciones.</p>
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
        <IconCloudDemo /> {/* Nube interactiva de herramientas */}
      </section>
      <section>
        <h2>Proyectos Desarrollados</h2>
        <li>Sistema de ingreso y administracion de gimnasio.</li>
        <li>ERP Consultora agricola</li>
        <li>Carrito remoto por movimiento de manos</li>

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

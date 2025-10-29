import React from "react";

/**
 * App.jsx
 * Componente React que reproduce visualmente una landing "inspirada" en radaville.studio
 * - Está construido con Tailwind (usa classes utilitarias)
 * - Sustituye imágenes por tus propios assets en /src/assets
 *
 * Comentarios: cada sección tiene un bloque claro donde personalizar textos, links e imágenes.
 */

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-900 text-slate-100 font-inter relative overflow-hidden">
      {/* Simple Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating background shape */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
            animation: 'backgroundFloat 6s ease-in-out infinite'
          }}
        />

        {/* Sparkle effects */}
        <div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"
          style={{ animation: 'sparkle 3s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full"
          style={{ animation: 'sparkle 4s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full"
          style={{ animation: 'sparkle 2.5s ease-in-out infinite', animationDelay: '2s' }}
        />
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Hero />

        <WorkShowcase />

        <AboutSection />

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-3">
          {/* Logo simplificado - reemplazar por SVG/imagen propia */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-500 flex items-center justify-center text-black font-bold">
            R
          </div>
          <span className="font-semibold tracking-wide">Studio</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a className="hover:underline" href="#work">Work</a>
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#contact">Contact</a>
          <button className="ml-4 px-4 py-2 rounded-full bg-white text-black text-sm font-medium shadow-sm">Let's talk</button>
        </nav>

        {/* Mobile menu minimal */}
        <div className="md:hidden">
          <button aria-label="menu" className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center mt-12 mb-20">
      <div>
        <p className="text-sm uppercase text-slate-400 mb-4">Studio creativo • Branding & digital</p>
        <h1 className="text-4xl md:text-6xl leading-tight font-extrabold mb-6">
          {'Diseño digital con'.split('').map((letter, index) => (
            <span key={index} className="hero-title-letter">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-300">
            {'impacto visual'.split('').map((letter, index) => (
              <span key={index} className="hero-title-letter">
                {letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-prose mb-8">
          Creamos experiencias digitales, interfaces y narrativas visuales para marcas que quieren destacar.
          Diseño, motion y desarrollo front-end cohesionados en un solo equipo.
        </p>

        <div className="flex gap-4">
          <a className="px-5 py-3 rounded-full bg-white text-black font-medium shadow hover:scale-105 transition" href="#contact">Trabaja con nosotros</a>
          <a className="px-5 py-3 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800 transition" href="#work">Ver trabajos</a>
        </div>

        {/* Small stats */}
        <div className="flex gap-6 mt-10">
          <Stat value="10+" label="Años" />
          <Stat value="120+" label="Proyectos" />
          <Stat value="15" label="Equipo" />
        </div>
      </div>

      {/* Visual / advanced 3D floating cards */}
      <div className="relative">
        <div className="w-full h-96 flex items-center justify-center" style={{ perspective: 1200 }}>
          {/* Main hero card with advanced 3D animation */}
          <div
            className="hero-card-3d-move card-3d w-80 h-80 p-4 transform-gpu"
            aria-hidden
          >
            {/* capa de fondo con efecto flotante */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img src="/src/assets/brand-system.jpg" alt="Project preview" className="img-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-xs uppercase tracking-wide text-slate-200">Project</div>
                <div className="text-lg font-semibold">Naming & Identity</div>
              </div>
            </div>
          </div>

          {/* Multiple floating decorative elements with 3D rotation */}
          <div className="hero-decorative absolute -right-6 -bottom-6 w-36 h-36 rounded-2xl opacity-60 blur-2xl" style={{ background: 'linear-gradient(135deg,#06b6d4,#7c3aed)' }}></div>
          <div className="hero-decorative absolute -left-8 -top-8 w-24 h-24 rounded-full opacity-40 blur-xl" style={{ background: 'linear-gradient(135deg,#10b981,#06b6d4)' }}></div>
          <div className="hero-decorative absolute right-12 top-12 w-16 h-16 rounded-lg opacity-50 blur-lg" style={{ background: 'linear-gradient(135deg,#8b5cf6,#ec4899)' }}></div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

/* ---------------- Work / Grid ---------------- */
function WorkShowcase() {
  const projects = [
    { id: 1, title: "Brand system", desc: "Identidad y UX", img: "/src/assets/brand-system.jpg" },
    { id: 2, title: "Product UI", desc: "Interfaz & flows", img: "/src/assets/product-ui.jpg" },
    { id: 3, title: "Motion design", desc: "Animación y 3D", img: "/src/assets/motion-design.jpg" },
    { id: 4, title: "Web platform", desc: "Front + Back", img: "/src/assets/web-platform.jpg" }
  ];

  return (
    <section id="work" className="my-24">
      <h2 className="text-2xl font-bold mb-8">Trabajos destacados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <article key={p.id} className="group relative rounded-xl overflow-hidden card-3d hover:scale-105 transform transition">
            <div className="w-full h-56 relative">
              <img src={p.img} alt={p.title} className="img-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-sm">{p.title}</div>
                <div className="text-xs text-slate-200">{p.desc}</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-1">Pequeña descripción del proyecto. Reemplaza por la tuya.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function AboutSection() {
  return (
    <section id="about" className="my-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-4">Sobre el estudio</h3>
        <p className="text-slate-300 mb-6 max-w-prose">
          Equipo multidisciplinario que mezcla estrategia, diseño y front-end.
          Nos enfocamos en productos digitales con identidad y rendimiento.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="p-4 card-3d">
            <div className="text-sm font-semibold">Branding</div>
            <div className="text-xs text-slate-400 mt-1">Naming, sistema visual, guidelines</div>
          </li>
          <li className="p-4 card-3d">
            <div className="text-sm font-semibold">UI/UX</div>
            <div className="text-xs text-slate-400 mt-1">Interfaces accesibles y escalables</div>
          </li>
          <li className="p-4 card-3d">
            <div className="text-sm font-semibold">Motion</div>
            <div className="text-xs text-slate-400 mt-1">Microinteracciones y animaciones</div>
          </li>
          <li className="p-4 card-3d">
            <div className="text-sm font-semibold">Front-end</div>
            <div className="text-xs text-slate-400 mt-1">Componentes y performance</div>
          </li>
        </ul>
      </div>

      <div className="relative">
        <div className="w-full h-72 rounded-2xl overflow-hidden card-3d">
          <img src="/src/assets/about-team.jpg" alt="about" className="img-cover"/>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */
function ContactCTA() {
  return (
    <section id="contact" className="my-24 py-12 rounded-2xl card-3d">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-2xl font-bold">¿Quieres empezar un proyecto?</h4>
          <p className="text-slate-300 mt-2">Cuéntanos tu idea y te responderemos en 48 horas hábiles.</p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:hello@studio.example" className="px-6 py-3 rounded-full bg-white text-black font-medium">Escríbenos</a>
          <a href="#work" className="px-6 py-3 rounded-full border border-slate-600 text-slate-300">Ver portafolio</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="py-10 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded bg-gradient-to-tr from-emerald-400 to-sky-500 flex items-center justify-center font-bold text-black">R</div>
          <div>
            <div className="font-semibold">Studio</div>
            <div className="text-xs text-slate-400">© {new Date().getFullYear()} — Todos los derechos</div>
          </div>
        </div>

        <div className="text-sm text-slate-400 flex gap-6">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

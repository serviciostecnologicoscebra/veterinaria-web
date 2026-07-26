import { useState } from "react";

const links = [
  ["Inicio", "#inicio"],
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Especialidades", "#servicios"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lp-header" id="inicio">
      <div className="container-fluid lp-header__inner">
        <a className="lp-brand" href="#inicio" aria-label="Ir al inicio">
          <span className="lp-brand__paw">🐾</span>
          <span>
            <strong>Love<span>Puppies</span></strong>
            <small>Clínica Veterinaria</small>
          </span>
        </a>

        <nav className={`lp-header__nav ${isOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="lp-button lp-button--primary lp-header__cta" href="#contacto">
          Agenda tu cita
        </a>

        <button
          className="lp-header__menu"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

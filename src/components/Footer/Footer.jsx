const footerGroups = [
  {
    title: "Enlaces",
    items: ["Inicio", "Nosotros", "Servicios", "Especialidades", "Contacto"],
  },
  {
    title: "Servicios",
    items: [
      "Consulta General",
      "Vacunación",
      "Odontología",
      "Cirugías",
      "Hospitalización",
    ],
  },
  {
    title: "Contacto",
    items: [
      "Av. Siempre Viva 123, Pet City",
      "(01) 123 4567",
      "hola@lovepuppies.com",
    ],
  },
  {
    title: "Horario de atención",
    items: [
      "Lun - Vie: 9:00 am - 7:00 pm",
      "Sábados: 9:00 am - 2:00 pm",
      "Domingos: Cerrado",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="lp-footer" id="contacto">
      <div className="container-fluid lp-footer__container">
        <div className="lp-footer__brand-column">
          <a className="lp-brand" href="#inicio">
            <span className="lp-brand__paw">🐾</span>
            <span>
              <strong>
                Love<span>Puppies</span>
              </strong>
              <small>Clínica Veterinaria</small>
            </span>
          </a>
          <Socials />
        </div>

        <div className="lp-footer__desktop-groups">
          {footerGroups.map((group) => (
            <FooterGroup group={group} key={group.title} />
          ))}
        </div>

        <div className="lp-footer__mobile-groups">
          {footerGroups.map((group) => (
            <details key={group.title}>
              <summary>
                {group.title}
                <span>+</span>
              </summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="lp-footer__mobile-socials">
          <Socials />
        </div>
      </div>
      <div className="lp-footer__copyright">
        <span>
          © 2026 LovePuppies Clínica Veterinaria. Todos los derechos reservados.
        </span>
        <span className="lp-footer__paw">🐾</span>
      </div>
    </footer>
  );
}

function FooterGroup({ group }) {
  return (
    <div
      className={`lp-footer__group ${group.title === "Horario de atención" ? "lp-footer__group--outlined" : ""}`}
    >
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Socials() {
  return (
    <div className="lp-socials" aria-label="Redes sociales">
      <a href="#contacto" aria-label="Facebook">
        f
      </a>
      <a href="#contacto" aria-label="Instagram">
        ◎
      </a>
      <a href="#contacto" aria-label="WhatsApp">
        ◉
      </a>
      <a href="#contacto" aria-label="TikTok">
        ♪
      </a>
    </div>
  );
}

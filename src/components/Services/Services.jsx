const services = [
  {
    icon: "🩺",
    title: "Consulta General",
    description: "Revisiones completas para mantener a tu mascota sana.",
    tone: "pink",
  },
  {
    icon: "💉",
    title: "Vacunación",
    description: "Protocolos de vacunación seguros y personalizados.",
    tone: "green",
  },
  {
    icon: "🦷",
    title: "Odontología",
    description: "Cuidado dental para una sonrisa sana y feliz.",
    tone: "pink",
  },
  {
    icon: "✂",
    title: "Cirugías",
    description: "Procedimientos seguros con equipos de última generación.",
    tone: "green",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="container-fluid services-section__container">
        <h2 className="section-title" id="services-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Todo lo que tu mascota necesita, en un solo lugar.</p>

        <div className="services-section__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className={`service-card__icon service-card__icon--${service.tone}`} aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contacto" className={`service-card__link service-card__link--${service.tone}`}>
                Saber más <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

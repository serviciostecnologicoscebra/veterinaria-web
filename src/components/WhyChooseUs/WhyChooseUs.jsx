import veterinariaImage from "./mascotadoctor.png";

const reasons = [
  {
    icon: "♧",
    title: "Profesionales Certificados",
    text: "Equipo veterinario altamente capacitado y en constante actualización.",
    tone: "pink",
  },
  {
    icon: "▣",
    title: "Tecnología Avanzada",
    text: "Contamos con equipos modernos para diagnósticos precisos y tratamientos efectivos.",
    tone: "green",
  },
  {
    icon: "♡",
    title: "Atención con Amor",
    text: "Tratamos a cada mascota como si fuera parte de nuestra familia.",
    tone: "pink",
  },
  {
    icon: "⌂",
    title: "Ambiente Seguro",
    text: "Espacios diseñados para el bienestar y comodidad de tu mascota.",
    tone: "green",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="nosotros" aria-labelledby="why-title">
      <div className="container-fluid why-section__container">
        <div className="why-section__photo-wrap">
          <span className="why-section__heart">♡</span>
          <img src={veterinariaImage} alt="Veterinario atendiendo a un perro" />
        </div>

        <div className="why-section__content">
          <h2 id="why-title">¿Por qué elegirnos?</h2>
          <div className="why-section__grid">
            {reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <span
                  className={`reason-card__icon reason-card__icon--${reason.tone}`}
                >
                  {reason.icon}
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="why-section__accordion">
            {reasons.map((reason) => (
              <details key={reason.title}>
                <summary>
                  <span
                    className={`reason-card__icon reason-card__icon--${reason.tone}`}
                  >
                    {reason.icon}
                  </span>
                  <strong>{reason.title}</strong>
                  <span className="why-section__chevron">›</span>
                </summary>
                <p>{reason.text}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

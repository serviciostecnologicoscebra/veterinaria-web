import mascotas from "./mascotas.png";
export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container-fluid hero-section__container">
        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">
            <span>♡</span> CUIDAMOS A QUIENES AMAS
          </p>
          <h1 id="hero-title">
            Salud y amor
            <br />
            para tu <span>mejor amigo</span>
          </h1>
          <p className="hero-section__description">
            En LovePuppies ofrecemos atención veterinaria profesional con amor,
            tecnología y dedicación para una vida más feliz y saludable.
          </p>
          <div className="hero-section__actions">
            <a className="lp-button lp-button--primary" href="#contacto">
              Agenda tu cita <span aria-hidden="true">▣</span>
            </a>
            <a className="lp-button lp-button--outline" href="#servicios">
              Conoce nuestros servicios
            </a>
          </div>
        </div>

        <div
          className="hero-section__visual"
          aria-label="Perro y gato de la clínica"
        >
          <span className="hero-section__heart">♡</span>
          <span className="hero-section__spark hero-section__spark--one" />
          <span className="hero-section__spark hero-section__spark--two" />

          <img
            className="hero-section__mascotas"
            src={mascotas}
            alt="Perro y Gato"
          />
        </div>
      </div>
    </section>
  );
}

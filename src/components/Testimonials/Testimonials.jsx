import { useState } from "react";
import avatar1 from "./avatar-1.png";
import avatar2 from "./avatar-2.png";
import avatar3 from "./avatar-3.png";

const testimonials = [
  {
    avatar: avatar1,
    quote: "Excelente atención y mucho amor por los animales. Mi perrita Luna siempre sale feliz.",
    name: "María G.",
  },
  {
    avatar: avatar2,
    quote: "Los mejores veterinarios, 100% recomendados.",
    name: "Carlos R.",
  },
  {
    avatar: avatar3,
    quote: "Confianza total, cuidan cada detalle y siempre están disponibles.",
    name: "Ana P.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonios" aria-labelledby="testimonials-title">
      <div className="container-fluid testimonials-section__container">
        <h2 className="section-title" id="testimonials-title">Lo que dicen nuestros clientes</h2>

        <div className="testimonials-section__desktop-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="testimonials-section__mobile-slider">
          <button type="button" aria-label="Testimonio anterior" onClick={() => move(-1)}>‹</button>
          <TestimonialCard testimonial={testimonials[active]} />
          <button type="button" aria-label="Testimonio siguiente" onClick={() => move(1)}>›</button>
        </div>

        <div className="testimonials-section__dots" aria-label="Indicadores de testimonios">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === active ? "is-active" : ""}
              aria-label={`Ver testimonio ${index + 1}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__top">
        <img src={testimonial.avatar} alt={`Foto de ${testimonial.name}`} />
        <p>“{testimonial.quote}”</p>
      </div>
      <div className="testimonial-card__bottom">
        <strong>{testimonial.name}</strong>
        <span aria-label="5 estrellas">★★★★★</span>
      </div>
    </article>
  );
}

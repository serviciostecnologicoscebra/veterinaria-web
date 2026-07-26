import pawImage from "./paw.png";

export default function WelcomeModal({ onClose }) {
  return (
    <aside className="welcome-card" role="dialog" aria-modal="false" aria-labelledby="welcome-title">
      <button className="welcome-card__close" type="button" aria-label="Cerrar bienvenida" onClick={onClose}>
        ×
      </button>
      <span className="welcome-card__icon">
        <img src={pawImage} alt="" />
      </span>
      <h2 id="welcome-title">¡Bienvenido a <span>LovePuppies</span>!</h2>
      <p>Gracias por visitarnos. Estamos aquí para cuidar a tu peludo con todo el amor del mundo.</p>
      <a className="lp-button lp-button--primary" href="#nosotros">Conoce más sobre nosotros</a>
      <button className="welcome-card__dismiss" type="button" onClick={onClose}>Cerrar</button>
    </aside>
  );
}

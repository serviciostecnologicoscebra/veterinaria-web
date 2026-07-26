import { useState } from "react";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import WelcomeModal from "components/WelcomeModal/WelcomeModal";
import Services from "components/Services/Services";
import WhyChooseUs from "components/WhyChooseUs/WhyChooseUs";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";

export default function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <div className="hero-shell">
          <Hero />
          {isWelcomeOpen && (
            <WelcomeModal onClose={() => setIsWelcomeOpen(false)} />
          )}
        </div>
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

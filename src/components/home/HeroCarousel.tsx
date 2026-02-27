import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroTelecom from "@/assets/hero-telecom.jpg";
import heroEngineers from "@/assets/hero-engineers.jpg";

const slides = [
  {
    image: heroConstruction,
    headline: "Building Tomorrow's Landmarks",
    sub: "World-class structural engineering and construction management services for commercial & residential projects.",
  },
  {
    image: heroSolar,
    headline: "Powering a Sustainable Future",
    sub: "Expert solar energy structural design and engineering consultancy for renewable infrastructure.",
  },
  {
    image: heroTelecom,
    headline: "Connecting Communities Worldwide",
    sub: "Specialized telecom tower structural design, detailing and project management consulting.",
  },
  {
    image: heroEngineers,
    headline: "Engineering Excellence, Delivered",
    sub: "A team of experienced professionals committed to precision, innovation and timely project delivery.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-1000 ease-out ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-foreground mb-4 leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-lg text-navy-foreground/80 mb-8 max-w-xl">
                  {slide.sub}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-heading font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all"
                  >
                    Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-navy-foreground/30 text-navy-foreground font-heading font-semibold px-6 py-3 rounded-md hover:border-gold hover:text-gold transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-500 ease-in-out ${
              i === current ? "bg-gold w-8" : "bg-navy-foreground/40 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

import { Link } from "react-router-dom";
import { Building, Radio, Factory, Sun, Landmark } from "lucide-react";

const sectors = [
  { icon: Building, title: "Residential & Commercial", desc: "High-rise, villas, commercial complexes", path: "/industry#residential" },
  { icon: Radio, title: "Power & Communication Towers", desc: "Telecom, transmission & broadcast towers", path: "/industry#towers" },
  { icon: Factory, title: "Industrials", desc: "Factories, warehouses & industrial facilities", path: "/industry#industrials" },
  { icon: Sun, title: "Solar Energy", desc: "Solar structures & renewable energy projects", path: "/industry#solar" },
  { icon: Landmark, title: "Infrastructure", desc: "Bridges, highways & public infrastructure", path: "/industry#infrastructure" },
];

const IndustrySectors = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Industry Sectors</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Sectors We Serve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className="group bg-card rounded-lg p-6 text-center border border-border hover:border-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <s.icon className="h-7 w-7 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-xs">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;

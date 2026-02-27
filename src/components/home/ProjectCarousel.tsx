import { Link } from "react-router-dom";
import design from "@/assets/heroConstruction.jpg";
import heroSolar from "@/assets/solar-plant.jpg";
import tower from "@/assets/tower.jpg";
import layout from "@/assets/layout.jpg";
import res from "@/assets/rescom.jpg";
import ware from "@/assets/warehouse.jpg";
// heroConstruction

const projects = [
  { image: layout, title: "WareHouse", category: "Commercial" },
  // { image: design, title: "3HP Solar Pump Structure", category: "Infrastructure" },
  { image: tower, title: "Avantel", category: "Antennas" },
  { image: ware, title: "GRID 2 CHIP", category: "Industrials" },
  { image: res, title: "Nandha Gokulam School Building", category: "Commercial" },
  { image: heroSolar, title: "3HP Solar Pump Structure", category: "Solar Energy" },
];

// Duplicate for seamless loop
const allProjects = [...projects, ...projects];

const ProjectCarousel = () => {
  return (
    <section className="section-padding bg-navy/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Featured Projects
          </h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-flow hover:[animation-play-state:paused]">
            {allProjects.map((p, i) => (
              <Link
                key={i}
                to="/projects"
                className="shrink-0 w-[300px] group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))/0.6] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-gold text-xs font-heading font-semibold">{p.category}</span>
                    <h3 className="text-navy-foreground font-heading font-semibold mt-1">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

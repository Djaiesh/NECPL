import { Link } from "react-router-dom";
import softwareAutocad from "@/assets/software-autocad.jpg";
import softwareEtabs from "@/assets/software-etabs.jpg";
import softwareStaad from "@/assets/software-staad.jpg";
import softwareSafe from "@/assets/software-safe.jpg";
import softwareTekla from "@/assets/software-tekla.jpg";
import softwareRevit from "@/assets/software-revit.jpg";

const softwareList = [
  { name: "AutoCAD", image: softwareAutocad },
  { name: "ETABS", image: softwareEtabs },
  { name: "STAAD Pro", image: softwareStaad },
  { name: "SAFE", image: softwareSafe },
  { name: "Tekla Structures", image: softwareTekla },
  { name: "Revit Structure", image: softwareRevit },
];

const SoftwareExpertise = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Technology</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Software Expertise
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Industry-leading tools powering precision in every project.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {softwareList.map((s, i) => (
            <Link
              key={i}
              to="/software-expertise"
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-heading font-semibold text-sm text-foreground">{s.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareExpertise;

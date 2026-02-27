import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroSoftware from "@/assets/hero-software.jpg";
import softwareStaad from "@/assets/software-staad.jpg";
import softwareSafe from "@/assets/software-safe.jpg";
import autocad from "@/assets/autocad.jpg";
import etabs from "@/assets/etabs.jpg";
import tekla from "@/assets/tekla.jpg";
import revit from "@/assets/revit.jpg";

const softwareList = [
  { name: "AutoCAD", image: autocad, desc: "We use AutoCAD for preparing precise 2D drafting and detailed engineering drawings during the design and execution stages of projects. It supports architectural layouts, structural detailing, and coordination drawings required for site execution and approvals.", outputs: ["Floor Plans & Layouts", "Structural Drawings", "Section Details", "Foundation Plans"] },
  { name: "ETABS", image: etabs, desc: "ETABS is used for advanced structural analysis and design of multi-storey buildings. We model complete building systems to evaluate load behavior, seismic response, wind effects, and structural performance as per IS codes.", outputs: ["Building Analysis Reports", "Beam & Column Schedules", "Drift Analysis", "Load Combination Results"] },
  { name: "STAAD Pro", image: softwareStaad, desc: "We utilize STAAD.Pro for structural analysis and design of towers, industrial frames, bridges, and special steel structures. It helps in evaluating member forces, stability, and foundation reactions under various load conditions.", outputs: ["Tower Analysis", "Steel Design Reports", "Foundation Reactions", "Member Force Diagrams"] },
  { name: "SAFE", image: softwareSafe, desc: "SAFE is used for designing slabs, raft foundations, and mat foundations. It allows us to check soil interaction, punching shear, reinforcement detailing, and optimize foundation performance.", outputs: ["Slab Design Reports", "Punching Shear Checks", "Raft Foundation Design", "Reinforcement Layouts"] },
  { name: "Tekla Structures", image: tekla, desc: "We use Tekla Structures for 3D structural modeling and detailed fabrication drawings. It ensures accurate steel detailing, clash detection, and fabrication-ready documentation for smooth site execution.", outputs: ["3D Steel Models", "Fabrication Drawings", "Erection Plans", "Clash Detection Reports"] },
  { name: "Revit Structure", image: revit, desc: "Revit Structure supports BIM-based structural modeling and multi-discipline coordination. It enables integration with architectural and MEP models for efficient design collaboration and construction documentation.", outputs: ["BIM Models", "Coordination Drawings", "Quantity Takeoffs", "Construction Documents"] },
];

const benefits = [
  "Accurate structural analysis and design",
  "3D BIM coordination reducing clashes",
  "Faster project delivery timelines",
  "Cost optimization through precise detailing",
  "Compliance with Indian and international codes",
  "Seamless collaboration across disciplines",
];

const SoftwareExpertisePage = () => {
  return (
    <Layout>
      <PageHero image={heroSoftware} title="Software Expertise" subtitle="Industry-leading tools powering precision and efficiency in every project." />

      <section className="section-padding">
        <div className="container mx-auto space-y-12">
          {softwareList.map((s, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{s.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-2">Key Outputs</h4>
                  <div className="flex flex-wrap gap-2">
                    {s.outputs.map((o) => (
                      <span key={o} className="text-xs font-heading font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground">{o}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`rounded-lg overflow-hidden aspect-video ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Why Our Software Stack Matters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="text-muted-foreground text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareExpertisePage;
